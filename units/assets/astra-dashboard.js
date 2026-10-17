/* © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
   astra-dashboard.js — the Ad Astra CLASS DASHBOARD (teacher page, units/dashboard.html).
   Standalone: shares astra.css and registry.js with the pupil pages but not astra.js.
   Reads  GET {endpoint}/class/{CODE}/summary?unit={slug}  and  GET {endpoint}/class/{CODE}/units  from the Worker
   in dashboard/worker/ (endpoint = window.ASTRA_CONFIG.endpoint, set in registry.js). No names anywhere: a class is a
   4–6 character code; every number on this page is a count. With no endpoint, or when the fetch fails, the page says so
   and renders a built-in demo set so the layout can be judged. No chart library: inline SVG and CSS bars only. */
(function () {
  "use strict";
  const D = (window.AstraDash = window.AstraDash || {});
  const NOTICE = "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework";
  const DEMO_MSG = "Not live yet — the dashboard reads a class's anonymous hand-ins once the Worker is deployed (see DEPLOY.md). This screen is showing demo data.";
  const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,60}$/, CLASS_RE = /^[A-Z0-9]{4,6}$/;
  const MIN_N = 3;            // a flag needs at least this many hand-ins — one tap from one pupil is not a pattern
  const GATE_FLAG = 1.5;      // check-in mean below this → pre-teach
  const HARD_FLAG = 0.30;     // share of "too hard" above this → pre-teach
  const LEVELS = ["support", "core", "stretch"], LEVEL_NAME = { support: "Support", core: "Core", stretch: "Stretch" };

  /* ================= helpers ================= */
  const h = function (tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k]; if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v; /* only ever used with this file's own icon markup */
      else if (k.slice(0, 2) === "on" && typeof v === "function") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat(Infinity)) if (k != null && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
    return e;
  };
  const svgNS = "http://www.w3.org/2000/svg";
  const s = function (tag, attrs, ...kids) { const e = document.createElementNS(svgNS, tag); for (const k in attrs || {}) if (attrs[k] != null) e.setAttribute(k, attrs[k]); for (const k of kids.flat()) if (k != null) e.append(k.nodeType ? k : document.createTextNode(String(k))); return e; };
  const P = {
    star: '<path d="M12 2.5l2.2 6.6 6.8.1-5.5 4.1 2 6.6L12 16l-5.5 3.9 2-6.6L3 9.2l6.8-.1z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h12l-2 4 2 4H5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    ear: '<path d="M7 10a5 5 0 1 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 10a2 2 0 1 1 4 0"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
  };
  const icon = (n) => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[n] || P.star}</svg>`;
  const I = (n) => h("span", { html: icon(n), "aria-hidden": "true", style: "display:inline-flex" });
  const store = {
    get(k, d) { try { const v = window.localStorage.getItem("astra." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { window.localStorage.setItem("astra." + k, JSON.stringify(v)); } catch (e) { /* storage off: the page still works */ } },
  };
  const q = (k) => new URLSearchParams(location.search).get(k);
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many || one + "s");
  const titleCase = (slug) => String(slug).replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  D.ago = function (iso, now) {
    const t = Date.parse(iso); if (!t) return "";
    const d = Math.max(0, (now || Date.now()) - t), m = Math.round(d / 60000), hr = Math.round(d / 3600000), day = Math.round(d / 86400000);
    if (m < 2) return "just now"; if (m < 60) return m + " min ago"; if (hr < 24) return plural(hr, "hour") + " ago"; if (day < 14) return plural(day, "day") + " ago";
    return new Date(t).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  /* ================= theme (light / dark; follows the system until the teacher chooses) ================= */
  const prefersDark = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  D.theme = store.get("dash.theme", null); // "light" | "dark" | null = auto
  D.applyTheme = function () {
    const dark = D.theme ? D.theme === "dark" : prefersDark(); const r = document.documentElement;
    r.dataset.theme = dark ? "dark" : "light"; r.dataset.dark = dark ? "1" : "0"; r.dataset.year = dark ? "11" : "7";
  };
  D.applyTheme();
  if (window.matchMedia) try { window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if (!D.theme) D.applyTheme(); }); } catch (e) { /* older engines */ }
  D.setSubject = (k) => { document.documentElement.dataset.subject = ["english", "englit", "maths", "combined", "triple"].indexOf(k) >= 0 ? k : "maths"; };

  /* ================= analysis (pure; shared by the live and demo paths) ================= */
  /** Decorate a Worker summary with flags and plain-language reasons. */
  D.analyse = function (summary) {
    const chapters = (summary.chapters || []).map((c) => {
      const g = c.gates || { n: 0, mean: null, dist: [0, 0, 0, 0] }, v = c.voice || { hard: 0, right: 0, easy: 0 };
      const vTotal = (v.hard || 0) + (v.right || 0) + (v.easy || 0), hardShare = vTotal ? (v.hard || 0) / vTotal : 0;
      const reasons = [];
      if (g.n >= MIN_N && g.mean != null && g.mean < GATE_FLAG) reasons.push({ kind: "gate", text: "the check-in averaged " + fmt1(g.mean) + " out of 3 across " + plural(g.n, "hand-in") });
      if (vTotal >= MIN_N && hardShare > HARD_FLAG) reasons.push({ kind: "voice", text: (v.hard || 0) + " of " + vTotal + " pupils (" + Math.round(hardShare * 100) + "%) said the modules were too hard" });
      const events = g.n + ((c.modules || {}).done || 0) + vTotal + ((c.returns || {}).n || 0) + (c.explains || 0);
      return Object.assign({}, c, { vTotal, hardShare, hardHot: vTotal >= MIN_N && hardShare > HARD_FLAG, reasons, flagged: reasons.length > 0, events });
    });
    const totals = chapters.reduce((t, c) => { t.gates += c.gates.n; t.modules += c.modules.done; t.voice += c.vTotal; t.returns += c.returns.n; t.explains += c.explains; t.events += c.events; return t; }, { gates: 0, modules: 0, voice: 0, returns: 0, explains: 0, events: 0 });
    const needs = chapters.filter((c) => c.flagged).sort((a, b) => (a.gates.mean == null ? 9 : a.gates.mean) - (b.gates.mean == null ? 9 : b.gates.mean) || b.hardShare - a.hardShare);
    return { chapters, totals, needs };
  };
  const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const fmt1 = (x) => (Math.round(x * 10) / 10).toFixed(1);

  /** Order the Worker's (alphabetical) chapters by the manifest and attach titles / numbers. */
  D.align = function (chapters, unit) {
    const keys = unit ? unit.chapters.map((c) => c.key) : [];
    const byKey = new Map(chapters.map((c) => [c.chapter, c]));
    const out = [];
    keys.forEach((k, i) => { const m = unit.chapters[i]; const c = byKey.get(k) || D.emptyChapter(k); out.push(Object.assign(c, { n: m.n || i + 1, title: m.title || titleCase(k), known: true })); byKey.delete(k); });
    for (const c of byKey.values()) out.push(Object.assign(c, { n: null, title: titleCase(c.chapter), known: false }));
    return out;
  };
  D.emptyChapter = (key) => ({ chapter: key, gates: { n: 0, mean: null, dist: [0, 0, 0, 0] }, modules: { done: 0, byLevel: { support: 0, core: 0, stretch: 0 } }, voice: { hard: 0, right: 0, easy: 0 }, returns: { n: 0, correct: 0 }, explains: 0, lastSeen: null });

  /* ================= demo data (deterministic per unit; one low check-in, one "too hard" chapter) ================= */
  D.demo = function (slug, unit, now) {
    now = now || Date.now();
    const keys = unit ? unit.chapters.map((c) => c.key) : ["chapter-1", "chapter-2", "chapter-3", "chapter-4", "chapter-5"];
    let seed = 7; for (const ch of slug) seed = (seed * 31 + ch.charCodeAt(0)) % 2147483647;
    const rnd = () => (seed = (seed * 48271) % 2147483647) / 2147483647;
    const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
    const chapters = keys.map((key, i) => {
      const taught = i < keys.length - 1 || keys.length <= 3;             // the last chapter has not been taught yet
      if (!taught) return D.emptyChapter(key);
      const n = ri(9, 14), lowGate = i === 2, hardVoice = i === 4 || (keys.length < 5 && i === 1);
      const dist = [0, 0, 0, 0];
      for (let k = 0; k < n; k++) { const r = rnd(); dist[lowGate ? (r < 0.35 ? 0 : r < 0.75 ? 1 : r < 0.95 ? 2 : 3) : (r < 0.08 ? 0 : r < 0.25 ? 1 : r < 0.6 ? 2 : 3)]++; }
      const gsum = dist[1] + 2 * dist[2] + 3 * dist[3];
      const byLevel = { support: ri(lowGate ? 8 : 2, lowGate ? 14 : 7), core: ri(6, 13), stretch: ri(lowGate ? 0 : 2, lowGate ? 2 : 8) };
      const vTotal = ri(8, n), hard = hardVoice ? Math.round(vTotal * (0.36 + rnd() * 0.2)) : ri(0, Math.floor(vTotal * 0.22)), easy = ri(0, Math.max(0, Math.floor((vTotal - hard) * 0.35)));
      const rn = i < 3 ? ri(6, 16) : ri(0, 5);
      return { chapter: key, gates: { n, mean: Math.round((gsum / n) * 100) / 100, dist }, modules: { done: byLevel.support + byLevel.core + byLevel.stretch, byLevel }, voice: { hard, right: vTotal - hard - easy, easy }, returns: { n: rn, correct: rn ? ri(Math.floor(rn * 0.4), rn) : 0 }, explains: ri(2, 9), lastSeen: new Date(now - ri(1, 72) * 3600000 - (keys.length - i) * 86400000 * 0.6).toISOString() };
    });
    return { class: "7MA1", unit: slug, chapters, generatedAt: new Date(now).toISOString(), demo: true };
  };

  /* ================= manifests (titles + chapter order), loaded from <slug>/manifest.js ================= */
  D.units = {};
  const loadScript = (src) => new Promise((res, rej) => { const el = document.createElement("script"); el.src = src; el.onload = () => res(); el.onerror = () => rej(new Error("Could not load " + src)); document.head.appendChild(el); });
  D.loadUnit = async function (slug) {
    if (D.units[slug]) return D.units[slug];
    window.ASTRA_UNITS = window.ASTRA_UNITS || {};
    try { if (!window.ASTRA_UNITS[slug]) await loadScript(slug + "/manifest.js"); } catch (e) { /* no manifest: fall back to the slug */ }
    const u = window.ASTRA_UNITS[slug];
    D.units[slug] = u && u.meta && Array.isArray(u.chapters) ? u : null;
    return D.units[slug];
  };

  /* ================= network ================= */
  D.endpoint = function () { const c = window.ASTRA_CONFIG || {}; return String(c.endpoint || "").trim().replace(/\/+$/, ""); };
  D.fetchJSON = async function (url) {
    const ctl = typeof AbortController === "function" ? new AbortController() : null; const t = ctl && setTimeout(() => ctl.abort(), 8000);
    try {
      const r = await fetch(url, { signal: ctl && ctl.signal, cache: "no-store" });
      if (!r.ok) { let m = "HTTP " + r.status; try { const j = await r.json(); if (j && j.error) m += " — " + j.error; } catch (e) { /* no body */ } throw new Error(m); }
      return await r.json();
    } finally { if (t) clearTimeout(t); }
  };

  /* ================= rendering ================= */
  function topbar() {
    const tog = h("button", { type: "button", class: "themetog", "aria-pressed": document.documentElement.dataset.theme === "dark" ? "true" : "false", title: "Switch between light and dark" });
    const paint = () => { const dark = document.documentElement.dataset.theme === "dark"; tog.replaceChildren(I(dark ? "sun" : "moon"), dark ? "Light" : "Dark"); tog.setAttribute("aria-pressed", dark ? "true" : "false"); };
    tog.addEventListener("click", () => { D.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; store.set("dash.theme", D.theme); D.applyTheme(); paint(); });
    paint();
    const nav = h("nav", { "aria-label": "Site" }, h("a", { href: "index.html" }, I("grid"), "All units"), tog);
    document.body.prepend(h("a", { class: "skip", href: "#main" }, "Skip to content"),
      h("header", { class: "topbar chrome" }, h("div", { class: "in" }, h("a", { class: "brand", href: "index.html" }, I("star"), "Ad Astra"), h("span", { class: "subj" }, "Class dashboard · teacher view"), nav)));
  }
  function footer() {
    document.body.append(h("footer", { class: "foot chrome" }, h("p", null, NOTICE),
      h("p", { class: "dp" }, "No names, ever. Pupils type a class code; this page shows counts for the class. Hand-ins are kept for 12 months and can be wiped per class on request.")));
  }

  /** Small histogram of check-in scores 0–3 (inline SVG; counts above, score below). */
  D.hist = function (dist, n) {
    const W = 132, H = 54, bw = 24, gap = 8, x0 = 4, base = 40, top = 12, max = Math.max(1, ...dist);
    const svg = s("svg", { class: "hist", viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": n ? "Check-in scores: " + dist.map((c, i) => c + " scored " + i).join(", ") : "No check-ins yet" });
    svg.append(s("line", { x1: 0, y1: base + 0.5, x2: W, y2: base + 0.5 }));
    dist.forEach((c, i) => {
      const x = x0 + i * (bw + gap), hgt = c ? Math.max(3, Math.round(((base - top) * c) / max)) : 2, y = base - hgt, r = c ? Math.min(4, hgt / 2) : 0;
      if (c) svg.append(s("path", { class: "bar", d: `M${x} ${base}V${y + r}a${r} ${r} 0 0 1 ${r} -${r}h${bw - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}V${base}Z`, fill: "var(--acc)" }));
      else svg.append(s("rect", { class: "bar zero", x, y: base - 2, width: bw, height: 2, rx: 1 }));
      svg.append(s("text", { class: "cnt", x: x + bw / 2, y: y - 3, "text-anchor": "middle" }, c));
      svg.append(s("text", { x: x + bw / 2, y: H - 3, "text-anchor": "middle" }, i === 0 ? "0" : i === 3 ? "3 ✓" : String(i)));
    });
    return svg;
  };

  function card(c, now) {
    const g = c.gates, md = c.modules, v = c.voice, rt = c.returns;
    const el = h("article", { class: "dcard" + (c.flagged ? " flagged" : ""), "aria-labelledby": "dc-" + c.chapter });
    el.append(h("div", { class: "head" }, h("span", { class: "kick" }, c.n ? "Chapter " + c.n : "Chapter"), c.lastSeen ? h("span", { class: "last" }, "last hand-in " + D.ago(c.lastSeen, now)) : h("span", { class: "last" }, "no hand-ins yet")),
      h("h3", { id: "dc-" + c.chapter }, c.title || titleCase(c.chapter)));
    if (c.flagged) el.append(h("div", { class: "flagline" }, I("flag"), h("span", null, h("b", null, "Pre-teach this one. "), cap(c.reasons.map((r) => r.text).join("; ")) + ".")));
    if (!c.events) { el.append(h("p", { class: "empty" }, "Nothing handed in for this chapter yet — it may not have been taught.")); return el; }
    const metrics = h("div", { class: "metrics" });
    // 1. check-in (gate)
    metrics.append(h("div", { class: "m" }, h("span", { class: "k" }, "Check-in", h("b", null, g.n ? fmt1(g.mean) + " / 3" : "—"), h("small", null, g.n ? "mean of " + plural(g.n, "hand-in") : "none yet")), D.hist(g.dist, g.n)));
    // 2. modules by level
    const segs = h("div", { class: "seg", role: "img", "aria-label": md.done ? LEVELS.map((l) => md.byLevel[l] + " " + LEVEL_NAME[l]).join(", ") : "no modules completed yet" });
    if (md.done) for (const l of LEVELS) if (md.byLevel[l]) segs.append(h("i", { class: l, style: "flex:" + md.byLevel[l] + " 1 0" }));
    metrics.append(h("div", { class: "m" }, h("span", { class: "k" }, "Modules done", h("b", null, md.done), h("small", null, "by level chosen")), segs,
      h("div", { class: "legend" }, LEVELS.map((l) => h("span", null, h("i", { class: "sw " + l, "aria-hidden": "true" }), LEVEL_NAME[l] + " ", h("b", null, md.byLevel[l] || 0))))));
    // 3. pupil voice
    metrics.append(h("div", { class: "m" }, h("span", { class: "k" }, I("ear"), "Pupil voice", h("small", null, c.vTotal ? plural(c.vTotal, "response") : "none yet")),
      h("div", { class: "voice" },
        h("div", { class: c.hardHot ? "hot" : null }, h("span", { class: "n" }, v.hard || 0), h("span", { class: "t" }, "Too hard"), c.hardHot ? h("span", { class: "pc", title: "More than " + Math.round(HARD_FLAG * 100) + "% said too hard" }, I("flag"), " " + Math.round(c.hardShare * 100) + "%") : null),
        h("div", null, h("span", { class: "n" }, v.right || 0), h("span", { class: "t" }, "About right")),
        h("div", null, h("span", { class: "n" }, v.easy || 0), h("span", { class: "t" }, "Too easy")))));
    // 4. spaced returns + 5. explanations
    const rp = pct(rt.correct, rt.n);
    metrics.append(h("div", { class: "m" },
      h("span", { class: "k" }, "Spaced returns", h("b", null, rt.n ? rp + "% right" : "—"), h("small", null, rt.n ? rt.correct + " of " + rt.n + " due items" : "none due yet")),
      h("div", { class: "ret", role: "img", "aria-label": rt.n ? rt.correct + " of " + rt.n + " returned items answered correctly" : "no returns yet" }, h("div", { class: "trk" }, h("i", { style: "width:" + rp + "%" })), h("b", null, rt.n ? rp + "%" : "—")),
      h("div", { class: "exp" }, h("span", { class: "n" }, c.explains), h("span", { class: "t", style: "color:var(--muted);font-size:.85rem" }, "explanations kept"))));
    el.append(metrics);
    return el;
  }

  function preteach(an, code, live) {
    const box = h("div", { class: "preteach" });
    if (!an.totals.events) {
      box.classList.add("quiet");
      box.append(h("p", { class: "lede", style: "margin:0" }, live ? "No hand-ins yet for class " + code + " on this unit. Pupils hand in automatically once they enter the class code on the unit page — nothing else to set up." : "No data for this unit yet."));
      return box;
    }
    if (!an.needs.length) {
      box.classList.add("clear");
      box.append(h("p", { style: "margin:0;display:flex;gap:8px;align-items:flex-start" }, I("check"), h("span", null, h("b", null, "No chapter stands out. "), "Every check-in averaged " + GATE_FLAG + " or more out of 3, and fewer than " + Math.round(HARD_FLAG * 100) + "% of pupils said “too hard”. Use the cards below to see who chose Support, and where.")));
      return box;
    }
    box.append(h("p", { class: "lede" }, plural(an.needs.length, "chapter") + " where the class is telling you it needs the read-along and key words again before the lesson:"));
    box.append(h("ul", null, an.needs.map((c) => h("li", null, h("span", { class: "ch", "aria-hidden": "true" }, c.n || "•"), h("div", null, h("b", { class: "t" }, (c.n ? "Chapter " + c.n + " · " : "") + (c.title || titleCase(c.chapter))), h("p", null, cap(c.reasons.map((r) => r.text).join("; ")) + "."))))));
    box.append(h("p", { class: "adv" }, h("b", null, "What to do: "), "play the pre-teach passage with the key-word cards for these chapters (Step 1 in the ebook), then re-run the check-in. Pupils who scored 0 or 1 start at Support; the task at the end is the same for everyone."));
    return box;
  }

  /* ================= page ================= */
  D.state = { code: "", unit: "", live: false };
  async function render() {
    const main = document.getElementById("main");
    const reg = (window.ASTRA_REGISTRY || []).filter((x) => SLUG_RE.test(x));
    const endpoint = D.endpoint();
    const savedCode = (q("class") || store.get("dash.class", "") || "").toUpperCase();
    const unitQ = q("unit");

    // --- hero with the form
    const codeIn = h("input", { class: "inp", id: "code", type: "text", inputmode: "text", autocomplete: "off", autocapitalize: "characters", spellcheck: "false", maxlength: "6", pattern: "[A-Za-z0-9]{4,6}", placeholder: "e.g. 7MA1", "aria-describedby": "code-help", value: savedCode });
    const unitSel = h("select", { class: "sel", id: "unit", "aria-label": "Unit" }, reg.map((slug) => h("option", { value: slug }, slug)));
    if (!reg.length) unitSel.append(h("option", { value: "" }, "No units built yet"));
    const show = h("button", { class: "btn", type: "submit" }, "Show the class");
    const form = h("form", { class: "dashform", novalidate: true }, h("label", { class: "lbl", for: "code" }, "Class code", codeIn), h("label", { class: "lbl", for: "unit" }, "Unit", unitSel), show);
    const status = h("div", { class: "status", role: "status", "aria-live": "polite" });
    const hero = h("section", { class: "hero dash chrome" }, h("div", { class: "in" }, h("div", null,
      h("p", { class: "eyebrow" }, "Ad Astra · class dashboard"), h("h1", null, "How did the class get on?"),
      h("p", { class: "sub" }, "Pupils hand in anonymously with a class code — no names, no logins. Pick the class and the unit to see, chapter by chapter, how the check-in went, which level pupils chose, what they said about the difficulty, and how the spaced returns are holding."),
      form, h("p", { id: "code-help", class: "lbl", style: "margin:6px 0 0;font-size:.82rem" }, "4–6 letters or digits, the same code pupils type on the unit page."), status)));
    const needsSec = h("section", { class: "sec tight" }, h("div", { class: "wrap" }, h("h2", null, "Who needs the pre-teach on Thursday?"), h("div", { id: "needs" })));
    const cardsSec = h("section", { class: "sec" }, h("div", { class: "wrap" }, h("h2", null, "Chapter by chapter"), h("div", { class: "sum", id: "sum" }), h("div", { class: "dcards", id: "cards" })));
    const howSec = h("section", { class: "sec" }, h("div", { class: "wrap" }, h("div", { class: "howto" }, h("b", null, "How to read this"), h("ul", null,
      h("li", null, h("b", null, "Check-in"), " is the 3-question recall gate before the modules (score 0–3; ✓ = all three right). A mean under " + GATE_FLAG + " flags the chapter."),
      h("li", null, h("b", null, "Modules done"), " counts finished modules by the level the pupil chose: Support (steps + worked example), Core (one hint), Stretch (no help, explain or extend). Every level ends on the same task."),
      h("li", null, h("b", null, "Pupil voice"), " is the one-tap “Too hard · About right · Too easy” after each module. Over " + Math.round(HARD_FLAG * 100) + "% “too hard” flags the chapter."),
      h("li", null, h("b", null, "Spaced returns"), " are gate items that came back 2, 7 and 30 days later; the bar is the share answered correctly. ", h("b", null, "Explanations kept"), " counts “say why that works” boxes pupils filled in — the text itself never leaves the device."),
      h("li", null, "A flag needs at least " + MIN_N + " hand-ins; one pupil's tap is not a pattern. Each pupil can hand in more than once, so counts are hand-ins, not pupils.")))));
    main.replaceChildren(hero, needsSec, cardsSec, howSec);

    // --- unit titles from the manifests (best effort)
    await Promise.all(reg.map(async (slug) => { const u = await D.loadUnit(slug); const o = unitSel.querySelector('option[value="' + slug + '"]'); if (u && o) o.textContent = u.meta.subject + " · Year " + u.meta.year + " · " + u.meta.title; }));
    unitSel.value = reg.includes(unitQ) ? unitQ : (reg.includes(store.get("dash.unit", "")) ? store.get("dash.unit", "") : reg[0] || "");

    async function annotateUnits(code) {
      if (!endpoint || !CLASS_RE.test(code)) return;
      try {
        const r = await D.fetchJSON(endpoint + "/class/" + encodeURIComponent(code) + "/units");
        const counts = new Map((r.units || []).map((u) => [u.unit, u.events]));
        for (const o of unitSel.options) { const base = o.textContent.replace(/ · \d+ hand-ins?$/, ""); o.textContent = counts.has(o.value) ? base + " · " + plural(counts.get(o.value), "hand-in") : base; }
      } catch (e) { /* cosmetic only */ }
    }

    async function go(push) {
      const code = codeIn.value.trim().toUpperCase(), slug = unitSel.value; codeIn.value = code;
      if (!CLASS_RE.test(code)) { codeIn.setCustomValidity("x"); codeIn.setAttribute("aria-invalid", "true"); status.replaceChildren(h("p", { class: "err", style: "padding:8px 12px" }, "Type the class code: 4–6 letters or digits, e.g. 7MA1.")); codeIn.focus(); return; }
      codeIn.setCustomValidity(""); codeIn.removeAttribute("aria-invalid");
      if (!SLUG_RE.test(slug)) { status.replaceChildren(h("p", { class: "err", style: "padding:8px 12px" }, "No unit is built yet, so there is nothing to show.")); return; }
      store.set("dash.class", code); store.set("dash.unit", slug);
      if (push) { const p = new URLSearchParams(); p.set("class", code); p.set("unit", slug); try { history.replaceState(null, "", "?" + p.toString()); } catch (e) { /* file:// */ } }
      const unit = await D.loadUnit(slug); D.setSubject(unit ? unit.meta.subjectKey : "maths");
      status.replaceChildren(h("span", { class: "loading-inline" }, "Reading hand-ins…"));
      let summary, live = false, why = "";
      if (endpoint) {
        try { summary = await D.fetchJSON(endpoint + "/class/" + encodeURIComponent(code) + "/summary?unit=" + encodeURIComponent(slug)); live = true; } catch (e) { why = e && e.message ? e.message : String(e); }
      }
      if (!summary) summary = D.demo(slug, unit);
      D.state = { code, unit: slug, live };
      const now = Date.now(); summary.chapters = D.align(summary.chapters || [], unit); const an = D.analyse(summary);
      // status line
      const unitName = unit ? unit.meta.title : slug;
      if (live) status.replaceChildren(h("span", { class: "pill live" }, h("i", { class: "dot", "aria-hidden": "true" }), "Live"), h("p", null, h("b", null, "Class " + code + " · " + unitName + ". "), plural(an.totals.events, "anonymous hand-in") + " so far. Updated " + new Date(summary.generatedAt || now).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) + "."));
      else status.replaceChildren(h("span", { class: "pill" }, h("i", { class: "dot", "aria-hidden": "true" }), "Demo data"),
        h("div", { class: "demo-note", style: "margin-top:0;flex:1 1 100%" }, h("b", null, endpoint ? "Could not reach the dashboard Worker" : "Demo mode"), endpoint ? "The page could not read class " + code + " from " + endpoint + " (" + why + "). Check that the Worker is deployed and the address in registry.js is right. This screen is showing demo data." : DEMO_MSG));
      // sections
      document.getElementById("needs").replaceChildren(preteach(an, code, live));
      const t = an.totals;
      document.getElementById("sum").replaceChildren(
        h("span", null, h("b", null, t.gates), " check-ins"), h("span", null, h("b", null, t.modules), " modules done"), h("span", null, h("b", null, t.voice), " voice taps"),
        h("span", null, h("b", null, t.returns), " spaced returns"), h("span", null, h("b", null, t.explains), " explanations kept"));
      document.getElementById("cards").replaceChildren(...an.chapters.map((c) => card(c, now)));
      annotateUnits(code);
    }
    form.addEventListener("submit", (e) => { e.preventDefault(); go(true); });
    unitSel.addEventListener("change", () => { if (CLASS_RE.test(codeIn.value.trim().toUpperCase())) go(true); });
    codeIn.addEventListener("input", () => { codeIn.value = codeIn.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6); });
    D.go = go;

    if (CLASS_RE.test(savedCode) && reg.length) await go(false);
    else {
      status.replaceChildren(h("span", { class: "pill" }, h("i", { class: "dot", "aria-hidden": "true" }), endpoint ? "Live" : "Demo data"), h("p", null, endpoint ? "Enter the class code to read its hand-ins." : DEMO_MSG));
      document.getElementById("needs").replaceChildren(h("div", { class: "preteach quiet" }, h("p", { style: "margin:0" }, "Enter a class code above. The chapters that need the read-along and key words again will be listed here in plain language.")));
      document.getElementById("cards").replaceChildren(h("p", { class: "empty" }, "Chapter cards appear here once a class is chosen."));
    }
  }

  async function boot() {
    if (!document.getElementById("main")) document.body.append(h("main", { id: "main" }));
    document.getElementById("main").setAttribute("tabindex", "-1");
    D.setSubject("maths"); topbar();
    try { await render(); } catch (e) { document.getElementById("main").replaceChildren(h("div", { class: "wrap", style: "padding:40px 16px" }, h("div", { class: "err", role: "alert" }, h("h2", null, "The dashboard could not open"), h("p", null, e.message)))); }
    footer();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
