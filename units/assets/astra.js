/* © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
   astra.js — the Ad Astra page engine (schema astra/2; every astra/1 manifest still renders). One script drives every page:
     <body data-page="index|unit|ebook|modules|arcade">
   Layout (all under one folder, e.g. site/units/): index.html, registry.js, dashboard.html, assets/, <slug>/{unit,ebook,modules,arcade}.html + manifest.js.
   Unit pages are identical stubs. The unit is the folder name, or ?u=<slug>.
   The manifest is loaded from ../<slug>/manifest.js. No dependencies. The only network calls are the fonts linked by the stubs and,
   when registry.js sets ASTRA_CONFIG.endpoint AND the pupil has typed a class code, anonymous JSON events POSTed to <endpoint>/event.
   Built from the KS5 Summit kit (summit-core.js / ebook.html), approved by the client.

   astra/2 engine features (SCHEMA.md, "astra/2 additions"):
     spaced return   — gate items answered right come back after meta.spacing days ("Due today" strip; ?today=+N simulates time)
     misconceptions  — Item.feedback / Item.misconceptions shown first in a "What happened" box on a wrong answer
     explain it back — after a correct task, "Say why that works" (typed or dictated), kept on the device, never marked
     contexts        — Module.contexts: "choose the story", same answer by construction
     pupil voice     — Too hard · About right · Too easy after each module, summarised on the chapter chooser
     constellation   — one star per chapter over the unit plate (SVG, no animation, no points)
     home language   — pretext.l1 lines under each English sentence of the read-along
     dashboard       — class code on the unit page; anonymous events only; nothing identifying is ever sent
     widgets         — Section.widget handed to window.AstraWidgets.render(container, widget, opts) when assets/astra-widgets.js is present
   Hooks for sibling scripts: Astra.ready(fn) runs fn(unit) once the manifest is loaded (used by astra-arcade.js);
   window event "astra:unit" {detail:{unit, kind}}; window event "astra:calm" when calm reading toggles. */
(function () {
  "use strict";
  const A = (window.Astra = window.Astra || {});
  const ME = document.currentScript;
  A.assets = new URL(".", (ME && ME.src) || location.href).href;
  const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,60}$/;
  const NOTICE = "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework";
  const PILOT = "Pilot exemplar — awaiting department specialist review";

  /* ================= helpers ================= */
  const h = (A.h = function (tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v; /* only ever used with the engine's own icon markup */
      else if (k.slice(0, 2) === "on" && typeof v === "function") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat(Infinity)) if (k != null && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
    return e;
  });
  A.q = (k) => new URLSearchParams(location.search).get(k);
  /* A settled permutation of 0..n-1 from a string key: the same order every time, for every pupil and
     every device, and the same when a question returns on spaced review — so a class can still talk about
     "the third one" — but not the order the author happened to write. Used for multiple-choice options,
     where authors overwhelmingly put the right answer first. */
  A.settledOrder = (n, key) => {
    let s = 2166136261 >>> 0; const k = String(key || "");
    for (let i = 0; i < k.length; i++) { s ^= k.charCodeAt(i); s = Math.imul(s, 16777619) >>> 0; }
    const rnd = () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
    const a = Array.from({ length: n }, (_, i) => i);
    for (let pass = 0; pass < 8; pass++) {
      for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      if (n < 2 || a.some((v, i) => v !== i)) break;            /* never hand back the author's own order */
    }
    if (n > 1 && a.every((v, i) => v === i)) a.push(a.shift());  /* and if eight passes still landed there, step it */
    return a;
  };
  A.shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  A.fmt = (n) => { if (typeof n !== "number") return String(n); const v = +n.toPrecision(10); return (v < 0 ? "−" : "") + String(Math.abs(v)); };
  A.parseNum = (s) => {
    s = String(s == null ? "" : s).trim().replace(/[−‒–—]/g, "-").replace(/[£$€%,\s]/g, "").replace(/^\+/, "");
    const fr = s.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/); if (fr) return +fr[1] / +fr[2];
    if (!/^-?(\d+\.?\d*|\.\d+)/.test(s)) return NaN;
    const v = parseFloat(s); return Number.isFinite(v) ? v : NaN;
  };
  A.norm = (s) => String(s == null ? "" : s).toLowerCase().replace(/[−–]/g, "-").replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim().replace(/[.,;:!]+$/, "");
  A.store = {
    get(k, d) { try { const v = window.localStorage.getItem("astra." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { window.localStorage.setItem("astra." + k, JSON.stringify(v)); } catch (e) { /* storage off: the page still works */ } },
  };
  A.sentences = (p) => { const out = String(p).match(/[^.!?]+(?:[.!?]+["”’)]*|$)(?:\s+|$)/g); return (out || [p]).map((s) => s.trim()).filter(Boolean); };
  let uidN = 0; const uid = (p) => (p || "a") + "-" + (++uidN);
  const DAY = 86400000;
  /* hidden test flag: ?today=+N shifts "now" by N days (URLSearchParams turns "+" into a space, so whitespace is stripped) */
  A.today = (() => { const v = A.q("today"); if (v == null) return 0; const n = parseFloat(String(v).replace(/\s/g, "")); return Number.isFinite(n) ? n : 0; })();
  A.now = () => Date.now() + A.today * DAY;
  A.plural = (n, one, many) => n + " " + (n === 1 ? one : (many || one + "s"));

  /* ================= registry-level config + dashboard client ================= */
  /* registry.js (written by build.py) may set window.ASTRA_CONFIG = {endpoint:"", pilotNotice:true}. The unit stubs load ../registry.js. */
  A.cfg = () => (typeof window.ASTRA_CONFIG === "object" && window.ASTRA_CONFIG) || {};
  A.endpoint = () => String(A.cfg().endpoint || "").trim().replace(/\/+$/, "");
  const CODE_RE = /^[A-Za-z0-9]{4,6}$/;
  A.classCode = {
    get() { const c = A.store.get("class", ""); return CODE_RE.test(c) ? String(c).toUpperCase() : ""; },
    set(c) { c = String(c || "").trim().toUpperCase(); if (c && !CODE_RE.test(c)) return false; A.store.set("class", c); return true; },
    valid: (c) => CODE_RE.test(String(c || "").trim()),
  };
  A.sharing = () => !!(A.endpoint() && A.classCode.get());
  /* Anonymous event. Shape: {v:2, class, unit, chapter, type:"gate"|"module"|"voice"|"return"|"explain", value, level, index, ts}.
     Never names, never free text (the explain text stays on the device: only {type:"explain", value:1} is sent). Fire and forget. */
  A.send = function (slug, chapter, type, value, level, index) {
    try {
      if (!A.sharing()) return false;
      const ev = { v: 2, class: A.classCode.get(), unit: slug, chapter: chapter == null ? null : String(chapter), type, value, level: level || null, ts: Date.now() };
      if (index != null) ev.index = index;
      if (typeof window.fetch !== "function") return false;
      const p = window.fetch(A.endpoint() + "/event", { method: "POST", mode: "cors", keepalive: true, headers: { "content-type": "application/json" }, body: JSON.stringify(ev) });
      if (p && p.catch) p.catch(() => { }); return true;
    } catch (e) { return false; }
  };

  /* ================= icons (original line icons, 24×24) ================= */
  const P = {
    star: '<path d="M12 2.5l2.2 6.6 6.8.1-5.5 4.1 2 6.6L12 16l-5.5 3.9 2-6.6L3 9.2l6.8-.1z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 0 2 2h13M8 7h7"/>',
    play: '<path d="M7 5v14l11-7z" fill="currentColor" stroke="none"/>',
    pause: '<path d="M8 5v14M16 5v14" stroke-width="3"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="1.5" fill="currentColor" stroke="none"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    cross: '<path d="M6 6l12 12M18 6 6 18"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7"/><circle cx="12" cy="17" r=".8" fill="currentColor"/>',
    bulb: '<path d="M9 18h6M10 21h4M8.5 14.5a5.5 5.5 0 1 1 7 0c-.8.7-1.5 1.7-1.5 3.5h-4c0-1.8-.7-2.8-1.5-3.5z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    layers: '<path d="M12 3 2.5 8 12 13l9.5-5z"/><path d="M2.5 12 12 17l9.5-5M2.5 16 12 21l9.5-5"/>',
    ear: '<path d="M7 10a5 5 0 1 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 10a2 2 0 1 1 4 0"/>',
    words: '<path d="M4 6h16M4 12h10M4 18h13"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    quote: '<path d="M7 7h4v4c0 3-2 5-4 5M14 7h4v4c0 3-2 5-4 5"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    chart: '<path d="M4 20h16M7 16v-5M12 16V8M17 16v-3"/>',
    game: '<rect x="3" y="7" width="18" height="11" rx="4"/><path d="M8 11v3M6.5 12.5h3M15 11.5h.01M17.5 13.5h.01"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  };
  A.icon = (n, cls) => `<svg class="ic ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[n] || P.star}</svg>`;
  const I = (n) => h("span", { html: A.icon(n), "aria-hidden": "true", style: "display:inline-flex" });

  /* ================= preferences, theme, motion ================= */
  A.prefs = Object.assign({ calm: false, rate: 0.95 }, A.store.get("prefs", {}));
  A.savePrefs = () => A.store.set("prefs", A.prefs);
  A.applyCalm = () => { document.documentElement.dataset.calm = A.prefs.calm ? "1" : "0"; };
  A.applyCalm();
  A.noMotion = () => A.prefs.calm || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  A.theme = function (subjectKey, year) {
    const r = document.documentElement, y = Math.max(7, Math.min(11, parseInt(year, 10) || 7));
    r.dataset.subject = ["english", "englit", "maths", "combined", "triple", "geography", "history"].indexOf(subjectKey) >= 0 ? subjectKey : "maths";
    r.dataset.year = String(y); r.dataset.dark = y >= 10 ? "1" : "0";
  };
  A.plateUrl = (m) => A.assets + "plates/" + m.subjectKey + "_y" + Math.max(7, Math.min(11, parseInt(m.year, 10) || 7)) + ".svg";
  const PLATE = {
    english: ["The Scriptorium", "Engraved plate: a quill, an ink-well and an illuminated page."],
    englit: ["The Heath", "Engraved plate: three cloaked figures, a crescent moon, and a crown above a dagger."],
    maths: ["The Astrolabe", "Engraved plate: a number line from −9 to +9 bent into a circle, half in shadow and half in light."],
    combined: ["The Alchemist’s Circuit", "Engraved plate: a series circuit with a cell, components and a lamp, drawn as an alchemical diagram."],
    triple: ["The Celestial Plate", "Engraved plate: the Sun, elliptical orbits, a ringed planet, a comet and an invented constellation."],
    geography: ["The Cartographer’s Table", "Engraved plate: a hatched sea and coastline, contour hills, a river, a compass rose and a scale bar."],
    history: ["The Chronicle", "Engraved plate: an unrolled timeline scroll with three medallions, an hourglass, a column and a sealed laurel."],
  };
  A.plateName = (k) => (PLATE[k] || PLATE.maths)[0];
  A.plateAlt = (k) => (PLATE[k] || PLATE.maths)[1];

  /* ================= unit loading ================= */
  A.slug = function () {
    const u = A.q("u"); if (u != null) return SLUG_RE.test(u) ? u : null;
    const parts = location.pathname.split("/").filter(Boolean);
    let f = parts.length >= 2 ? parts[parts.length - 2] : ""; try { f = decodeURIComponent(f); } catch (e) { }
    return SLUG_RE.test(f) ? f : null;
  };
  A.loadScript = (src) => new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = () => res(); s.onerror = () => rej(new Error("Could not load " + src)); document.head.appendChild(s); });
  A.loadUnit = async function (slug, base) {
    window.ASTRA_UNITS = window.ASTRA_UNITS || {};
    if (!window.ASTRA_UNITS[slug]) await A.loadScript((base == null ? "../" : base) + slug + "/manifest.js");
    const u = window.ASTRA_UNITS[slug];
    if (!u || !u.meta || !Array.isArray(u.chapters)) throw new Error("The manifest for “" + slug + "” did not register a unit.");
    return u;
  };
  A.link = function (file, params) { /* keeps ?u= (and the hidden ?today= test flag) when the page was opened with them */
    const p = new URLSearchParams(); const u = A.q("u"); if (u) p.set("u", u); const t = A.q("today"); if (t != null) p.set("today", String(t).replace(/\s/g, "+"));
    if (params) for (const k in params) if (params[k] != null) p.set(k, params[k]);
    const s = p.toString(); return file + (s ? "?" + s : "");
  };

  /* ================= progress (per unit, this device only) =================
     gate[ch]=score · level[ch]=support|core|stretch · done[ch][i]=true
     ret[ch][i]={f:firstCorrect ms, k:interval index}   (spaced return)
     voice[ch][i]="hard"|"right"|"easy" · explain[ch][i]="text" · ctx[ch][i]=context index (−1 = plain task) */
  A.prog = (slug) => { const p = A.store.get("unit." + slug, null) || {}; for (const k of ["gate", "level", "done", "ret", "voice", "explain", "ctx"]) p[k] = p[k] || {}; return p; };
  A.saveProg = (slug, p) => A.store.set("unit." + slug, p);
  A.doneCount = (p, ch) => Object.keys(p.done[ch.key] || {}).filter((k) => +k < (ch.modules || []).length).length;
  A.allDone = (p, ch) => (ch.modules || []).length > 0 && A.doneCount(p, ch) === (ch.modules || []).length;
  const VOICE = [["hard", "Too hard", "too hard"], ["right", "About right", "about right"], ["easy", "Too easy", "too easy"]];
  A.voiceSummary = function (p, ch) { /* "you said: about right ×2, too hard ×1" or "" */
    const v = p.voice[ch.key] || {}; const n = {}; Object.keys(v).forEach((i) => { if (+i < (ch.modules || []).length) n[v[i]] = (n[v[i]] || 0) + 1; });
    const parts = VOICE.filter((x) => n[x[0]]).sort((a, b) => n[b[0]] - n[a[0]]).map((x) => x[2] + " ×" + n[x[0]]);
    return parts.length ? "you said: " + parts.join(", ") : "";
  };

  /* ================= spaced return ================= */
  A.spacing = (u) => { const s = u && u.meta && Array.isArray(u.meta.spacing) ? u.meta.spacing.map(Number).filter((d) => d > 0) : null; return s && s.length ? s : [2, 7, 30]; };
  /* record a first correct answer for gate item i of chapter ch (no change if a record already exists) */
  A.noteCorrect = function (slug, ch, i, p) {
    const own = !p; p = p || A.prog(slug); p.ret[ch.key] = p.ret[ch.key] || {};
    if (!p.ret[ch.key][i]) { p.ret[ch.key][i] = { f: A.now(), k: 0 }; if (own) A.saveProg(slug, p); return true; }
    return false;
  };
  /* items due now: [{ch, i, it, rec, k}] in chapter order */
  A.due = function (u, p) {
    p = p || A.prog(u.meta.slug); const sp = A.spacing(u); const now = A.now(); const out = [];
    u.chapters.forEach((ch) => { const r = p.ret[ch.key] || {}; Object.keys(r).forEach((i) => { const rec = r[i]; const it = (ch.gate || [])[+i]; if (!it || !rec || typeof rec.f !== "number") return; const k = rec.k | 0; if (k < sp.length && now >= rec.f + sp[k] * DAY) out.push({ ch, i: +i, it, rec, k }); }); });
    return out;
  };
  /* next due moment across all records, or null */
  A.nextDue = function (u, p) {
    p = p || A.prog(u.meta.slug); const sp = A.spacing(u); let t = null;
    u.chapters.forEach((ch) => { const r = p.ret[ch.key] || {}; Object.keys(r).forEach((i) => { const rec = r[i]; if (!rec || typeof rec.f !== "number") return; const k = rec.k | 0; if (k < sp.length) { const d = rec.f + sp[k] * DAY; if (t == null || d < t) t = d; } }); });
    return t;
  };
  A.daysUntil = (t) => Math.max(0, Math.ceil((t - A.now()) / DAY));

  /* ================= toast ================= */
  A.toast = function (msg) {
    let t = document.getElementById("astra-toast");
    if (!t) { t = h("div", { id: "astra-toast", class: "toast", role: "status" }); document.body.append(t); }
    t.textContent = msg; t.hidden = false; clearTimeout(t._h); t._h = setTimeout(() => { t.hidden = true; }, 6000);
  };

  /* ================= voice-over ================= */
  const V = (A.voice = { synth: ("speechSynthesis" in window) ? window.speechSynthesis : null, lang: "en-GB", queue: [], i: 0, playing: false, cur: null, tok: 0, onEnd: null, audio: null });
  Object.defineProperty(V, "rate", { get: () => A.prefs.rate, set: (v) => { A.prefs.rate = v; A.savePrefs(); } });
  V.pick = function () {
    if (!V.synth) return null; let vs = []; try { vs = V.synth.getVoices() || []; } catch (e) { }
    const pref = ["Google UK English Female", "Google UK English Male", "Microsoft Sonia", "Microsoft Libby", "Microsoft Ryan", "Serena", "Kate", "Daniel"];
    for (const p of pref) { const v = vs.find((x) => x.name.indexOf(p) === 0 && /en[-_]GB/i.test(x.lang)); if (v) return v; }
    return vs.find((x) => /en[-_]GB/i.test(x.lang)) || vs.find((x) => /^en/i.test(x.lang)) || null;
  };
  if (V.synth) { try { V.synth.getVoices(); V.synth.addEventListener && V.synth.addEventListener("voiceschanged", () => { }); } catch (e) { } }
  const unlight = () => { if (V.cur) { V.cur.classList.remove("speaking"); V.cur = null; } };
  V.stop = function () {
    V.tok++; V.playing = false; V.queue = []; V.i = 0;
    if (V.synth) { try { V.synth.cancel(); } catch (e) { } }
    if (V.audio) { try { V.audio.pause(); } catch (e) { } V.audio = null; }
    unlight(); const f = V.onEnd; V.onEnd = null; if (f) f();
  };
  /* items: [{text, el, before}] — el is highlighted while its text is read */
  V.play = function (items, opts) {
    V.stop(); opts = opts || {};
    if (!V.synth || typeof window.SpeechSynthesisUtterance !== "function") { A.toast("This browser has no speech voice. Try Chrome, Edge or Safari — or ask your teacher for the recorded audio."); if (opts.onEnd) opts.onEnd(); return; }
    const tok = V.tok; V.queue = items.filter((x) => x && x.text); V.i = 0; V.playing = true; V.onEnd = opts.onEnd || null; let errs = 0;
    const voice = V.pick();
    const finish = () => { if (tok !== V.tok) return; V.playing = false; unlight(); const f = V.onEnd; V.onEnd = null; if (f) f(); };
    const next = () => {
      if (tok !== V.tok) return;
      if (V.i >= V.queue.length) return finish();
      const it = V.queue[V.i]; if (it.before) it.before();
      unlight(); V.cur = it.el || null;
      if (V.cur) { V.cur.classList.add("speaking"); if (opts.scroll) { try { V.cur.scrollIntoView({ block: "nearest", behavior: A.noMotion() ? "auto" : "smooth" }); } catch (e) { } } }
      if (opts.onStep) opts.onStep(V.i, it);
      const u = new SpeechSynthesisUtterance(it.text); u.rate = V.rate; u.lang = V.lang; if (voice) u.voice = voice;
      V._u = u; /* keep a reference: some engines drop callbacks on collected utterances */
      u.onend = () => { if (tok !== V.tok) return; errs = 0; V.i++; next(); };
      u.onerror = (ev) => {
        if (tok !== V.tok) return; const e = (ev && ev.error) || "";
        if (e === "interrupted" || e === "canceled") return;
        errs++; if (errs >= 2 || /not-allowed|synthesis-unavailable|synthesis-failed|audio-hardware|voice-unavailable/.test(e)) { V.stop(); A.toast("The voice could not start on this device" + (e ? " (" + e + ")" : "") + ". Tap the page once and press play again, or try Chrome, Edge or Safari."); return; }
        V.i++; next();
      };
      try { V.synth.speak(u); } catch (e) { V.stop(); A.toast("The voice could not start on this device."); }
    };
    next();
  };
  /* recorded audio with optional sentence cues (seconds at which each sentence starts) */
  V.playAudio = function (src, cues, els, opts) {
    V.stop(); opts = opts || {}; const tok = V.tok; const au = new Audio(src); V.audio = au; V.playing = true; V.onEnd = opts.onEnd || null;
    const done = () => { if (tok !== V.tok) return; try { au.pause(); } catch (e) { } V.playing = false; V.audio = null; unlight(); const f = V.onEnd; V.onEnd = null; if (f) f(); };
    const stopAt = (cues && opts.to != null && cues[opts.to] != null) ? cues[opts.to] : null;
    if (cues && opts.from != null && cues[opts.from] != null) au.addEventListener("loadedmetadata", () => { try { au.currentTime = cues[opts.from]; } catch (e) { } }, { once: true });
    au.addEventListener("timeupdate", () => {
      if (tok !== V.tok || !cues) return; if (stopAt != null && au.currentTime >= stopAt) return done();
      let k = -1; for (let i = 0; i < cues.length; i++) if (au.currentTime >= cues[i]) k = i; const el = els[k] || null; if (el !== V.cur) { unlight(); V.cur = el; if (el) el.classList.add("speaking"); }
    });
    au.addEventListener("ended", done);
    const fail = () => { if (tok !== V.tok) return; A.toast("The recorded audio could not be played, so the device voice will read instead."); if (opts.fallback) opts.fallback(); else done(); };
    au.addEventListener("error", fail);
    const p = au.play(); if (p && p.catch) p.catch(fail);
  };
  V.say = (text, el) => V.play([{ text: String(text || ""), el: el || null }]); /* one utterance; used by widgets (opts.voice.say) */
  V.toggle = function () {
    if (V.audio) { if (V.audio.paused) V.audio.play().catch(() => { }); else V.audio.pause(); return; }
    if (!V.synth) return; try { if (V.synth.paused) V.synth.resume(); else if (V.synth.speaking) V.synth.pause(); } catch (e) { }
  };
  /* a play/stop toggle button: getItems() returns the items to read */
  A.speakBtn = function (label, getItems, o) {
    o = o || {}; const b = h("button", { type: "button", class: "vbtn" + (o.cls ? " " + o.cls : ""), "aria-pressed": "false", "aria-label": o.aria || label || "Read aloud", title: o.aria || label || "Read aloud" }, I("play"), label ? h("span", null, label) : null);
    const off = () => { b.classList.remove("on"); b.setAttribute("aria-pressed", "false"); };
    b.addEventListener("click", () => {
      if (b.classList.contains("on")) { V.stop(); return; }
      const items = getItems(); V.stop(); b.classList.add("on"); b.setAttribute("aria-pressed", "true");
      if (o.custom) o.custom(items, off); else V.play(items, { onEnd: off, onStep: o.onStep, scroll: o.scroll });
    });
    return b;
  };
  A.speedSelect = function () {
    const s = h("select", { class: "sel", "aria-label": "Reading speed" }, [["0.8", "Slower"], ["0.95", "Normal"], ["1.1", "Faster"]].map((o) => h("option", { value: o[0] }, o[1])));
    s.value = ["0.8", "0.95", "1.1"].indexOf(String(V.rate)) >= 0 ? String(V.rate) : "0.95";
    s.addEventListener("change", () => { V.rate = +s.value; document.querySelectorAll("select[data-speed]").forEach((x) => { if (x !== s) x.value = s.value; }); });
    s.setAttribute("data-speed", "1"); return s;
  };

  /* ================= chrome: top bar + footer ================= */
  A.topbar = function (m, active, home) {
    const calm = h("button", { type: "button", class: "calmtog", "aria-pressed": A.prefs.calm ? "true" : "false", title: "Larger text, more space, cream page, no animation" }, h("span", { class: "sw", "aria-hidden": "true" }), "Calm reading");
    calm.addEventListener("click", () => { A.prefs.calm = !A.prefs.calm; A.savePrefs(); A.applyCalm(); calm.setAttribute("aria-pressed", A.prefs.calm ? "true" : "false"); window.dispatchEvent(new Event("astra:calm")); });
    /* [file, label, icon, plainHref?] — Arcade lives in the unit folder (astra-arcade.js); Dashboard is site-wide (../dashboard.html) */
    const links = m ? [["unit.html", "Unit", "grid"], ["ebook.html", "Ebook", "book"], ["modules.html", "Modules", "layers"], ["arcade.html", "Arcade", "game"], ["../dashboard.html", "Dashboard", "chart", true]] : [];
    const nav = h("nav", { "aria-label": m ? "Unit pages" : "Site" }, links.map((l) => h("a", { href: l[3] ? l[0] : A.link(l[0]), "aria-current": l[1] === active ? "page" : null, class: l[3] || l[1] === "Arcade" ? "aux" : null }, I(l[2]), l[1])), calm);
    const bar = h("header", { class: "topbar chrome" }, h("div", { class: "in" }, h("a", { class: "brand", href: home || "../index.html" }, I("star"), "Ad Astra"), m ? h("span", { class: "subj" }, m.subject + " · Year " + m.year + " · " + m.title) : null, nav));
    document.body.prepend(h("a", { class: "skip", href: "#main" }, "Skip to content"), bar);
  };
  A.footer = function (m) {
    document.body.append(h("footer", { class: "foot chrome" },
      h("p", null, NOTICE),
      m ? h("p", { style: "opacity:.85" }, [m.board, m.spec, m.specRef].filter(Boolean).join(" · ")) : null,
      h("p", { class: "pilot" }, PILOT)));
  };
  A.fail = function (msg) {
    const main = document.getElementById("main") || document.body;
    main.replaceChildren(h("div", { class: "wrap", style: "padding:40px 16px" }, h("div", { class: "err", role: "alert" }, h("h2", null, "This page could not open"), h("p", null, msg), h("p", null, h("a", { href: "../index.html" }, "Back to all units")))));
  };

  /* ================= answer controls (gate items and tasks) ================= */
  const KIND = { mcq: "Choose", numeric: "Calculate", gap: "Fill the gap", order: "Put in order", match: "Match", written: "Write" };
  A.answerText = function (it) {
    if (it.kind === "mcq") return it.options[it.answer];
    if (it.kind === "numeric") return A.fmt(it.answer) + (it.units ? " " + it.units : "");
    if (it.kind === "gap") return it.answer;
    if (it.kind === "order") return it.items.join(" → ");
    if (it.kind === "match") return it.pairs.map((p) => p[0] + " — " + p[1]).join("; ");
    return "";
  };
  /* returns {node, answered(), correct(), marks(), lock(), focus()} ; the question is part of the node */
  A.control = function (it, o) {
    o = o || {}; const qid = uid("q"); const node = h("div", { class: "ctl" }); let locked = false; let api;
    if (it.kind === "mcq") {
      let sel = -1; node.append(h("p", { class: "iq", id: qid }, it.q));
      /* Shown in a settled order, not the author's. `sel` stays the MANIFEST index, so answer, feedback,
         misconceptions, marking and anything stored elsewhere are untouched by the reordering. */
      const ord = A.settledOrder(it.options.length, String(it.q) + "|" + it.options.join("|"));
      const pos = []; ord.forEach((orig, d) => { pos[orig] = d; });
      const bs = ord.map((orig, d) => h("button", { type: "button", class: "chip", "aria-pressed": "false", onclick: () => { if (locked) return; sel = orig; bs.forEach((b, j) => b.setAttribute("aria-pressed", j === d ? "true" : "false")); if (o.onChange) o.onChange(); } }, it.options[orig]));
      node.append(h("div", { class: "chips", role: "group", "aria-labelledby": qid }, bs));
      api = { value: () => sel, answered: () => sel >= 0, correct: () => sel === it.answer, marks() { bs[pos[it.answer]].classList.add("right"); if (sel >= 0 && sel !== it.answer) bs[pos[sel]].classList.add("wrong"); }, lock() { locked = true; bs.forEach((b) => b.setAttribute("aria-disabled", "true")); }, focus: () => bs[0].focus(), clear() { bs.forEach((b) => b.classList.remove("right", "wrong")); } };
    } else if (it.kind === "numeric") {
      node.append(h("p", { class: "iq", id: qid }, it.q));
      const inp = h("input", { class: "inp", type: "text", inputmode: "decimal", autocomplete: "off", spellcheck: "false", "aria-labelledby": qid, placeholder: "your answer" });
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && o.onEnter) { e.preventDefault(); o.onEnter(); } });
      const pm = h("button", { type: "button", class: "btn ghost small", "aria-label": "Switch between positive and negative", title: "Switch between positive and negative" }, "+ / −");
      pm.addEventListener("click", () => { if (locked) return; const v = inp.value.trim(); inp.value = /^[-−]/.test(v) ? v.replace(/^[-−]\s*/, "") : "−" + v; inp.focus(); });
      node.append(h("div", { class: "numrow" }, inp, it.units ? h("span", { class: "units" }, it.units) : null, pm));
      const tol = Math.abs(+it.tolerance || 0);
      api = { value: () => A.parseNum(inp.value), answered: () => inp.value.trim() !== "", correct: () => { const v = A.parseNum(inp.value); return Number.isFinite(v) && Math.abs(v - it.answer) <= tol + 1e-9; }, marks() { inp.style.borderColor = api.correct() ? "var(--ok)" : "var(--no)"; }, lock() { locked = true; inp.readOnly = true; }, focus: () => inp.focus(), clear() { inp.style.borderColor = ""; } };
    } else if (it.kind === "gap") {
      const parts = String(it.q).split("___"); let val = "";
      const slot = h("span", { class: "gapslot" }, " "); const say = h("span", { class: "vh" }, "blank");
      node.append(h("p", { class: "iq", id: qid }, parts[0], say, h("span", { "aria-hidden": "true" }, slot), parts.slice(1).join("___")));
      const setv = (v) => { val = v; slot.textContent = v || " "; say.textContent = v ? "(" + v + ")" : "blank"; if (o.onChange) o.onChange(); };
      let bs = [], inp = null;
      if (Array.isArray(it.options) && it.options.length) {
        bs = A.shuffle(it.options).map((t) => h("button", { type: "button", class: "chip", "aria-pressed": "false", "data-v": t, onclick: (e) => { if (locked) return; bs.forEach((b) => b.setAttribute("aria-pressed", b === e.currentTarget ? "true" : "false")); setv(t); } }, t));
        node.append(h("div", { class: "chips", role: "group", "aria-labelledby": qid }, bs));
      } else {
        inp = h("input", { class: "inp", type: "text", autocomplete: "off", "aria-labelledby": qid, placeholder: "the missing word" });
        inp.addEventListener("input", () => setv(inp.value.trim()));
        inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && o.onEnter) { e.preventDefault(); o.onEnter(); } });
        node.append(h("div", { class: "numrow" }, inp));
      }
      api = { value: () => val, answered: () => !!val, correct: () => A.norm(val) === A.norm(it.answer), marks() { bs.forEach((b) => { if (A.norm(b.dataset.v) === A.norm(it.answer)) b.classList.add("right"); else if (b.getAttribute("aria-pressed") === "true") b.classList.add("wrong"); }); if (inp) inp.style.borderColor = api.correct() ? "var(--ok)" : "var(--no)"; }, lock() { locked = true; bs.forEach((b) => b.setAttribute("aria-disabled", "true")); if (inp) inp.readOnly = true; }, focus: () => (bs[0] || inp).focus(), clear() { bs.forEach((b) => b.classList.remove("right", "wrong")); if (inp) inp.style.borderColor = ""; } };
    } else if (it.kind === "order") {
      node.append(h("p", { class: "iq", id: qid }, it.q || "Put these in the correct order."), h("p", { class: "note", style: "margin:0" }, "Tap the cards in order. Use the arrows to move a card, or × to put it back."));
      const n = it.items.length; let idx = A.shuffle(it.items.map((_, i) => i)); let guard = 0;
      while (n > 1 && idx.every((v, i) => v === i) && guard++ < 20) idx = A.shuffle(idx);
      let picked = []; const pool = h("div", { class: "chips", role: "group", "aria-label": "Cards to place" }); const list = h("ol", { class: "olist", "aria-label": "Your order" }); const live = h("span", { class: "vh", "aria-live": "polite" });
      const draw = (focusIdx) => {
        pool.replaceChildren(...idx.map((i) => h("button", { type: "button", class: "chip", disabled: picked.indexOf(i) >= 0 ? true : null, onclick: () => { if (locked) return; picked.push(i); live.textContent = "Placed " + picked.length + " of " + n + ": " + it.items[i]; draw(); if (o.onChange) o.onChange(); const nb = pool.querySelector("button:not([disabled])"); if (nb) nb.focus(); } }, it.items[i])));
        list.replaceChildren(...(picked.length ? picked.map((i, k) => h("li", { "data-k": k }, h("span", null, it.items[i]),
          h("button", { type: "button", class: "mv", "aria-label": "Move up: " + it.items[i], disabled: k === 0 || locked ? true : null, onclick: () => { [picked[k - 1], picked[k]] = [picked[k], picked[k - 1]]; draw("u" + (k - 1)); } }, "↑"),
          h("button", { type: "button", class: "mv", "aria-label": "Move down: " + it.items[i], disabled: k === picked.length - 1 || locked ? true : null, onclick: () => { [picked[k + 1], picked[k]] = [picked[k], picked[k + 1]]; draw("d" + (k + 1)); } }, "↓"),
          h("button", { type: "button", class: "mv", "aria-label": "Put back: " + it.items[i], disabled: locked ? true : null, onclick: () => { picked.splice(k, 1); draw(); } }, "×"))) : [h("li", { class: "oempty", style: "background:none" }, h("span", null, "Your order will appear here."))]));
        if (focusIdx) { const k = +focusIdx.slice(1); const li = list.children[k]; if (li) { const b = li.querySelectorAll("button")[focusIdx[0] === "u" ? 0 : 1]; if (b && !b.disabled) b.focus(); else if (li.querySelector("button:not([disabled])")) li.querySelector("button:not([disabled])").focus(); } }
      };
      draw(); node.append(pool, list, live);
      api = { answered: () => picked.length === n, correct: () => picked.length === n && picked.every((v, k) => v === k), marks() { Array.from(list.children).forEach((li, k) => li.classList.add(picked[k] === k ? "right" : "wrong")); }, lock() { locked = true; draw(); Array.from(list.children).forEach((li, k) => li.classList.add(picked[k] === k ? "right" : "wrong")); }, focus: () => { const b = pool.querySelector("button:not([disabled])"); if (b) b.focus(); }, clear() { Array.from(list.children).forEach((li) => li.classList.remove("right", "wrong")); } };
    } else if (it.kind === "match") {
      node.append(h("p", { class: "iq", id: qid }, it.q || "Match each item with its partner."));
      const rights = A.shuffle(Array.from(new Set(it.pairs.map((p) => p[1])))); const sels = [];
      const grid = h("div", { class: "mgrid", role: "group", "aria-labelledby": qid });
      it.pairs.forEach((p) => { const lid = uid("ml"); const s = h("select", { class: "sel", "aria-labelledby": lid }, h("option", { value: "" }, "Choose…"), rights.map((r) => h("option", { value: r }, r))); s.addEventListener("change", () => { s.classList.remove("right", "wrong"); if (o.onChange) o.onChange(); }); sels.push(s); grid.append(h("div", { class: "ml", id: lid }, p[0]), s); });
      node.append(grid);
      api = { answered: () => sels.every((s) => s.value), correct: () => it.pairs.every((p, i) => sels[i].value === p[1]), marks() { it.pairs.forEach((p, i) => sels[i].classList.add(sels[i].value === p[1] ? "right" : "wrong")); }, lock() { locked = true; sels.forEach((s) => (s.disabled = true)); }, focus: () => sels[0].focus(), clear() { sels.forEach((s) => s.classList.remove("right", "wrong")); } };
    } else {
      node.append(h("p", { class: "iq" }, it.q || ""), h("p", { class: "note" }, "This question type (" + String(it.kind) + ") is not supported by this version of the engine."));
      api = { answered: () => true, correct: () => true, marks() { }, lock() { }, focus() { }, clear() { } };
    }
    if (!api.value) api.value = () => null;
    api.node = node; api.qid = qid; return api;
  };
  const whyBox = (text, label) => { const b = h("div", { class: "why" }); b.append(h("div", { class: "wh" }, I("bulb"), label || "Why"), h("p", null, text), A.speakBtn("Hear it", () => [{ text, el: b }], { cls: "tiny" })); return b; };
  /* misconception feedback: the text the item's author wrote for THIS wrong answer, or null (→ the page behaves as before) */
  A.feedbackFor = function (it, v) {
    if (!it) return null;
    if (it.kind === "mcq" && Array.isArray(it.feedback)) { const f = it.feedback[v]; return typeof f === "string" && f.trim() && v !== it.answer ? f.trim() : null; }
    if (it.kind === "gap" && it.feedback && typeof it.feedback === "object" && !Array.isArray(it.feedback)) { for (const k in it.feedback) if (A.norm(k) === A.norm(v) && A.norm(k) !== A.norm(it.answer)) { const f = it.feedback[k]; return typeof f === "string" && f.trim() ? f.trim() : null; } return null; }
    if (it.kind === "numeric" && Array.isArray(it.misconceptions)) { if (typeof v !== "number" || !Number.isFinite(v)) return null; const tol = Math.abs(+it.tolerance || 0); const m = it.misconceptions.find((x) => x && typeof x.answer === "number" && Math.abs(v - x.answer) <= tol + 1e-9 && Math.abs(x.answer - it.answer) > tol + 1e-9); return m && m.says ? String(m.says) : null; }
    return null;
  };
  const whatBox = (text) => { const b = h("div", { class: "what" }); b.append(h("div", { class: "wh" }, I("question"), "What happened"), h("p", null, text), A.speakBtn("Hear it", () => [{ text, el: b }], { cls: "tiny" })); return b; };

  /* ================= the task (Step 4) ================= */
  A.task = function (md, o) {
    o = o || {}; const it = md.task || {}; const node = h("div", { class: "item" }); let tries = 0;
    node.append(h("div", { class: "ihead" }, h("span", { class: "ikind" }, KIND[it.kind] || "Task"), it.marks ? h("span", { class: "marks" }, it.marks + " marks") : null, A.speakBtn("", () => [{ text: it.q }], { cls: "tiny icon", aria: "Hear the question" })));
    const verdict = h("div", { class: "verdict", "aria-live": "polite" });
    const why = md.why ? whyBox(md.why) : null; if (why) why.hidden = true;
    if (it.kind === "written") {
      const qid = uid("q"); node.append(h("p", { class: "iq", id: qid }, it.q));
      const ta = h("textarea", { class: "inp", "aria-labelledby": qid, placeholder: "Write your answer here. It stays on this page; nothing is sent anywhere." });
      const boxes = (it.criteria || []).map((c) => h("input", { type: "checkbox" }));
      const crit = h("fieldset", { style: "border:0;padding:0;margin:0" }, h("legend", { style: "font-weight:600;padding:0;margin-bottom:6px" }, "Check your answer: tick what you did"), h("ul", { class: "crit" }, (it.criteria || []).map((c, i) => h("li", null, h("label", null, boxes[i], h("span", null, c))))));
      const model = h("div", { class: "model", hidden: true }, h("div", { class: "wh", style: "font-weight:700;color:var(--acc);font-family:var(--f-ui)" }, "A model answer"), h("p", { style: "margin:4px 0 8px" }, it.model || ""), A.speakBtn("Hear it", () => [{ text: it.model, el: model }], { cls: "tiny" }));
      const showM = h("button", { type: "button", class: "btn ghost", "aria-expanded": "false" }, "Show a model");
      showM.addEventListener("click", () => { model.hidden = !model.hidden; showM.setAttribute("aria-expanded", model.hidden ? "false" : "true"); showM.textContent = model.hidden ? "Show a model" : "Hide the model"; });
      const doneB = h("button", { type: "button", class: "btn" }, I("check"), "I have checked my work");
      doneB.addEventListener("click", () => {
        if (!ta.value.trim() && !boxes.some((b) => b.checked)) { verdict.className = "verdict no"; verdict.textContent = "Write your answer first, then tick what you did."; return; }
        const k = boxes.filter((b) => b.checked).length; verdict.className = "verdict ok"; verdict.replaceChildren(I("check"), "Self-checked: " + k + " of " + boxes.length + " ticked." + (k < boxes.length ? " Look at the model and add what is missing." : ""));
        if (why) why.hidden = false; if (o.onDone) o.onDone(true);
      });
      node.append(ta, crit, h("div", { class: "ibar" }, doneB, showM), verdict, model);
      if (why) node.append(why);
      return node;
    }
    const ctl = A.control(it, { onEnter: () => check(), onChange: () => { verdict.textContent = ""; verdict.className = "verdict"; ctl.clear(); } });
    const ansline = h("p", { class: "ansline", hidden: true }, "Answer: ", h("b", null, A.answerText(it)));
    const fbHost = h("div", { class: "fbhost" }); /* the "What happened" box for a wrong answer with authored feedback (astra/2) */
    const showA = h("button", { type: "button", class: "btn ghost", hidden: true }, "Show me the answer");
    showA.addEventListener("click", () => { ansline.hidden = false; if (why) why.hidden = false; showA.hidden = true; });
    const checkB = h("button", { type: "button", class: "btn" }, I("check"), "Check");
    let solved = false;
    function check() {
      if (solved) return;
      if (!ctl.answered()) { verdict.className = "verdict no"; verdict.textContent = "Answer first, then check."; return; }
      tries++; ctl.marks();
      if (ctl.correct()) {
        const hadFocus = document.activeElement === checkB;
        solved = true; ctl.lock(); checkB.disabled = true; showA.hidden = true; fbHost.replaceChildren(); verdict.className = "verdict ok"; verdict.replaceChildren(I("check"), tries === 1 ? "Correct — first time." : "Correct.");
        if (hadFocus) { verdict.tabIndex = -1; try { verdict.focus({ preventScroll: true }); } catch (e) { } }
        ansline.hidden = false; if (why) why.hidden = false; if (o.onDone) o.onDone(true);
      } else {
        const fb = A.feedbackFor(it, ctl.value());
        verdict.className = "verdict no"; verdict.replaceChildren(I("question"), fb ? "Not quite yet. Read what happened, change your answer and check again." : "Not quite yet. Use your level’s help, change your answer and check again.");
        if (fb) fbHost.replaceChildren(whatBox(fb)); else fbHost.replaceChildren();
        if (tries >= 2) showA.hidden = false;
      }
    }
    checkB.addEventListener("click", check);
    node.append(ctl.node, h("div", { class: "ibar" }, checkB, showA), verdict, fbHost, ansline);
    if (why) node.append(why);
    return node;
  };

  /* ================= levels ================= */
  const LEVELS = [["support", "Support", "Steps and a worked example"], ["core", "Core", "One hint, if you need it"], ["stretch", "Stretch", "No help — explain and go further"]];
  A.suggest = (score) => (score >= 3 ? "stretch" : score === 2 ? "core" : "support");
  A.levelPicker = function (current, suggested, onPick, legend) {
    const name = uid("lv");
    const fs = h("fieldset", { class: "levels" }, h("legend", null, legend || "Your level (you can change it)"),
      LEVELS.map((l) => h("label", { class: "lvopt" }, h("input", { type: "radio", name, value: l[0], checked: l[0] === current ? true : null }), h("span", null, h("b", null, l[1]), h("small", null, l[2]), l[0] === suggested ? h("span", { class: "sug" }, "Suggested for you") : null))));
    fs.addEventListener("change", (e) => { if (e.target && e.target.name === name) onPick(e.target.value); });
    return fs;
  };

  /* ================= explain it back (after a correct task) ================= */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  A.explainBox = function (slug, ch, i, md, level) {
    const p = A.prog(slug); const kept = (p.explain[ch.key] || {})[i]; const qid = uid("ex");
    const box = h("div", { class: "explain", role: "group", "aria-labelledby": qid });
    const ta = h("textarea", { class: "inp exin", maxlength: "240", rows: "2", "aria-labelledby": qid, placeholder: "One sentence is enough. It stays on this device and is never marked." });
    if (kept) ta.value = String(kept).slice(0, 240);
    const count = h("span", { class: "cnt", "aria-live": "off" }); const upd = () => { count.textContent = ta.value.length + "/240"; };
    const keepB = h("button", { type: "button", class: "btn small" }, I("check"), "Keep");
    const state = h("span", { class: "kept", role: "status" }, kept ? "Kept" : "");
    const setKept = (on) => { keepB.hidden = on; state.textContent = on ? "Kept" : ""; };
    setKept(!!kept); upd();
    ta.addEventListener("input", () => { upd(); setKept(false); });
    keepB.addEventListener("click", () => {
      const t = ta.value.trim().slice(0, 240); if (!t) { state.textContent = "Write or say a sentence first."; return; }
      const q = A.prog(slug); q.explain[ch.key] = q.explain[ch.key] || {}; const first = !q.explain[ch.key][i]; q.explain[ch.key][i] = t; A.saveProg(slug, q); setKept(true);
      if (first) A.send(slug, ch.key, "explain", 1, level, i); /* count only — the words never leave the device */
    });
    let sayB = null;
    if (SR) {
      sayB = h("button", { type: "button", class: "vbtn say", "aria-pressed": "false", title: "Dictate into the box" }, I("mic"), h("span", null, "Say it"));
      let rec = null;
      const off = () => { rec = null; sayB.classList.remove("on"); sayB.setAttribute("aria-pressed", "false"); sayB.lastChild.textContent = "Say it"; };
      sayB.addEventListener("click", () => {
        if (rec) { try { rec.stop(); } catch (e) { } off(); return; }
        try {
          rec = new SR(); rec.lang = "en-GB"; rec.interimResults = false; rec.maxAlternatives = 1;
          rec.onresult = (e) => { try { const t = e.results[0][0].transcript; ta.value = ((ta.value ? ta.value + " " : "") + t).slice(0, 240); upd(); setKept(false); } catch (x) { } };
          rec.onerror = (e) => { const c = (e && e.error) || ""; if (c !== "aborted") A.toast("The microphone could not be used" + (c ? " (" + c + ")" : "") + ". Type it instead."); off(); };
          rec.onend = off;
          rec.start(); sayB.classList.add("on"); sayB.setAttribute("aria-pressed", "true"); sayB.lastChild.textContent = "Listening…";
        } catch (e) { off(); A.toast("Dictation is not available here. Type it instead."); }
      });
    }
    box.append(h("div", { class: "wh", id: qid }, I("chat"), "Say why that works"),
      h("p", { class: "exq" }, md && md.explain ? md.explain : "In one sentence: why does that method give the right answer?"),
      ta, h("div", { class: "ibar" }, keepB, sayB, state, h("span", { class: "grow" }), count));
    return box;
  };

  /* ================= pupil voice (after each module) ================= */
  A.voiceBox = function (slug, ch, i, level) {
    const p = A.prog(slug); let cur = (p.voice[ch.key] || {})[i] || null; const qid = uid("pv");
    const bs = VOICE.map((v) => h("button", { type: "button", class: "chip pvb", "data-v": v[0], "aria-pressed": cur === v[0] ? "true" : "false" }, v[1]));
    const state = h("span", { class: "kept", role: "status" });
    bs.forEach((b) => b.addEventListener("click", () => {
      cur = b.dataset.v; bs.forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      const q = A.prog(slug); q.voice[ch.key] = q.voice[ch.key] || {}; q.voice[ch.key][i] = cur; A.saveProg(slug, q); state.textContent = "Thanks — you can change this any time.";
      A.send(slug, ch.key, "voice", cur, level, i);
    }));
    return h("div", { class: "voice", role: "group", "aria-labelledby": qid }, h("div", { class: "wh", id: qid }, "How was that?"), h("div", { class: "chips" }, bs), state);
  };

  /* ================= the module player (gate → level → same task) ================= */
  A.player = function (u, ch, o) {
    o = o || {}; const slug = u.meta.slug; const mods = ch.modules || []; const n = mods.length;
    const node = h("div", { class: "player" });
    const tl = h("div", { class: "ptabs", role: "tablist", "aria-label": "Chapter " + ch.n + " — check-in and modules" });
    const body = h("div", { class: "pbody", role: "tabpanel", tabindex: "-1" });
    const bar = h("i"); const pn = h("span", { class: "pn", "aria-live": "polite" });
    const prevB = h("button", { type: "button", class: "btn ghost small" }, "‹ Back"); const nextB = h("button", { type: "button", class: "btn small" }, "Next ›");
    node.append(tl, body, h("div", { class: "pfoot" }, h("div", { class: "bar", role: "presentation" }, bar), pn, prevB, nextB));
    let tab = o.start != null ? o.start : -1; /* -1 = check-in, 0..n-1 = modules */
    const P = () => A.prog(slug);
    const tabs = [-1].concat(mods.map((_, i) => i)).map((t) => {
      const b = h("button", { type: "button", role: "tab", id: uid("tab"), "aria-selected": "false", tabindex: "-1" }, t < 0 ? "Check-in" : String(t + 1));
      b.setAttribute("aria-label", t < 0 ? "Step 2: check-in" : "Module " + (t + 1) + ": " + mods[t].title);
      b.addEventListener("click", () => show(t, true));
      b.addEventListener("keydown", (e) => { const k = tabs.indexOf(b); if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); const j = (k + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length; show(j - 1, false); tabs[j].focus(); } });
      tl.append(b); return b;
    });
    function refresh() {
      const p = P(); const k = A.doneCount(p, ch);
      bar.style.width = (n ? Math.round((100 * k) / n) : 0) + "%"; pn.textContent = k + " of " + n + " modules done";
      tabs.forEach((b, j) => { const t = j - 1; const d = t < 0 ? p.gate[ch.key] != null : !!(p.done[ch.key] || {})[t]; b.classList.toggle("done", d); const old = b.querySelector(".tick"); if (old) old.remove(); if (d) b.append(h("span", { class: "tick", "aria-hidden": "true" }, "✓")); b.setAttribute("aria-selected", t === tab ? "true" : "false"); b.tabIndex = t === tab ? 0 : -1; });
      prevB.disabled = tab <= -1; nextB.textContent = tab >= n - 1 ? "Finish" : (tab < 0 ? "Module 1 ›" : "Next module ›");
      if (o.onProgress) o.onProgress(k, n);
    }
    prevB.addEventListener("click", () => show(tab - 1, true));
    nextB.addEventListener("click", () => { if (tab >= n - 1) { if (o.onFinish) o.onFinish(); else show(-1, true); } else show(tab + 1, true); });
    function show(t, focusBody) {
      V.stop(); tab = Math.max(-1, Math.min(n - 1, t)); const sel = tabs[tab + 1]; body.setAttribute("aria-labelledby", sel.id);
      body.replaceChildren(tab < 0 ? gate() : module(tab)); body.scrollTop = 0; refresh();
      if (focusBody) { try { body.focus({ preventScroll: true }); } catch (e) { } }
    }
    function levelOf() { const p = P(); return p.level[ch.key] || (p.gate[ch.key] != null ? A.suggest(p.gate[ch.key]) : "core"); }
    function setLevel(v) { const p = P(); p.level[ch.key] = v; A.saveProg(slug, p); }

    function gate() {
      const wrap = h("div");
      const items = (ch.gate || []).slice(0, 3);
      const p0 = P();
      const panel = h("section", { class: "panel" }, h("div", { class: "stepline" }, h("b", null, "2"), "Step 2 · Check-in"), h("h3", null, "Three quick questions"), h("p", { class: "lede" }, "From memory — no help yet. A guess is fine. Your score suggests where to start, and you can change it."));
      wrap.append(panel);
      const resultHost = h("div");
      const renderResult = (score, fresh) => {
        const sug = A.suggest(score); const cur = fresh ? sug : levelOf(); if (fresh) setLevel(sug);
        const words = { support: "Start with Support: the steps and a worked example are there for you.", core: "Start with Core: one hint is there if you need it.", stretch: "Start with Stretch: no help, and a question that asks you to go further." };
        resultHost.replaceChildren(
          h("div", { class: "result chrome" }, h("div", { class: "big" }, score + "/3"), h("div", null, h("p", { style: "font-weight:600" }, fresh ? "You scored " + score + " out of 3." : "Last time you scored " + score + " out of 3."), h("p", null, words[sug]))),
          h("div", { class: "panel" }, A.levelPicker(cur, sug, (v) => setLevel(v)), h("div", { class: "ibar", style: "margin-top:12px" }, h("button", { type: "button", class: "btn", onclick: () => show(0, true) }, "Start module 1 ", I("arrow")), !fresh ? h("button", { type: "button", class: "btn ghost", onclick: () => { const p = P(); delete p.gate[ch.key]; A.saveProg(slug, p); show(-1, true); } }, "Take the check-in again") : null)));
      };
      if (p0.gate[ch.key] != null) { panel.append(h("p", null, "You have done this check-in.")); renderResult(p0.gate[ch.key], false); wrap.append(resultHost); return wrap; }
      const msg = h("div", { class: "verdict", "aria-live": "polite" });
      const ctls = items.map((it, i) => { const c = A.control(it, { onChange: () => { msg.textContent = ""; } }); const mk = h("div", { class: "mark", hidden: true }); const fb = h("div", { class: "fbhost" }); const wy = it.why ? whyBox(it.why) : null; if (wy) wy.hidden = true; panel.append(h("div", { class: "item" }, h("div", { class: "ihead" }, h("span", { class: "inum" }, String(i + 1)), h("span", { class: "ikind" }, KIND[it.kind] || "Question"), A.speakBtn("", () => [{ text: it.q.replace(/___/g, "blank") }], { cls: "tiny icon", aria: "Hear question " + (i + 1) })), c.node, mk, fb, wy)); return { c, mk, fb, wy, it }; });
      const go = h("button", { type: "button", class: "btn" }, I("check"), "Check my answers");
      go.addEventListener("click", () => {
        const missing = ctls.filter((x) => !x.c.answered()).length;
        if (missing) { msg.className = "verdict no"; msg.textContent = "Have a go at " + (missing === 1 ? "the last question" : "every question") + " first — a guess is fine."; return; }
        let score = 0; const p = P();
        ctls.forEach((x, i) => {
          const ok = x.c.correct(); if (ok) { score++; A.noteCorrect(slug, ch, i, p); } /* spaced return starts from the first right answer */
          x.c.marks(); x.c.lock(); x.mk.hidden = false; x.mk.className = "mark " + (ok ? "ok" : "no"); x.mk.replaceChildren(I(ok ? "check" : "cross"), ok ? "Right" : "Not this time — the answer is " + A.answerText(x.it));
          const f = ok ? null : A.feedbackFor(x.it, x.c.value()); if (f) x.fb.replaceChildren(whatBox(f)); /* "What happened" first, then the general why */
          if (x.wy) x.wy.hidden = false;
        });
        go.remove(); msg.textContent = "";
        p.gate[ch.key] = score; A.saveProg(slug, p); renderResult(score, true); refresh();
        A.send(slug, ch.key, "gate", score, levelOf());
        const r = resultHost.querySelector(".result"); if (r) { try { r.scrollIntoView({ block: "nearest", behavior: A.noMotion() ? "auto" : "smooth" }); } catch (e) { } }
      });
      panel.append(h("div", { class: "ibar", style: "margin-top:14px" }, go), msg);
      wrap.append(resultHost); return wrap;
    }

    function module(i) {
      const md = mods[i]; const lv = md.levels || {}; const wrap = h("div");
      const p = P(); const g = p.gate[ch.key];
      const scaf = h("div", { "aria-live": "polite" });
      const drawScaf = (v) => {
        if (v === "support") {
          const s = lv.support || {}; const ex = s.example || {}; const exSteps = ex.steps || [];
          const ol = h("ol"); let shown = 0; const ans = h("p", { class: "ansline", hidden: true }, "Answer: ", h("b", null, String(ex.answer == null ? "" : ex.answer)));
          const more = h("button", { type: "button", class: "btn ghost small" }, exSteps.length ? "Show step 1" : "Show the answer");
          const step = () => { if (shown < exSteps.length) { ol.append(h("li", null, exSteps[shown])); shown++; more.textContent = shown < exSteps.length ? "Show step " + (shown + 1) : "Show the answer"; } else { ans.hidden = false; more.remove(); } };
          more.addEventListener("click", step);
          const exBox = h("div", { class: "ex" }, h("div", { class: "exk" }, "Worked example — same skill, different question"), h("p", { style: "margin:4px 0;font-weight:600" }, ex.q || ""), ol, ans, h("div", { class: "ibar", style: "margin-top:6px" }, more, A.speakBtn("Talk me through it", () => { while (shown < exSteps.length) step(); ans.hidden = false; more.remove(); return [{ text: ex.q, el: exBox }].concat(exSteps.map((t, k) => ({ text: t, el: ol.children[k] })), [{ text: "Answer: " + ex.answer, el: ans }]); }, { cls: "tiny" })));
          scaf.replaceChildren(h("div", { class: "scaf" }, h("h4", null, I("layers"), "Support: steps to follow"), h("ol", null, (s.steps || []).map((t) => h("li", null, t))), exBox));
        } else if (v === "core") {
          const hint = h("div", { class: "hint", hidden: true }, h("b", null, "Hint: "), (lv.core && lv.core.hint) || "");
          const hb = h("button", { type: "button", class: "btn ghost small", "aria-expanded": "false" }, I("bulb"), "Show a hint");
          hb.addEventListener("click", () => { hint.hidden = !hint.hidden; hb.setAttribute("aria-expanded", hint.hidden ? "false" : "true"); hb.lastChild.textContent = hint.hidden ? "Show a hint" : "Hide the hint"; });
          scaf.replaceChildren(h("div", { class: "scaf" }, h("h4", null, I("target"), "Core: try it first"), h("p", { style: "margin:0 0 8px" }, "Have a go at the task below. If you get stuck, there is one hint."), hb, hint));
        } else {
          scaf.replaceChildren(h("div", { class: "extend" }, h("h4", null, "Stretch: go further"), h("p", { style: "margin:0 0 6px" }, (lv.stretch && lv.stretch.extend) || ""), h("p", { class: "note", style: "margin:0" }, "Do the task below with no help first. Then answer this in your book.")));
        }
      };
      const cur = levelOf(); drawScaf(cur);
      wrap.append(h("section", { class: "panel" }, h("div", { class: "stepline" }, h("b", null, "3"), "Step 3 · Choose your level"), h("h3", null, "Module " + (i + 1) + " · " + md.title),
        g == null ? h("p", { class: "lede" }, "Tip: do the check-in first and it will suggest a level for you.") : null,
        A.levelPicker(cur, g != null ? A.suggest(g) : null, (v) => { setLevel(v); drawScaf(v); }), scaf));
      /* --- the task, with optional contexts ("choose the story": same answer by construction) and the after-boxes --- */
      const ctxs = Array.isArray(md.contexts) ? md.contexts.filter((x) => x && x.label && x.q).slice(0, 3) : [];
      const taskHost = h("div"); const after = h("div", { class: "after" });
      const onDone = () => {
        const q = P(); q.done[ch.key] = q.done[ch.key] || {}; const first = !q.done[ch.key][i]; q.done[ch.key][i] = true; q.level[ch.key] = q.level[ch.key] || cur; A.saveProg(slug, q); refresh();
        const lvl = levelOf(); if (first) A.send(slug, ch.key, "module", i + 1, lvl, i);
        after.replaceChildren(A.explainBox(slug, ch, i, md, lvl), A.voiceBox(slug, ch, i, lvl));
      };
      const drawTask = (k) => { /* k = context index, or −1 for the plain task */
        const c = k >= 0 ? ctxs[k] : null;
        const m2 = c ? Object.assign({}, md, { task: Object.assign({}, md.task, { q: c.q }), why: c.why || md.why }) : md;
        taskHost.replaceChildren(A.task(m2, { onDone }));
      };
      let ctxBar = null;
      if (ctxs.length >= 2 && md.task && md.task.kind !== "written") {
        const saved = (P().ctx[ch.key] || {})[i]; let sel = Number.isInteger(saved) && saved >= 0 && saved < ctxs.length ? saved : -1;
        const cid = uid("cx");
        const chips = ctxs.map((c, k) => h("button", { type: "button", class: "chip ctx", "aria-pressed": sel === k ? "true" : "false" }, c.label));
        const pick = (k) => { sel = sel === k ? -1 : k; chips.forEach((b, j) => b.setAttribute("aria-pressed", sel === j ? "true" : "false")); const q = P(); q.ctx[ch.key] = q.ctx[ch.key] || {}; q.ctx[ch.key][i] = sel; A.saveProg(slug, q); drawTask(sel); };
        chips.forEach((b, k) => b.addEventListener("click", () => pick(k)));
        ctxBar = h("div", { class: "ctxbar", role: "group", "aria-labelledby": cid }, h("span", { class: "ck", id: cid }, "Choose the story"), h("div", { class: "chips" }, chips), h("span", { class: "note" }, "Same maths, different story — tap a story to swap the question, tap it again for the plain one."));
        drawTask(sel);
      } else drawTask(-1);
      wrap.append(h("section", { class: "dest" }, h("div", { class: "stepline" }, h("b", null, "4"), "Step 4 · The task"), h("p", { class: "same" }, "Everyone answers this same question, whatever level you chose."), ctxBar, taskHost, after));
      return wrap;
    }
    show(tab, false);
    return { node, show, refresh };
  };

  /* ================= constellation (one star per chapter, over the plate) ================= */
  const NS = "http://www.w3.org/2000/svg";
  const sv = (tag, attrs, ...kids) => { const e = document.createElementNS(NS, tag); for (const k in attrs || {}) if (attrs[k] != null) e.setAttribute(k, attrs[k]); kids.forEach((k) => { if (k != null) e.append(k.nodeType ? k : document.createTextNode(String(k))); }); return e; };
  A.starPositions = function (u) { /* meta.constellation [[x,y],…] in 0–1, else an arc */
    const N = u.chapters.length; const c = u.meta && Array.isArray(u.meta.constellation) ? u.meta.constellation : null;
    return u.chapters.map((_, i) => {
      const p = c && Array.isArray(c[i]) && c[i].length === 2 && c[i].every((v) => typeof v === "number" && v >= 0 && v <= 1) ? c[i] : null;
      if (p) return p; const t = N > 1 ? i / (N - 1) : 0.5; return [0.12 + 0.76 * t, 0.34 - 0.2 * Math.sin(Math.PI * t)];
    });
  };
  A.constellation = function (u, p) {
    p = p || A.prog(u.meta.slug); const pos = A.starPositions(u); const W = 1600, H = 900;
    const states = u.chapters.map((ch) => (A.allDone(p, ch) ? "bright" : p.gate[ch.key] != null ? "lit" : "dim"));
    const started = states.filter((s) => s !== "dim").length, complete = states.filter((s) => s === "bright").length;
    const label = "Your constellation: " + started + " of " + u.chapters.length + " chapters started, " + complete + " complete.";
    const svg = sv("svg", { class: "constel", viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": label, focusable: "false" }, sv("title", null, label));
    u.chapters.forEach((ch, i) => { /* a thin line to the next star once every module of this chapter is done */
      if (states[i] === "bright" && pos[i + 1]) svg.append(sv("line", { class: "cline", x1: pos[i][0] * W, y1: pos[i][1] * H, x2: pos[i + 1][0] * W, y2: pos[i + 1][1] * H }));
    });
    u.chapters.forEach((ch, i) => {
      const x = pos[i][0] * W, y = pos[i][1] * H; const g = sv("g", { class: "star " + states[i], "data-ch": ch.key });
      g.append(sv("title", null, "Chapter " + ch.n + ": " + ch.title + " — " + (states[i] === "bright" ? "complete" : states[i] === "lit" ? "check-in done" : "not started")));
      if (states[i] === "bright") g.append(sv("circle", { class: "halo", cx: x, cy: y, r: 40 }));
      g.append(sv("circle", { class: "disc", cx: x, cy: y, r: 19 })); /* a small clean disc so the star reads over the engraving */
      g.append(sv("path", { class: "pt", d: "M" + x + " " + (y - 26) + " L" + (x + 7) + " " + (y - 7) + " L" + (x + 26) + " " + y + " L" + (x + 7) + " " + (y + 7) + " L" + x + " " + (y + 26) + " L" + (x - 7) + " " + (y + 7) + " L" + (x - 26) + " " + y + " L" + (x - 7) + " " + (y - 7) + " Z" }));
      g.append(sv("circle", { class: "core", cx: x, cy: y, r: states[i] === "dim" ? 7 : 9 }));
      svg.append(g);
    });
    return svg;
  };

  /* ================= "Due today" strip (spaced return) ================= */
  A.dueStrip = function (u) {
    const slug = u.meta.slug; const p = A.prog(slug); const due = A.due(u, p); const sp = A.spacing(u);
    const any = u.chapters.some((ch) => Object.keys(p.ret[ch.key] || {}).length);
    if (!any) return null;
    const sec = h("section", { class: "sec due", "aria-labelledby": "due-h" }); const w = h("div", { class: "wrap" }); sec.append(w);
    if (!due.length) {
      const nx = A.nextDue(u, p);
      w.append(h("div", { class: "duenone" }, I("clock"), h("span", null, h("b", { id: "due-h" }, "Nothing due today. "), nx != null ? "Your next return question comes back in " + A.plural(A.daysUntil(nx), "day") + "." : "You have finished every return question in this unit.")));
      return sec;
    }
    w.append(h("h2", { id: "due-h" }, I("clock"), " Due today"), h("p", { class: "intro" }, A.plural(due.length, "question") + " you got right before. Answering again a few days later is what makes it stick. From memory — no help."));
    const list = h("div", { class: "duelist" });
    due.forEach((d) => {
      const it = d.it; const card = h("article", { class: "duecard panel" });
      const ctl = A.control(it, { onEnter: () => check() });
      const verdict = h("div", { class: "verdict", "aria-live": "polite" }); const fb = h("div", { class: "fbhost" }); const wy = it.why ? whyBox(it.why) : null; if (wy) wy.hidden = true;
      const go = h("button", { type: "button", class: "btn small" }, I("check"), "Check");
      const check = () => {
        if (!ctl.answered()) { verdict.className = "verdict no"; verdict.textContent = "Answer first, then check."; return; }
        const ok = ctl.correct(); ctl.marks(); ctl.lock(); go.disabled = true;
        const q = A.prog(slug); q.ret[d.ch.key] = q.ret[d.ch.key] || {}; const rec = q.ret[d.ch.key][d.i] || { f: A.now(), k: 0 };
        if (ok) { rec.k = (rec.k | 0) + 1; verdict.className = "verdict ok"; verdict.replaceChildren(I("check"), rec.k < sp.length ? "Right — it comes back in " + A.plural(sp[rec.k] - sp[rec.k - 1], "day") + "." : "Right — that one is yours now."); }
        else { rec.f = A.now(); rec.k = 0; verdict.className = "verdict no"; verdict.replaceChildren(I("cross"), "Not this time — the answer is " + A.answerText(it) + ". It comes back in " + A.plural(sp[0], "day") + "."); const f = A.feedbackFor(it, ctl.value()); if (f) fb.replaceChildren(whatBox(f)); if (wy) wy.hidden = false; }
        q.ret[d.ch.key][d.i] = rec; A.saveProg(slug, q);
        A.send(slug, d.ch.key, "return", ok ? 1 : 0, q.level[d.ch.key] || null, d.i);
      };
      go.addEventListener("click", check);
      card.append(h("div", { class: "ihead" }, h("span", { class: "ikind" }, "Chapter " + d.ch.n + " · " + d.ch.title), h("span", { class: "marks" }, "return " + (d.k + 1) + " of " + sp.length), A.speakBtn("", () => [{ text: it.q.replace(/___/g, "blank") }], { cls: "tiny icon", aria: "Hear the question" })),
        ctl.node, h("div", { class: "ibar" }, go), verdict, fb, ...(wy ? [wy] : []));
      list.append(card);
    });
    w.append(list);
    return sec;
  };

  /* ================= class code (dashboard) ================= */
  A.classBox = function (slug) {
    const ep = A.endpoint(); const lid = uid("cc");
    const inp = h("input", { class: "inp code", type: "text", id: lid, inputmode: "text", autocomplete: "off", autocapitalize: "characters", spellcheck: "false", maxlength: "6", placeholder: "e.g. 7AB1", value: A.classCode.get() });
    const status = h("p", { class: "note ccstat", role: "status" });
    const saveB = h("button", { type: "button", class: "btn small" }, I("check"), "Save"); const clearB = h("button", { type: "button", class: "btn ghost small" }, "Clear");
    const show = () => {
      const c = A.classCode.get(); clearB.hidden = !c;
      status.textContent = !c ? "No class code: everything stays on this device." : ep ? "Class code " + c + " is set. Anonymous counts (check-in scores, modules finished, how it felt) go to your teacher’s class dashboard. No names, no typed text." : "Class code " + c + " is saved on this device. This site has no dashboard switched on yet, so nothing leaves the device.";
    };
    saveB.addEventListener("click", () => { const v = inp.value.trim(); if (v && !A.classCode.valid(v)) { status.textContent = "A class code is 4 to 6 letters or digits, with no spaces."; inp.focus(); return; } A.classCode.set(v); inp.value = A.classCode.get(); show(); if (!v) status.textContent = "Cleared: everything stays on this device."; });
    clearB.addEventListener("click", () => { A.classCode.set(""); inp.value = ""; show(); status.textContent = "Cleared: everything stays on this device."; inp.focus(); });
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); saveB.click(); } });
    show();
    return h("div", { class: "classbox" }, h("div", { class: "cck" }, h("label", { for: lid }, I("chart"), "Class code"), h("span", { class: "note" }, "Leave blank to keep everything on this device.")),
      h("div", { class: "ibar" }, inp, saveB, clearB), status);
  };

  /* ================= page: unit at a glance ================= */
  A.pages = {};
  A.pages.unit = function (u) {
    const m = u.meta, slug = m.slug, main = document.getElementById("main"); const p = A.prog(slug);
    const chOf = (n) => u.chapters.filter((c) => (c.covers || []).indexOf(n) >= 0);
    main.replaceChildren();
    main.append(h("section", { class: "hero chrome", "aria-labelledby": "ut" }, h("div", { class: "in" },
      h("div", null, h("p", { class: "eyebrow" }, [m.board + " " + m.spec, m.subject, "Year " + m.year, m.tier].filter(Boolean).join(" · ")),
        h("h1", { id: "ut" }, m.title), h("p", { class: "sub" }, m.sub),
        h("div", { class: "bigq" }, h("div", null, h("span", { class: "k" }, "The big question"), h("span", { class: "q" }, m.bigQuestion))),
        h("div", { class: "badges" }, h("span", { class: "badge" }, m.specRef), h("span", { class: "badge" }, (u.lessons || []).length + " lessons"), h("span", { class: "badge" }, u.chapters.length + " chapters")),
        h("div", { class: "acts" }, h("a", { class: "btn", href: A.link("ebook.html") }, I("book"), "Open the ebook"), h("a", { class: "btn ghost", href: A.link("modules.html") }, I("layers"), "Practise the modules"))),
      h("figure", { class: "plate" }, h("div", { class: "platebox" }, h("img", { src: A.plateUrl(m), alt: A.plateAlt(m.subjectKey), width: "1600", height: "900", decoding: "async" }), A.constellation(u, p)),
        h("figcaption", null, A.plateName(m.subjectKey) + " · Year " + m.year + " plate · one star per chapter: lit after the check-in, bright when every module is done")))));
    /* due today (spaced return) — only once something has been answered right */
    const due = A.dueStrip(u); if (due) main.append(due);
    /* how it adapts */
    const s4 = [["Before the lesson", "Hear the chapter read aloud and meet the key words before your teacher teaches it. Each sentence lights up as it is read."],
      ["Quick check-in", "Three questions from memory, with no help. Your score suggests where to start. It is not a test."],
      ["Choose your level", "Support gives you steps and a worked example. Core keeps one hint ready. Stretch takes the help away and asks you to explain."],
      ["The same task", "Everyone finishes on the same question. The help changes; the goal never does."]];
    const privacy = A.sharing() ? "For parents: progress is saved on this device. Because a class code is set, anonymous counts also reach the teacher’s class dashboard — never a name, never anything a pupil typed." : "For parents: progress is saved only on this device, and nothing is sent anywhere.";
    main.append(h("section", { class: "sec", "aria-labelledby": "how" }, h("div", { class: "wrap" }, h("h2", { id: "how" }, "How this unit adapts"),
      h("p", { class: "intro" }, "Every chapter works in four steps, so that every pupil reaches the same place. " + privacy),
      h("ol", { class: "steps4" }, s4.map((s, i) => h("li", null, h("span", { class: "n", "aria-hidden": "true" }, String(i + 1)), h("h3", null, s[0]), h("p", null, s[1]), i === 2 ? h("div", { class: "lv", "aria-hidden": "true" }, h("span", null, "Support"), h("span", null, "Core"), h("span", null, "Stretch")) : null))),
      h("p", { class: "intro", style: "margin-top:18px" }, "Questions you get right in a check-in come back here after " + A.spacing(u).join(", ") + " days, so that remembering is practised, not just hoped for."),
      A.classBox(slug))));
    /* chapters */
    main.append(h("section", { class: "sec", "aria-labelledby": "chs" }, h("div", { class: "wrap" }, h("h2", { id: "chs" }, "Chapters"),
      h("p", { class: "intro" }, "Each chapter is one part of the ebook, with its own modules to practise."),
      h("div", { class: "chcards" }, u.chapters.map((c) => {
        const k = A.doneCount(p, c), n = (c.modules || []).length; const cov = (c.covers || []).map((x) => { const l = (u.lessons || []).find((y) => y.n === x); return l ? x : null; }).filter((x) => x != null);
        return h("article", { class: "chcard", "aria-labelledby": "cc-" + c.key }, h("div", { class: "band" }, h("img", { src: A.plateUrl(m), alt: "", loading: "lazy", decoding: "async", style: "object-position:" + (20 + ((c.n * 17) % 60)) + "% 50%" })),
          h("div", { class: "body" }, h("span", { class: "kick" }, "Chapter " + c.n), h("h3", { id: "cc-" + c.key }, c.title), h("p", null, c.lead),
            cov.length ? h("span", { class: "covers" }, "Covers lesson" + (cov.length > 1 ? "s " : " ") + cov.join(", ")) : null,
            h("div", { class: "prog" }, h("span", { class: "trk", role: "presentation" }, h("i", { style: "width:" + (n ? Math.round((100 * k) / n) : 0) + "%" })), h("span", null, k + " of " + n + " modules done" + (p.gate[c.key] != null ? " · check-in " + p.gate[c.key] + "/3" : ""))),
            A.voiceSummary(p, c) ? h("span", { class: "covers" }, A.voiceSummary(p, c)) : null,
            h("div", { class: "acts" }, h("a", { class: "btn small", href: A.link("ebook.html") + "#ch-" + c.key }, I("book"), "Read"), h("a", { class: "btn ghost small", href: A.link("modules.html", { ch: c.key }) }, I("layers"), "Modules"))));
      })))));
    /* lesson sequence */
    if ((u.lessons || []).length) main.append(h("section", { class: "sec", "aria-labelledby": "les" }, h("div", { class: "wrap" }, h("h2", { id: "les" }, "The lesson sequence"),
      h("p", { class: "intro" }, "The department’s own lessons, in order, and the chapter of the ebook that goes with each one."),
      h("table", { class: "ltable" }, h("caption", null, (u.lessons || []).length + " lessons · " + m.board + " " + m.spec),
        h("thead", null, h("tr", null, ["Lesson", "Title", "The question", "Key words", "Chapter"].map((t) => h("th", { scope: "col" }, t)))),
        h("tbody", null, u.lessons.map((l) => { const cs = chOf(l.n); return h("tr", null, h("td", { class: "n", "data-l": "Lesson" }, String(l.n)), h("td", { class: "t", "data-l": "Title" }, l.title), h("td", { "data-l": "The question" }, l.question || ""), h("td", { "data-l": "Key words" }, h("div", { class: "kw" }, (l.keywords || []).map((k) => h("span", null, k)))), h("td", { "data-l": "Chapter" }, cs.length ? cs.map((c, i) => [i ? ", " : null, h("a", { href: A.link("ebook.html") + "#ch-" + c.key }, "Ch " + c.n + " · " + c.title)]) : "—")); }))))));
    /* glossary */
    if ((u.glossary || []).length) main.append(h("section", { class: "sec", "aria-labelledby": "gl" }, h("div", { class: "wrap" }, h("h2", { id: "gl" }, "Glossary"),
      h("p", { class: "intro" }, "The words this unit uses, in plain English."),
      h("dl", { class: "gloss" }, u.glossary.map((g) => h("div", null, h("dt", null, g.term), h("dd", null, g.means)))))));
  };

  /* ================= page: modules (standalone) ================= */
  A.pages.modules = function (u) {
    const m = u.meta, main = document.getElementById("main"); const key = A.q("ch");
    const ch = u.chapters.find((c) => c.key === key || String(c.n) === key);
    main.replaceChildren();
    const head = h("section", { class: "hero chrome" }, h("div", { class: "in", style: "grid-template-columns:1fr;padding-top:28px;padding-bottom:28px" }, h("div", null,
      h("p", { class: "eyebrow" }, m.subject + " · Year " + m.year + " · " + m.title), h("h1", null, ch ? "Chapter " + ch.n + " · " + ch.title : "Modules"),
      h("p", { class: "sub" }, ch ? ch.lead : "Choose a chapter. Each one starts with a three-question check-in, then you pick your level and everyone finishes on the same task."),
      ch ? h("div", { class: "acts" }, h("a", { class: "btn ghost", href: A.link("ebook.html") + "#ch-" + ch.key }, I("book"), "Read this chapter first"), h("a", { class: "btn ghost", href: A.link("modules.html") }, I("grid"), "All chapters")) : null)));
    main.append(head);
    const due = A.dueStrip(u); if (due) { due.classList.add("ondark"); main.append(due); } /* spaced return: due questions sit above the modules */
    const sec = h("section", { class: "sec standalone" }, h("div", { class: "wrap" })); main.append(sec); const w = sec.firstChild;
    if (!ch) {
      const p = A.prog(m.slug);
      w.append(h("nav", { class: "chooser", "aria-label": "Chapters" }, u.chapters.map((c) => { const vs = A.voiceSummary(p, c); return h("a", { href: A.link("modules.html", { ch: c.key }) }, h("span", { class: "n" }, String(c.n)), h("span", { class: "t" }, c.title, h("small", null, A.doneCount(p, c) + " of " + (c.modules || []).length + " modules done" + (p.gate[c.key] != null ? " · check-in " + p.gate[c.key] + "/3" : "") + (vs ? " · " + vs : ""))), I("arrow")); })));
      return;
    }
    document.title = "Chapter " + ch.n + " modules · " + m.title + " · Ad Astra";
    const pl = A.player(u, ch, { onFinish: () => { location.href = A.link("modules.html"); } }); w.append(pl.node);
    const i = u.chapters.indexOf(ch); const nx = u.chapters[i + 1];
    if (nx) w.append(h("p", { style: "margin-top:16px" }, h("a", { href: A.link("modules.html", { ch: nx.key }) }, "Next: chapter " + nx.n + " · " + nx.title + " →")));
  };

  /* ================= page: the ebook ================= */
  A.pages.ebook = function (u) {
    const m = u.meta, slug = m.slug, main = document.getElementById("main"); const N = u.chapters.length;
    const unitBase = new URL("../" + slug + "/", location.href).href;
    main.replaceChildren();
    const pages = []; const chStart = {}; const prPage = {}; const pipsBy = {}; const chItems = {};
    const page = (base, kids, run) => {
      const p = h("article", { class: "pg " + (base || "") }); p.dataset.base = "pg " + (base || "");
      if (run) p.append(h("div", { class: "runhead" }, h("span", { class: "a" }, run[0]), h("span", { class: "b" }, run[1]), run[2] || null));
      p.append(...[].concat(kids).filter(Boolean)); p._n = pages.length; pages.push(p); return p;
    };
    const runA = m.title;
    /* home-language line (pretext.l1): one select for the whole book; the English stays the text that is read and highlighted */
    const L1N = { ar: "العربية", ur: "اردو", uk: "Українська", pt: "Português", pl: "Polski", so: "Soomaali", fa: "فارسی", ps: "پښتو", ro: "Română", es: "Español", fr: "Français", it: "Italiano", de: "Deutsch", tr: "Türkçe", lt: "Lietuvių", bg: "Български", ru: "Русский", bn: "বাংলা", pa: "ਪੰਜਾਬੀ", gu: "ગુજરાતી", hi: "हिन्दी", ta: "தமிழ்", zh: "中文", ti: "ትግርኛ", ku: "Kurdî", sq: "Shqip" };
    const l1Codes = []; u.chapters.forEach((c) => { const l = c.pretext && c.pretext.l1; if (l && typeof l === "object") Object.keys(l).forEach((k) => { if (/^[a-z]{2,3}$/.test(k) && l1Codes.indexOf(k) < 0) l1Codes.push(k); }); });
    const l1Chs = []; /* per chapter: {l1, lines[], words[], note, passage} */
    let l1Cur = "";
    const applyL1 = (code) => {
      l1Cur = code || "";
      l1Chs.forEach((r) => {
        const t = l1Cur && r.l1 && r.l1[l1Cur]; const dir = t && t.dir === "rtl" ? "rtl" : "ltr";
        r.passage.classList.toggle("l1on", !!t);
        r.lines.forEach((el, i) => { if (t) { el.textContent = (t.passage || [])[i] || ""; el.setAttribute("lang", l1Cur); el.setAttribute("dir", dir); el.hidden = !el.textContent; } else { el.hidden = true; el.textContent = ""; } });
        r.words.forEach((el, j) => { if (t) { el.textContent = (t.words || [])[j] || ""; el.setAttribute("lang", l1Cur); el.setAttribute("dir", dir); el.hidden = !el.textContent; } else { el.hidden = true; el.textContent = ""; } });
        r.note.hidden = !(t && t.checked === false);
      });
      document.querySelectorAll("select.l1sel").forEach((s) => { s.value = l1Cur; });
    };
    A.l1 = { apply: (c) => { applyL1(c); A.store.set("l1", l1Cur); }, current: () => l1Cur, codes: () => l1Codes.slice() };
    /* --- cover --- */
    page("pcover", [h("div", { class: "cover" },
      h("figure", { class: "plate" }, h("img", { src: A.plateUrl(m), alt: A.plateAlt(m.subjectKey), width: "1600", height: "900" })),
      h("p", { class: "eyebrow" }, m.subject + " · Year " + m.year), h("h2", null, m.title), h("hr", { class: "rule" }), h("p", { class: "csub" }, m.sub),
      h("p", { class: "cmeta" }, "A read-along ebook · " + N + " chapters · modules after each chapter", h("br"), [m.board, m.spec, m.specRef].filter(Boolean).join(" · ")))]);
    /* --- contents (page numbers filled in after the build) --- */
    const tocList = h("ol", { class: "contents" });
    page("", [h("h2", null, "Contents"), tocList,
      h("div", { class: "howto" }, "Turn the pages with the arrows under the book, the ← → keys, or by tapping the right-hand page" + " (on a phone: swipe). Each chapter starts with a page you can listen to. Each chapter ends with modules to practise.")], ["Contents", runA]);

    u.chapters.forEach((c) => {
      const items = []; chItems[c.key] = items; const run = ["Chapter " + c.n, c.title];
      /* opener */
      chStart[c.key] = pages.length;
      const lead = h("p", { class: "lead para" }, c.lead); const tt = h("h2", { id: "chh-" + c.key }, c.title);
      items.push({ text: "Chapter " + c.n + ". " + c.title + ". " + c.lead, el: lead });
      const readCh = A.speakBtn("Read this chapter to me", () => items, { onStep: (i, it) => { const pg = it.el && it.el.closest(".pg"); if (pg && pg._n != null && !isMounted(pg._n)) goTo(pg._n, { follow: true }); } });
      const covers = (c.covers || []).map((x) => (u.lessons || []).find((l) => l.n === x)).filter(Boolean);
      page("", [h("div", { class: "chband" }, h("img", { src: A.plateUrl(m), alt: "", style: "object-position:" + (15 + ((c.n * 23) % 70)) + "% 50%" })),
        h("span", { class: "kicker" }, "Chapter " + c.n + " of " + N), tt, lead,
        h("div", { class: "chtools" }, readCh, h("span", { class: "note" }, "The pages turn as it reads.")),
        h("h3", null, "In this chapter"),
        h("ul", { class: "inlist" }, h("li", null, "Before the lesson: key words and a read-along"), (c.sections || []).map((s) => h("li", null, s.heading)), h("li", { class: "pr" }, "Practise it: " + (c.modules || []).length + " modules")),
        covers.length ? h("p", { class: "note", style: "margin-top:12px" }, "Goes with lesson" + (covers.length > 1 ? "s " : " ") + covers.map((l) => l.n + " (" + l.title + ")").join(", ")) : null], null); /* openers carry no running head: the plate band bleeds to the top edge */
      /* before the lesson: key words */
      const pt = c.pretext || {}; const words = pt.words || [];
      const l1rec = { l1: pt.l1 && typeof pt.l1 === "object" ? pt.l1 : null, lines: [], words: [], note: h("p", { class: "mtnote", hidden: true }, I("globe"), h("span", null, "Machine translation — not yet checked by a speaker.")), passage: null };
      const cards = words.map((w) => { const card = h("div", { class: "kwcard" }); const l1m = h("div", { class: "l1m", hidden: true }); l1rec.words.push(l1m); card.append(h("div", { class: "w" }, h("span", null, w.word), A.speakBtn("", () => [{ text: w.word + ". " + w.means + ". " + w.sentence, el: card }], { cls: "tiny icon", aria: "Hear: " + w.word })), h("div", { class: "m" }, w.means), l1m, h("div", { class: "s" }, "“" + w.sentence + "”")); items.push({ text: w.word + ": " + w.means + ".", el: card }); return card; });
      page("", [h("span", { class: "steptag" }, "Step 1 · Before the lesson"), h("h3", null, "Key words"), h("p", { class: "note" }, "Meet these words before the lesson. Press the speaker to hear each one in a sentence."), h("div", { class: "kwgrid" }, cards)], run);
      /* before the lesson: read-along (each English sentence may carry a home-language line beneath it) */
      const sents = (pt.passage || []).map((s) => h("span", { class: "sent", role: "button", tabindex: "0", title: "Hear this sentence" }, s));
      const passage = h("p", { class: "passage" }); sents.forEach((s, i) => { const l1 = h("span", { class: "l1", hidden: true }); l1rec.lines.push(l1); if (i) passage.append(" "); passage.append(h("span", { class: "sblk" }, s, l1)); });
      l1rec.passage = passage; if (l1rec.l1) l1Chs.push(l1rec);
      const sentItems = () => sents.map((el, i) => ({ text: pt.passage[i], el }));
      const hearOne = (i) => { if (pt.audio && Array.isArray(pt.cues) && pt.cues[i] != null) V.playAudio(new URL(pt.audio, unitBase).href, pt.cues, sents, { from: i, to: i + 1, fallback: () => V.play([sentItems()[i]]) }); else V.play([sentItems()[i]]); };
      sents.forEach((s, i) => { s.addEventListener("click", (e) => { e.stopPropagation(); hearOne(i); }); s.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hearOne(i); } }); });
      const readAll = A.speakBtn("Read it to me", sentItems, { custom: pt.audio ? (its, off) => V.playAudio(new URL(pt.audio, unitBase).href, pt.cues || null, sents, { onEnd: off, fallback: () => V.play(its, { onEnd: off }) }) : null });
      const pauseB = h("button", { type: "button", class: "vbtn icon", "aria-label": "Pause or resume", title: "Pause or resume", onclick: () => V.toggle() }, I("pause"));
      page("", [h("span", { class: "steptag" }, "Step 1 · Before the lesson"), h("h3", null, "Read along"),
        h("div", { class: "readctl" }, readAll, pauseB, h("label", { class: "lbl" }, "Speed ", A.speedSelect())),
        l1rec.l1 ? l1rec.note : null,
        passage, h("p", { class: "note" }, "Tap any sentence to hear it again. The sentence being read lights up." + (l1rec.l1 ? " Choose a home language above the book to see each sentence in that language too." : ""))], run);
      sentItems().forEach((x) => items.push(x));
      /* teaching sections */
      (c.sections || []).forEach((s) => {
        const kids = []; const hd = h("h3", null, s.heading); kids.push(hd); items.push({ text: s.heading, el: hd });
        (s.paragraphs || []).forEach((para) => { const pe = h("p", { class: "para" }); A.sentences(para).forEach((t, k) => { if (k) pe.append(" "); const sp = h("span", { class: "sent" }, t); pe.append(sp); items.push({ text: t, el: sp }); }); kids.push(pe); });
        if (s.quote && s.quote.text) { const qb = h("blockquote", { class: "quote" }, h("p", null, "“" + s.quote.text + "”"), s.quote.source ? h("footer", null, "— " + s.quote.source) : null); kids.push(qb); items.push({ text: s.quote.text + (s.quote.source ? " — " + s.quote.source : ""), el: qb }); }
        if (s.tip) { const tb = h("div", { class: "tip" }, I("bulb"), h("span", null, h("b", null, "Tip: "), s.tip)); kids.push(tb); items.push({ text: "Tip: " + s.tip, el: tb }); }
        const pg = page("", kids, run.concat([A.speakBtn("", () => items.filter((x) => pg.contains(x.el)), { cls: "tiny icon", aria: "Read this page to me" })]));
        if (s.worked) {
          const w = s.worked, steps = w.steps || []; const ol = h("ol"); const lis = steps.map((t) => h("li", { hidden: true }, h("span", null, t)));
          ol.append(...lis); const wq = h("div", { class: "wq" }, h("span", { class: "tag" }, "Worked example"), h("span", null, w.q));
          const ans = h("div", { class: "ans", hidden: true }, I("check"), "Answer: " + w.answer); let shown = 0;
          const nb = h("button", { type: "button", class: "btn small" }, "Show step 1"); const allB = h("button", { type: "button", class: "btn ghost small" }, "Show all");
          const upd = () => { nb.textContent = shown < lis.length ? "Show step " + (shown + 1) : "Show the answer"; if (shown > lis.length || !ans.hidden) { nb.hidden = true; allB.hidden = true; } };
          const reveal = (k) => { while (shown <= k && shown < lis.length) { lis[shown].hidden = false; shown++; } upd(); };
          const revealAll = () => { reveal(lis.length - 1); ans.hidden = false; shown = lis.length + 1; upd(); };
          nb.addEventListener("click", () => { if (shown < lis.length) { reveal(shown); } else { ans.hidden = false; shown++; upd(); } });
          allB.addEventListener("click", revealAll);
          const wItems = [{ text: "Worked example. " + w.q, el: wq }].concat(lis.map((li, k) => ({ text: steps[k], el: li, before: () => reveal(k) })), [{ text: "Answer: " + w.answer, el: ans, before: () => { ans.hidden = false; shown = lis.length + 1; upd(); } }]);
          wItems.forEach((x) => items.push(x));
          const wb = h("div", { class: "worked" }, wq, ol, ans, h("div", { class: "wbar" }, nb, allB, A.speakBtn("Talk me through it", () => wItems, { cls: "tiny" })));
          page("", [h("h3", null, s.heading + " — worked example"), h("p", { class: "note" }, "Try each step yourself before you reveal it."), wb], run);
        }
        /* interactive object (astra/2 Section.widget): rendered by assets/astra-widgets.js when present, otherwise the prompt stands alone */
        if (s.widget && typeof s.widget === "object" && s.widget.type) {
          const wd = s.widget; const wp = h("p", { class: "para wprompt" }, wd.prompt || ""); const host = h("div", { class: "widget", "data-type": String(wd.type) });
          host._widget = wd; host._chapter = c; host._prompt = wp; if (wd.prompt) { host._item = { text: wd.prompt, el: wp }; items.push(host._item); }
          const wpg = page("", [h("h3", null, s.heading + " — try it"), wp, host], run.concat([A.speakBtn("", () => items.filter((x) => wpg.contains(x.el)), { cls: "tiny icon", aria: "Read this page to me" })]));
        }
      });
      /* practise it */
      const n = (c.modules || []).length; const pr = A.prog(slug);
      pipsBy[c.key] = (c.modules || []).map((md, i) => h("span", { class: "pip" + ((pr.done[c.key] || {})[i] ? " done" : ""), title: md.title }, String(i + 1)));
      const pipsLabel = h("span", { class: "vh" }); const setPipsLabel = () => { pipsLabel.textContent = A.doneCount(A.prog(slug), c) + " of " + n + " modules done"; }; setPipsLabel(); pipsBy[c.key].label = setPipsLabel;
      prPage[c.key] = pages.length;
      page("", [h("span", { class: "steptag" }, "Steps 2–4 · Practise it"), h("h2", null, "Practise it"), h("p", { class: "para" }, "You have read the chapter. Now make it your own."),
        h("div", { class: "practise" }, h("ol", { class: "fourstep" }, h("li", null, h("b", { class: "n" }, "2"), h("span", null, "A quick check-in: three questions from memory.")), h("li", null, h("b", { class: "n" }, "3"), h("span", null, "Choose your level: Support, Core or Stretch.")), h("li", null, h("b", { class: "n" }, "4"), h("span", null, "Everyone answers the same task."))),
          h("div", { class: "pips", "aria-hidden": "true" }, pipsBy[c.key]), pipsLabel,
          h("div", { class: "ibar" }, h("button", { type: "button", class: "btn", onclick: () => openLeaf(c.key) }, I("layers"), "Open the modules"), h("a", { class: "btn ghost small", href: A.link("modules.html", { ch: c.key }) }, "Open on its own page")))], run);
    });
    /* back matter */
    const glPg = pages.length;
    if ((u.glossary || []).length) page("glosspg", [h("h2", null, "Glossary"), h("dl", null, u.glossary.map((g) => [h("dt", null, g.term), h("dd", null, g.means)]))], ["Glossary", runA]);
    page("", [h("h2", null, "What next?"), h("p", { class: "para" }, "Go back to any chapter from the contents, or practise the modules for the whole unit."),
      h("div", { class: "ibar", style: "flex-direction:column;align-items:flex-start;gap:10px" }, h("a", { class: "btn", href: A.link("modules.html") }, I("layers"), "All the modules"), h("a", { class: "btn ghost", href: A.link("unit.html") }, I("grid"), "The unit at a glance")),
      h("p", { class: "note", style: "margin-top:28px" }, NOTICE), h("p", { class: "note" }, PILOT)], ["The end", runA]);
    pages.forEach((p, i) => { if (i) p.append(h("span", { class: "pgno", "aria-label": "Page " + (i + 1) }, String(i + 1))); });
    /* contents entries now that page numbers are known */
    u.chapters.forEach((c) => tocList.append(h("li", null, h("button", { type: "button", onclick: () => goTo(chStart[c.key], { jump: true }) }, h("span", { class: "cn" }, String(c.n)), h("span", { class: "ct" }, c.title), h("span", { class: "cp" }, "page " + (chStart[c.key] + 1))))));
    if ((u.glossary || []).length) tocList.append(h("li", null, h("button", { type: "button", onclick: () => goTo(glPg, { jump: true }) }, h("span", { class: "cn" }, "·"), h("span", { class: "ct" }, "Glossary"), h("span", { class: "cp" }, "page " + (glPg + 1)))));

    /* --- the desk: tools, book, bar --- */
    const jump = h("select", { class: "sel", "aria-label": "Go to a chapter" }, h("option", { value: "0" }, "Cover"), h("option", { value: "1" }, "Contents"), u.chapters.map((c) => h("option", { value: String(chStart[c.key]) }, "Chapter " + c.n + ": " + c.title)), (u.glossary || []).length ? h("option", { value: String(glPg) }, "Glossary") : null);
    jump.addEventListener("change", () => goTo(+jump.value, { jump: true }));
    let l1sel = null;
    if (l1Codes.length) {
      l1sel = h("select", { class: "sel l1sel", "aria-label": "Home language shown under each sentence" }, h("option", { value: "" }, "English only"), l1Codes.map((k) => h("option", { value: k, lang: k }, L1N[k] || k.toUpperCase())));
      l1sel.addEventListener("change", () => A.l1.apply(l1sel.value));
      /* ?l1=<code> in the address opens the book with that home language (a link a teacher or parent can share); otherwise the device's saved choice */
      const qL1 = (new URLSearchParams(location.search).get("l1") || "").toLowerCase();
      const saved = l1Codes.indexOf(qL1) >= 0 ? qL1 : String(A.store.get("l1", "") || ""); applyL1(l1Codes.indexOf(saved) >= 0 ? saved : ""); l1sel.value = l1Cur; if (l1Codes.indexOf(qL1) >= 0) A.store.set("l1", qL1); /* the select is not in the document yet, so set it directly */
    }
    const tools = h("div", { class: "booktools" }, h("h1", { class: "booktitle" }, h("small", null, m.subject + " · Year " + m.year), m.title), h("span", { class: "grow" }),
      l1sel ? h("label", { class: "lbl l1lbl" }, I("globe"), h("span", { class: "vh" }, "Home language"), l1sel) : null,
      h("label", { class: "lbl" }, h("span", { class: "vh" }, "Go to"), jump),
      h("div", { class: "vgroup", role: "group", "aria-label": "Voice-over" }, h("span", { class: "lbl" }, "Voice"), h("button", { type: "button", class: "vbtn icon tiny", "aria-label": "Pause or resume the voice", title: "Pause or resume", onclick: () => V.toggle() }, I("pause")), h("button", { type: "button", class: "vbtn icon tiny", "aria-label": "Stop the voice", title: "Stop", onclick: () => V.stop() }, I("stop")), A.speedSelect()));
    const L = h("div", { class: "slot l" }), R = h("div", { class: "slot r" });
    const book = h("div", { class: "book", role: "region", "aria-roledescription": "book", "aria-label": m.title + " ebook" }, L, R);
    const stage = h("div", { class: "bookstage" }, book);
    const prevB = h("button", { type: "button", class: "nav", "aria-label": "Previous page" }, "‹"), nextB = h("button", { type: "button", class: "nav", "aria-label": "Next page" }, "›");
    const where = h("span", { class: "where", "aria-live": "polite" }), track = h("i");
    const desk = h("section", { class: "desk chrome", "aria-label": "Ebook" }, h("div", { class: "wrap" }, tools, stage, h("div", { class: "bookbar" }, prevB, h("div", { class: "mid" }, where, h("div", { class: "track", role: "presentation" }, track)), nextB)));
    main.append(desk);

    let cur = 0, spread = 2, turning = false;
    const mq = window.matchMedia("(min-width: 900px)");
    const isMounted = (i) => i >= cur && i < cur + spread;
    const endpaper = () => h("div", { class: "pg r endpaper", "aria-hidden": "true" });
    const setSide = (p, side) => { p.className = p.dataset.base + " " + side; };
    /* widgets render once their page is in the DOM (so they can measure themselves); AstraWidgets.render(container, widget, opts) */
    function renderWidgets() {
      const W = window.AstraWidgets; if (!W || typeof W.render !== "function") return;
      book.querySelectorAll(".slot .widget:not(.live)").forEach((host) => {
        try {
          host.classList.add("live"); W.render(host, host._widget, { voice: V, calm: !!A.prefs.calm, noMotion: A.noMotion(), unit: u, chapter: host._chapter, h: A.h, store: A.store });
          const own = host.querySelector(".w-prompt"); /* the widget prints the prompt itself: show it once, keep it as the read-aloud target */
          if (own && host._prompt) { host._prompt.hidden = true; if (host._item) host._item.el = own; }
        } catch (e) { host.classList.remove("live"); if (window.console) console.warn("widget failed:", e); }
      });
    }
    function mount(dir) {
      spread = mq.matches ? 2 : 1; book.classList.toggle("single", spread === 1);
      if (spread === 1) { setSide(pages[cur], "l"); L.replaceChildren(pages[cur]); R.replaceChildren(); R.hidden = true; }
      else { setSide(pages[cur], "l"); L.replaceChildren(pages[cur]); R.hidden = false; if (pages[cur + 1]) { setSide(pages[cur + 1], "r"); R.replaceChildren(pages[cur + 1]); } else R.replaceChildren(endpaper()); }
      prevB.disabled = cur <= 0; nextB.disabled = cur + spread >= pages.length;
      prevB.setAttribute("aria-label", spread === 2 ? "Previous pages" : "Previous page"); nextB.setAttribute("aria-label", spread === 2 ? "Next pages" : "Next page");
      const last = Math.min(cur + spread, pages.length); where.textContent = (spread === 2 && last > cur + 1 ? "Pages " + (cur + 1) + "–" + last : "Page " + (cur + 1)) + " of " + pages.length;
      track.style.width = Math.round((100 * last) / pages.length) + "%";
      let jv = cur === 0 ? "0" : "1"; u.chapters.forEach((c) => { if (chStart[c.key] <= cur + spread - 1 && cur > 0) jv = String(chStart[c.key]); });
      if ((u.glossary || []).length && cur >= glPg) jv = String(glPg); jump.value = jv;
      if (dir && spread === 1 && !A.noMotion()) { const pg = pages[cur]; pg.classList.add(dir > 0 ? "enter-n" : "enter-p"); setTimeout(() => pg.classList.remove("enter-n", "enter-p"), 360); }
      renderWidgets();
    }
    function goTo(n, opt) {
      opt = opt || {}; spread = mq.matches ? 2 : 1;
      n = Math.max(0, Math.min(pages.length - 1, n)); n -= n % spread; if (n === cur || turning) return;
      const fwd = n > cur; const far = Math.abs(n - cur) > spread;
      const animate = spread === 2 && !A.noMotion() && !opt.instant && !(far && opt.jump);
      if (!animate) { cur = n; mount(fwd ? 1 : -1); after(); return; }
      turning = true; const t = h("div", { class: "turn " + (fwd ? "fwd" : "back"), "aria-hidden": "true" });
      const outgoing = fwd ? pages[cur + 1] : pages[cur], incoming = fwd ? pages[n] : pages[n + 1], staying = fwd ? pages[cur] : pages[cur + 1];
      const f1 = h("div", { class: "face front" }), f2 = h("div", { class: "face back" });
      const cl = (p, side) => { if (!p) return endpaper(); const c = p.cloneNode(true); c.className = p.dataset.base + " " + side; c.removeAttribute("id"); c.querySelectorAll("[id]").forEach((x) => x.removeAttribute("id")); return c; };
      f1.append(cl(outgoing, fwd ? "r" : "l")); f2.append(cl(incoming, fwd ? "l" : "r")); t.append(f1, f2);
      const ghost = staying ? cl(staying, fwd ? "l" : "r") : null;
      cur = n; mount(); book.append(t); if (ghost) (fwd ? L : R).replaceChildren(ghost);
      requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("go")));
      setTimeout(() => { if (fwd) L.replaceChildren(pages[cur]); else R.replaceChildren(pages[cur + 1] || endpaper()); }, 375);
      setTimeout(() => { t.remove(); turning = false; after(); }, 790);
    }
    function after() {
      if (spread === 1) { const r = book.getBoundingClientRect(); if (r.top < 0) { try { window.scrollTo({ top: window.scrollY + r.top - 70, behavior: "auto" }); } catch (e) { } } }
    }
    prevB.addEventListener("click", () => goTo(cur - spread));
    nextB.addEventListener("click", () => goTo(cur + spread));
    R.addEventListener("click", (e) => { if (e.target.closest("button,a,input,select,textarea,label,[role=button],.kwcard,.worked,.practise")) return; const s = window.getSelection && String(window.getSelection()); if (s) return; goTo(cur + spread); });
    let tx = null, ty = null;
    book.addEventListener("touchstart", (e) => { if (spread !== 1 || e.touches.length !== 1) return; tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
    book.addEventListener("touchend", (e) => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) goTo(cur + (dx < 0 ? 1 : -1)); }, { passive: true });
    document.addEventListener("keydown", (e) => {
      if (leafwrap.classList.contains("open")) return;
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target; if (t && (t.closest("input,textarea,select,[contenteditable]") || (t.getAttribute && t.getAttribute("role") === "tab"))) return;
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(cur + spread); } else if (e.key === "ArrowLeft") { e.preventDefault(); goTo(cur - spread); }
    });
    const onMq = () => { cur -= cur % (mq.matches ? 2 : 1); mount(); };
    if (mq.addEventListener) mq.addEventListener("change", onMq); else if (mq.addListener) mq.addListener(onMq);
    mount();

    /* --- the leaf: modules open as a drawer --- */
    const leafTitle = h("div", { class: "lt", id: "leaf-t" }); const leafHost = h("div", { style: "display:flex;flex-direction:column;flex:1;min-height:0" });
    const xB = h("button", { type: "button", class: "x", "aria-label": "Close the modules and go back to the book" }, "×");
    const leaf = h("div", { class: "leaf" }, h("div", { class: "leafhead chrome" }, leafTitle, xB), leafHost);
    const leafwrap = h("div", { class: "leafwrap", role: "dialog", "aria-modal": "true", "aria-labelledby": "leaf-t" }, leaf);
    document.body.append(leafwrap); let leafFrom = null, leafKey = null;
    function openLeaf(key, start) {
      const c = u.chapters.find((x) => x.key === key); if (!c) return; V.stop(); leafKey = key; leafFrom = document.activeElement;
      leafTitle.replaceChildren(h("small", null, "Chapter " + c.n + " · modules"), c.title);
      const pl = A.player(u, c, { start: start != null ? start : -1, onProgress: () => updPips(c), onFinish: closeLeaf });
      pl.node.style.flex = "1"; leafHost.replaceChildren(pl.node);
      leafwrap.classList.add("open"); document.body.style.overflow = "hidden"; main.setAttribute("aria-hidden", "true");
      setTimeout(() => xB.focus(), 30);
      if (location.hash !== "#practise-" + key) { try { history.replaceState(null, "", "#practise-" + key); } catch (e) { } }
    }
    function closeLeaf() {
      if (!leafwrap.classList.contains("open")) return; V.stop(); leafwrap.classList.remove("open"); document.body.style.overflow = ""; main.removeAttribute("aria-hidden");
      if (leafKey) updPips(u.chapters.find((x) => x.key === leafKey));
      try { history.replaceState(null, "", location.pathname + location.search + (leafKey ? "#ch-" + leafKey : "")); } catch (e) { }
      leafKey = null; if (leafFrom && leafFrom.focus && document.contains(leafFrom)) leafFrom.focus();
    }
    function updPips(c) { if (!c) return; const p = A.prog(slug); (pipsBy[c.key] || []).forEach((el, i) => el.classList.toggle("done", !!(p.done[c.key] || {})[i])); if (pipsBy[c.key] && pipsBy[c.key].label) pipsBy[c.key].label(); }
    xB.addEventListener("click", closeLeaf);
    leafwrap.addEventListener("click", (e) => { if (e.target === leafwrap) closeLeaf(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && leafwrap.classList.contains("open")) { e.preventDefault(); closeLeaf(); } });
    leafwrap.addEventListener("keydown", (e) => {
      if (e.key === "Tab") { const f = Array.from(leaf.querySelectorAll("button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea,[tabindex='0']")).filter((x) => x.offsetParent !== null); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
    });
    A._book = { goTo: (n) => goTo(n, { instant: true }), /* instant: used by tests and tools */ openLeaf, closeLeaf, pages: () => pages.length, cur: () => cur, chStart, prPage };

    /* --- deep links: #ch-<key> | #practise-<key> --- */
    function route() {
      const hs = decodeURIComponent(location.hash || ""); let k;
      if ((k = hs.match(/^#ch-(.+)$/)) && chStart[k[1]] != null) { goTo(chStart[k[1]], { jump: true }); }
      else if ((k = hs.match(/^#practise-(.+)$/)) && prPage[k[1]] != null) { goTo(prPage[k[1]], { jump: true }); if (leafKey !== k[1]) openLeaf(k[1]); }
    }
    route(); window.addEventListener("hashchange", route);
  };

  /* ================= page: index of units ================= */
  A.pages.index = async function () {
    A.theme("triple", 11);
    const main = document.getElementById("main");
    A.topbar(null, null, "index.html");
    main.replaceChildren(h("section", { class: "hero chrome" }, h("div", { class: "in", style: "grid-template-columns:1fr" }, h("div", null,
      h("p", { class: "eyebrow" }, "Ad Astra · core-subject ecosystem"), h("h1", null, "Read it. Check it. Choose your level. Reach the same task."),
      h("p", { class: "sub" }, "One exemplar unit for each core subject: a read-along ebook that turns like a book, and modules that adapt to each pupil — built from the department’s own lessons."),
      h("div", { class: "badges" }, ["Before the lesson", "Check-in", "Support · Core · Stretch", "The same task"].map((t, i) => h("span", { class: "badge" }, (i + 1) + " · " + t)))))));
    const sec = h("section", { class: "sec" }, h("div", { class: "wrap" })); main.append(sec); const wrap = sec.firstChild;
    const reg = (window.ASTRA_REGISTRY || []).filter((s) => SLUG_RE.test(s));
    if (!reg.length) { wrap.append(h("p", { class: "loading" }, "No units have been built yet.")); A.footer(null); return; }
    const ORDER = ["english", "englit", "maths", "combined", "triple", "geography", "history"], NAMES = { english: "English Language", englit: "English Literature", maths: "Mathematics", combined: "Combined Science", triple: "Triple Science", geography: "Geography", history: "History" };
    const loaded = [];
    for (const s of reg) { try { loaded.push([s, await A.loadUnit(s, "")]); } catch (e) { loaded.push([s, null, e]); } }
    const sub = document.querySelector(".hero .sub"); if (sub && loaded.length > 5) sub.textContent = loaded.length + " units across the five core subjects: a read-along ebook that turns like a book, and modules that adapt to each pupil — built from the departments’ own lessons.";
    const groups = new Map(); for (const k of ORDER) groups.set(k, []);
    loaded.forEach((r) => { const k = r[1] ? (r[1].meta.subjectKey || "maths") : "maths"; (groups.get(k) || groups.get("maths")).push(r); });
    for (const [k, rows] of groups) {
      if (!rows.length) continue;
      rows.sort((a, b) => (a[1] ? a[1].meta.year : 0) - (b[1] ? b[1].meta.year : 0) || a[0].localeCompare(b[0]));
      const grid = h("div", { class: "ucards" }); wrap.append(h("h2", { class: "usubject" }, NAMES[k], h("span", { class: "ucount" }, " · " + rows.length + (rows.length === 1 ? " unit" : " units"))), grid);
      for (const [s, u, e] of rows) {
        if (!u) { grid.append(h("div", { class: "err" }, h("b", null, s), ": ", e.message)); continue; }
        const m = u.meta; const base = s + "/";
        grid.append(h("article", { class: "ucard", "aria-labelledby": "uc-" + s }, h("img", { src: A.plateUrl(m), alt: "", loading: "lazy", width: "1600", height: "900" }),
          h("div", { class: "body" }, h("span", { class: "k" }, m.subject + " · Year " + m.year + " · " + m.board + " " + m.spec), h("h3", { id: "uc-" + s }, m.title), h("p", null, m.sub),
            h("div", { class: "acts" }, h("a", { class: "btn small", href: base + "unit.html" }, I("grid"), "Unit"), h("a", { class: "btn ghost small", href: base + "ebook.html" }, I("book"), "Ebook"), h("a", { class: "btn ghost small", href: base + "modules.html" }, I("layers"), "Modules"), h("a", { class: "btn ghost small", href: base + "arcade.html" }, I("game"), "Arcade")))));
      }
    }
    A.footer(null);
  };

  /* ================= boot ================= */
  async function boot() {
    const kind = document.body.getAttribute("data-page");
    if (!document.getElementById("main")) document.body.append(h("main", { id: "main" }));
    document.getElementById("main").setAttribute("tabindex", "-1");
    if (kind === "index") return A.pages.index();
    const slug = A.slug();
    if (!slug) { A.theme("maths", 7); A.topbar(null, null); A.fail("No unit was named. Open this page from a unit folder (<slug>/" + kind + ".html) or add ?u=<slug> to the address."); A.footer(null); return; }
    let u;
    try { u = await A.loadUnit(slug); } catch (e) { A.theme("maths", 7); A.topbar(null, null); A.fail(e.message); A.footer(null); return; }
    const m = u.meta; A.theme(m.subjectKey, m.year); V.lang = "en-GB"; A.unit = u; A.kind = kind;
    const names = { unit: "Unit at a glance", ebook: "Ebook", modules: "Modules", arcade: "Arcade" };
    document.title = m.title + " · " + (names[kind] || "") + " · " + m.subject + " Y" + m.year + " · Ad Astra";
    A.topbar(m, ({ unit: "Unit", ebook: "Ebook", modules: "Modules", arcade: "Arcade" })[kind]);
    if (A.pages[kind]) { try { A.pages[kind](u); } catch (e) { A.fail("Something in this unit’s manifest could not be shown (" + e.message + ")."); if (window.console) console.warn(e); } }
    else if (kind === "arcade") { /* the arcade is drawn by assets/astra-arcade.js through Astra.ready(fn); until it loads, a plain note */
      const main = document.getElementById("main"); main.replaceChildren(h("section", { class: "sec" }, h("div", { class: "wrap" }, h("h1", null, "Arcade"), h("p", { class: "loading", id: "arcade-wait" }, "Loading the key-word games…"))));
      setTimeout(() => { const w = document.getElementById("arcade-wait"); if (w) w.textContent = "The arcade script (assets/astra-arcade.js) has not loaded. The glossary games are not available on this copy of the site."; }, 4000);
    } else (A.pages.unit)(u);
    A.footer(m);
    const readyFns = A._ready || []; A._ready = null; readyFns.forEach((f) => { try { f(u, kind); } catch (e) { if (window.console) console.warn(e); } });
    try { window.dispatchEvent(new CustomEvent("astra:unit", { detail: { unit: u, kind } })); } catch (e) { }
    window.addEventListener("pagehide", () => V.stop());
  }
  /* Astra.ready(fn): fn(unit, kind) once the manifest is loaded and the chrome is drawn (immediately if already so) */
  A._ready = []; A.ready = (fn) => { if (typeof fn !== "function") return; if (A.unit) fn(A.unit, A.kind); else (A._ready = A._ready || []).push(fn); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
