/* © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
   astra-arcade.js — the Ad Astra key-word ARCADE (schema astra/2, feature 7).
     <body data-page="arcade">  loaded after ../assets/astra.js (the engine) — but it also works without it.
   Three games built from the unit manifest's glossary: Word hunt (clue → term), Connections (4 groups of 4),
   Match the meaning (8 terms ↔ 8 meanings). Nothing is kept between sessions: no points, no leaderboards, no streaks,
   no best times — a deliberate design rule. No dependencies, no network calls.
   How the unit is found: the folder name (…/<slug>/arcade.html) or ?u=<slug>; the manifest is ../<slug>/manifest.js,
   which registers window.ASTRA_UNITS[slug]. With the engine present this script registers Astra.pages.arcade (the engine's
   boot calls it after drawing the theme, top bar and footer) and also asks Astra.ready(fn), which covers an engine that booted
   before this script arrived. Without the engine it finds the slug, loads the manifest and builds a matching top bar and footer. */
(function () {
  "use strict";
  const A = window.Astra || null;
  const DEBUG = /(?:^|[?&])debug=1(?:&|$)/.test(location.search);
  const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,60}$/;
  const NOTICE = "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework";
  const PILOT = "Pilot exemplar — awaiting department specialist review";
  let rendered = false;

  /* ================= helpers (use the engine's when it is there) ================= */
  const h = (A && A.h) || function (tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k]; if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v; /* only ever used with this script's own icon markup */
      else if (k.slice(0, 2) === "on" && typeof v === "function") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat(Infinity)) if (k != null && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
    return e;
  };
  const qs = (k) => new URLSearchParams(location.search).get(k);
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const link = (file, params) => {
    if (A && A.link) return A.link(file, params);
    const p = new URLSearchParams(); const u = qs("u"); if (u) p.set("u", u);
    if (params) for (const k in params) if (params[k] != null) p.set(k, params[k]);
    const s = p.toString(); return file + (s ? "?" + s : "");
  };
  const noMotion = () => (A && A.noMotion) ? A.noMotion() : (document.documentElement.dataset.calm === "1" || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches));
  /* accent- and case-insensitive letter folding: "Résumé" → "resume" */
  const fold = (s) => String(s == null ? "" : s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const isLetter = (c) => /^[a-z]$/.test(fold(c));
  const mmss = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
  const plural = (n, w) => n + " " + w + (n === 1 ? "" : /(s|x|ch|sh)$/.test(w) ? "es" : "s");
  const announce = (el, msg) => { el.textContent = ""; setTimeout(() => { el.textContent = msg; }, 20); };

  /* original line icons (24×24) */
  const ICON = {
    hunt: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/><path d="M8 11h5M8 8.5h3"/>',
    connect: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/><path d="M10.5 7h3M7 10.5v3M17 10.5v3M10.5 17h3"/>',
    match: '<path d="M4 7h11M15 7l-3-3M15 7l-3 3"/><path d="M20 17H9M9 17l3-3M9 17l3 3"/>',
    star: '<path d="M12 2.5l2.2 6.6 6.8.1-5.5 4.1 2 6.6L12 16l-5.5 3.9 2-6.6L3 9.2l6.8-.1z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 0 2 2h13M8 7h7"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
    layers: '<path d="M12 3 2.5 8 12 13l9.5-5z"/><path d="M2.5 12 12 17l9.5-5M2.5 16 12 21l9.5-5"/>',
    game: '<rect x="2.5" y="7" width="19" height="11" rx="4"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="16" cy="11.5" r=".9" fill="currentColor"/><circle cx="18.5" cy="13.5" r=".9" fill="currentColor"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    shuffle: '<path d="M4 7h3l10 10h3M20 17l-2-2M20 17l-2 2M4 17h3l3-3M14 7h3l3 0M20 7l-2-2M20 7l-2 2"/>',
  };
  const icon = (n) => h("span", { html: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICON[n] || ICON.star}</svg>`, "aria-hidden": "true", style: "display:inline-flex" });

  /* ================= styles (host tokens only: --acc, --card, --rule, --text, --muted, --ok, --no, --hl …) ================= */
  const CSS = `
.ag-hero .in{grid-template-columns:1fr;padding-top:30px;padding-bottom:30px}
.ag-hero .sub{max-width:62ch}
.ag-hero .eyebrow{font-size:1rem}
.ag-hero .btn,.ag-stage .btn,.ag-result .btn{font-size:1rem}
.ag-main .note{font-size:1rem}
.ag-hero .acts{margin-top:8px}
.ag-hero .btn,.ag-stage .btn,.ag-result .btn{min-height:44px}
.ag-main{padding:28px 0 8px}
.ag-choose{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:0 0 22px;padding:0;list-style:none}
.ag-choose li{display:flex;min-width:0}
.ag-card{flex:1;display:flex;flex-direction:column;align-items:flex-start;gap:8px;text-align:left;background:var(--card);color:var(--text);border:1.5px solid var(--rule);border-top:5px solid var(--acc);border-radius:var(--r);padding:16px 16px 14px;box-shadow:var(--sh);cursor:pointer;min-height:44px;font:inherit}
.ag-card:hover{border-color:var(--acc)}
.ag-card[aria-pressed="true"]{outline:3px solid var(--acc);outline-offset:0;border-color:var(--acc)}
.ag-card .ag-ico{display:inline-grid;place-items:center;width:40px;height:40px;border-radius:12px;background:var(--acc-soft);color:var(--acc)}
.ag-card .ag-ico .ic{width:1.5em;height:1.5em}
.ag-card h3{margin:0;font-size:1.2rem}
.ag-card p{margin:0;font-size:1rem;color:var(--muted)}
.ag-card .ag-go{margin-top:auto;font-weight:600;color:var(--acc);display:inline-flex;align-items:center;gap:6px;padding-top:4px}
.ag-card.off{cursor:default;opacity:.85;border-top-color:var(--rule)}
.ag-card.off .ag-ico{background:transparent;border:1.5px dashed var(--rule);color:var(--muted)}
.ag-choose.compact{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:18px}
.ag-choose.compact .ag-card{flex-direction:row;align-items:center;padding:8px 12px;border-top-width:1.5px;gap:10px}
.ag-choose.compact .ag-card .ag-ico{width:32px;height:32px;border-radius:8px}
.ag-choose.compact .ag-card .ag-ico .ic{width:1.2em;height:1.2em}
.ag-choose.compact .ag-card h3{font-size:1rem;font-family:var(--f-ui);font-weight:600}
.ag-choose.compact .ag-card p,.ag-choose.compact .ag-card .ag-go{display:none}
.ag-choose.compact .ag-card.off{display:none}
@media (max-width:720px){.ag-choose{grid-template-columns:1fr}.ag-choose.compact{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.ag-choose.compact .ag-card{flex-direction:column;align-items:center;text-align:center;padding:8px 6px;min-height:44px;gap:4px}.ag-choose.compact .ag-card h3{font-size:1rem;line-height:1.15}}
.ag-stage{background:var(--card);border:1px solid var(--rule);border-radius:var(--r);box-shadow:var(--sh);padding:18px 18px 20px;max-width:900px}
@media (max-width:600px){.ag-stage{padding:14px 12px 16px;border-radius:12px}}
.ag-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:6px}
.ag-head h2{font-size:clamp(1.5rem,3.5vw,1.9rem);margin:0}
.ag-head h2:focus-visible{outline:none} /* programmatic focus for screen readers only; it is not a control */
.ag-head .how{margin:2px 0 0;color:var(--muted);font-size:1rem;max-width:60ch}
.ag-status{min-height:1.6em;margin:10px 0 0;font-weight:600;color:var(--text)}
.ag-status.ok{color:var(--ok)}.ag-status.no{color:var(--no)}
.ag-bar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:14px}
.ag-bar .grow{flex:1}
.ag-chip{display:inline-flex;align-items:center;gap:6px;border:1.5px solid var(--rule);border-radius:999px;padding:4px 12px;font-size:1rem;color:var(--muted);background:transparent}
.ag-result{margin-top:16px;border:1.5px solid var(--acc);border-left:6px solid var(--glow);border-radius:12px;padding:12px 16px;background:var(--acc-soft)}
.ag-result .t{font-family:var(--f-book);font-size:1.3rem;font-weight:600;margin:0 0 2px}
.ag-result .m{margin:0 0 10px;font-size:1rem}
.ag-result .acts{display:flex;gap:10px;flex-wrap:wrap}
.ag-note{border:1.5px dashed var(--rule);border-radius:12px;padding:12px 16px;color:var(--muted);font-size:1rem;background:var(--card);max-width:900px}
/* ---- word hunt ---- */
.wh-clue{border:1.5px solid var(--rule);border-left:6px solid var(--acc);border-radius:12px;padding:12px 16px;margin:10px 0 14px;background:var(--page)}
.wh-clue .k{display:block;font-size:1rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--acc)}
.wh-clue .c{font-family:var(--f-book);font-size:1.15rem;margin:2px 0 4px}
.wh-clue .n{margin:0;color:var(--muted);font-size:1rem}
.wh-board{--tile:44px;--gap:4px;display:flex;flex-direction:column;gap:6px;margin:0 auto;align-items:center}
.wh-row{display:flex;flex-wrap:wrap;gap:var(--gap) 12px;justify-content:center;max-width:100%}
.wh-word{display:flex;gap:var(--gap)}
.wh-tile{position:relative;width:var(--tile);height:var(--tile);display:grid;place-items:center;border:2px solid var(--rule);border-radius:7px;font:600 clamp(16px,calc(var(--tile) * .5),22px)/1 var(--f-ui);text-transform:uppercase;background:var(--card);color:var(--text);transition:transform .12s}
.wh-tile.fixed{width:calc(var(--tile) * .55);border-style:dashed;color:var(--muted);text-transform:none}
.wh-tile.filled{border-color:var(--text)}
.wh-tile.correct{background:var(--ok);border-color:var(--ok);color:#fff}
.wh-tile.present{background:var(--hl);border-color:var(--hl-edge);color:var(--text)}
.wh-tile.absent{background:rgba(43,38,32,.14);border-color:transparent;color:var(--muted)}
.wh-tile .mk{position:absolute;right:1px;top:-1px;font-size:11px;line-height:1;font-weight:700}
.wh-tile.correct .mk{color:#fff}
.wh-row.cur .wh-tile.filled{transform:scale(1.04)}
.wh-row.shake{animation:wh-shake .35s}
@keyframes wh-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
.wh-kbd{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px;margin:16px auto 0;max-width:520px}
@media (max-width:600px){.wh-kbd{gap:4px;margin-left:-6px;margin-right:-6px;max-width:none}} /* keys stay ≥ 44 px wide on a 390 px phone */
.wh-key{min-height:46px;border:1.5px solid var(--rule);border-radius:8px;background:var(--card);color:var(--text);font:600 1rem var(--f-ui);text-transform:uppercase;cursor:pointer;position:relative;padding:0}
.wh-key:hover{border-color:var(--acc)}
.wh-key.wide{grid-column:span 2;text-transform:none;font-size:1rem}
.wh-key.enter{grid-column:1 / -1;background:var(--acc);border-color:var(--acc);color:#fff}
.wh-key.correct{background:var(--ok);border-color:var(--ok);color:#fff}
.wh-key.present{background:var(--hl);border-color:var(--hl-edge)}
.wh-key.absent{background:rgba(43,38,32,.14);border-color:transparent;color:var(--muted)}
.wh-key .mk{position:absolute;right:3px;top:1px;font-size:10px;line-height:1}
.wh-legend{display:flex;gap:14px;flex-wrap:wrap;margin:12px 0 0;padding:0;list-style:none;font-size:1rem;color:var(--muted)}
.wh-legend li{display:inline-flex;align-items:center;gap:6px}
.wh-legend .wh-tile{--tile:26px;width:26px;height:26px;font-size:13px;border-radius:5px}
.wh-legend .wh-tile .mk{font-size:9px;top:0;right:1px}
/* ---- connections ---- */
.cn-bands{display:flex;flex-direction:column;gap:8px;margin:12px 0 8px}
.cn-band{border-radius:12px;padding:10px 14px;border:1.5px solid var(--rule);color:#1F1C17}
.cn-band .g{display:flex;align-items:center;gap:8px;font-weight:700;font-size:1rem;margin:0 0 2px}
.cn-band .g .ix{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:rgba(0,0,0,.14);font-size:1rem}
.cn-band .w{margin:0;font-size:1rem}
.cn-band.g0{background:#DCE5F6}.cn-band.g1{background:#DDEFDD}.cn-band.g2{background:#FBE3A0}.cn-band.g3{background:#E9E0F3}
.cn-band.missed{opacity:.9;border-style:dashed}
.cn-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:8px}
.cn-tile{min-height:76px;border:2px solid var(--rule);border-radius:10px;background:var(--page);color:var(--text);font:600 1rem/1.25 var(--f-ui);padding:6px 6px;cursor:pointer;overflow-wrap:anywhere;text-align:center}
.cn-tile:hover{border-color:var(--acc)}
.cn-tile[aria-pressed="true"]{background:var(--text);color:var(--page);border-color:var(--text)}
.cn-tile.gone{display:none}
.cn-tile.bump{animation:cn-bump .3s}
@keyframes cn-bump{50%{transform:translateY(-5px)}}
@media (max-width:760px){.cn-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:520px){.cn-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cn-tile{min-height:60px}} /* whole words, never broken mid-word, on a 390 px phone */
.cn-dots{display:inline-flex;gap:6px;align-items:center}
.cn-dots i{width:14px;height:14px;border-radius:50%;background:var(--acc);display:inline-block;border:2px solid var(--acc)}
.cn-dots i.used{background:transparent;border-color:var(--rule)}
/* ---- match the meaning ---- */
.mm-wrap{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;margin-top:12px}
.mm-terms{position:sticky;top:var(--ag-top,70px);z-index:2;background:var(--card);padding-bottom:8px;border-bottom:1px solid var(--rule)}
@media (min-width:820px){.mm-wrap{grid-template-columns:minmax(0,.9fr) minmax(0,1.6fr);align-items:start}.mm-terms{border-bottom:0}}
.mm-h{font-size:1rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--acc);margin:0 0 8px}
.mm-chips{display:flex;flex-wrap:wrap;gap:8px}
.mm-term{min-height:44px;border:2px solid var(--rule);border-radius:999px;background:var(--card);color:var(--text);padding:6px 14px;font:600 1rem var(--f-ui);cursor:pointer;display:inline-flex;align-items:center;gap:6px}
.mm-term:hover{border-color:var(--acc)}
.mm-term[aria-pressed="true"]{background:var(--acc);color:#fff;border-color:var(--acc)}
.mm-term.done{background:var(--ok-soft);border-color:var(--ok);color:var(--text);cursor:default}
.mm-term.no,.mm-mean.no{border-color:var(--no);background:var(--no-soft)}
.mm-list{display:flex;flex-direction:column;gap:8px}
.mm-mean{min-height:44px;border:2px solid var(--rule);border-radius:12px;background:var(--page);color:var(--text);padding:10px 14px;font:400 1rem/1.5 var(--f-ui);cursor:pointer;text-align:left;display:flex;flex-direction:column;gap:4px}
.mm-mean:hover{border-color:var(--acc)}
.mm-mean[aria-pressed="true"]{border-color:var(--text);background:var(--card);box-shadow:inset 0 0 0 1px var(--text)}
.mm-mean.done{border-color:var(--ok);background:var(--ok-soft);cursor:default}
.mm-mean .lab{display:inline-flex;align-items:center;gap:6px;font-weight:700;color:var(--ok);font-size:1rem}
.mm-mean .lab:empty{display:none}
@media (prefers-reduced-motion:reduce){.wh-row.shake,.cn-tile.bump{animation:none}.wh-tile{transition:none}}
:root[data-calm="1"] .wh-row.shake,:root[data-calm="1"] .cn-tile.bump{animation:none}
:root[data-calm="1"] .wh-board{--gap:6px}
`;
  function injectStyle() { if (document.getElementById("astra-arcade-css")) return; const s = h("style", { id: "astra-arcade-css" }); s.textContent = CSS; document.head.append(s); }

  /* ================= glossary preparation ================= */
  /* Word hunt slots: letters are typed; spaces, hyphens and apostrophes are fixed. "current (I)" → "current". */
  function slotsFor(term) {
    let t = String(term || "").replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
    if (!t) return null;
    const words = t.split(" ").map((w) => Array.from(w).map((ch) => (isLetter(ch) ? { ch, letter: fold(ch) } : { ch, fixed: true })));
    const letters = words.flat().filter((s) => !s.fixed);
    const longest = Math.max(...words.map((w) => w.length));
    if (letters.length < 3 || letters.length > 30 || longest > 16) return null;
    if (words.some((w) => w.filter((s) => s.fixed).length > 2)) return null;
    return { display: t, words, letters: letters.map((s) => s.letter), n: letters.length, longest };
  }
  function chapterOf(u, g) { if (!g || !g.chapter) return null; return (u.chapters || []).find((c) => c.key === g.chapter) || null; }
  function readLink(u, g) {
    const c = chapterOf(u, g);
    return h("a", { class: "btn ghost small", href: link("ebook.html") + (c ? "#ch-" + c.key : "") }, icon("book"), c ? "Read chapter " + c.n + ": " + c.title : "Open the ebook");
  }
  /* Connections groups: the manifest's `connections`, else by chapter when ≥4 chapters each hold ≥4 glossary terms. */
  function connectionGroups(u) {
    const gl = u.glossary || [];
    const ok = (g) => g && typeof g.group === "string" && Array.isArray(g.terms) && g.terms.length === 4 && g.terms.every((t) => typeof t === "string" && t.trim());
    if (Array.isArray(u.connections) && u.connections.length === 4 && u.connections.every(ok)) {
      const all = u.connections.flatMap((g) => g.terms.map((t) => fold(t).trim()));
      if (new Set(all).size === 16) return u.connections.map((g) => ({ name: g.group, terms: g.terms.map((t) => t.trim()) }));
    }
    const by = {}; gl.forEach((g) => { if (g && g.chapter && g.term) (by[g.chapter] = by[g.chapter] || []).push(g.term); });
    const keys = (u.chapters || []).map((c) => c.key).filter((k) => (by[k] || []).length >= 4);
    if (keys.length < 4) return null;
    return shuffle(keys).slice(0, 4).map((k) => { const c = u.chapters.find((x) => x.key === k); return { name: c ? c.title : k, terms: shuffle(by[k]).slice(0, 4) }; });
  }

  /* ================= game 1: Word hunt ================= */
  function wordHunt(u, stage, api) {
    const gl = (u.glossary || []).map((g) => ({ g, s: slotsFor(g.term) })).filter((x) => x.s && x.g.means);
    let pool = shuffle(gl), round = 0;
    const host = h("div", { class: "wh" }); stage.append(host);
    if (!gl.length) { host.append(h("p", { class: "ag-note" }, "This unit's glossary has no words the word hunt can use yet.")); return; }
    function play() {
      if (!pool.length) { pool = shuffle(gl); }
      const { g, s } = pool.shift(); round++;
      const answer = s.letters; const N = s.n;
      let guesses = [], cur = [], over = false;
      const keyState = {};
      host.replaceChildren();
      const status = h("p", { class: "ag-status", role: "status", "aria-live": "polite" });
      const clue = h("div", { class: "wh-clue" }, h("span", { class: "k" }, "Clue"), h("p", { class: "c" }, g.means),
        h("p", { class: "n" }, plural(N, "letter") + (s.words.length > 1 ? " · " + plural(s.words.length, "word") : "") + " · 6 guesses"));
      const board = h("div", { class: "wh-board", role: "group", "aria-label": "Your guesses" });
      const rows = [];
      for (let r = 0; r < 6; r++) {
        const row = h("div", { class: "wh-row" + (r === 0 ? " cur" : ""), role: "group", "aria-label": "Guess " + (r + 1) }); const tiles = [];
        s.words.forEach((w) => { const we = h("span", { class: "wh-word" }); w.forEach((sl) => { const t = h("span", { class: "wh-tile" + (sl.fixed ? " fixed" : ""), "aria-hidden": sl.fixed ? "true" : null }, sl.fixed ? sl.ch : ""); if (!sl.fixed) tiles.push(t); we.append(t); }); row.append(we); });
        rows.push({ row, tiles }); board.append(row);
      }
      const sizeTiles = () => { const W = Math.max(200, host.clientWidth - 4); const gap = 4; const t = Math.max(22, Math.min(44, Math.floor((W - (s.longest - 1) * gap) / Math.max(s.longest, 5)))); board.style.setProperty("--tile", t + "px"); };
      const LET = "abcdefghijklmnopqrstuvwxyz".split("");
      const keys = {};
      const kbd = h("div", { class: "wh-kbd", role: "group", "aria-label": "Letter keys" });
      const onKey = (k) => {
        if (over) return;
        if (k === "enter") return submit();
        if (k === "back") { cur.pop(); paint(); return; }
        if (cur.length < N) { cur.push(k); paint(); }
      };
      LET.forEach((k) => { keys[k] = h("button", { type: "button", class: "wh-key", "data-k": k, "aria-label": k.toUpperCase(), onclick: () => onKey(k) }, k); kbd.append(keys[k]); });
      kbd.append(h("button", { type: "button", class: "wh-key wide", "data-k": "back", onclick: () => onKey("back"), "aria-label": "Delete the last letter" }, "⌫ Delete"), h("button", { type: "button", class: "wh-key wide enter", "data-k": "enter", onclick: () => onKey("enter"), "aria-label": "Enter: check this guess" }, "Enter ↵"));
      const legend = h("ul", { class: "wh-legend", "aria-label": "What the marks mean" },
        h("li", null, h("span", { class: "wh-tile correct", "aria-hidden": "true" }, "a", h("span", { class: "mk" }, "✓")), "✓ right place"),
        h("li", null, h("span", { class: "wh-tile present", "aria-hidden": "true" }, "a", h("span", { class: "mk" }, "↔")), "↔ in the word, other place"),
        h("li", null, h("span", { class: "wh-tile absent", "aria-hidden": "true" }, "a", h("span", { class: "mk" }, "×")), "× not in the word"));
      const bar = h("div", { class: "ag-bar" }, h("span", { class: "ag-chip" }, "Word " + round + " of " + gl.length), h("span", { class: "grow" }),
        h("button", { type: "button", class: "btn ghost small", onclick: () => finish(false, true) }, "Show the word"));
      const result = h("div", { class: "ag-result", hidden: true });
      host.append(clue, board, kbd, legend, status, bar, result);
      sizeTiles(); if (api.cleanup) api.cleanup(); window.addEventListener("resize", sizeTiles); api.cleanup = () => window.removeEventListener("resize", sizeTiles);
      function paint() {
        const r = rows[guesses.length]; if (!r) return;
        r.tiles.forEach((t, i) => { t.textContent = cur[i] || ""; t.classList.toggle("filled", i < cur.length); });
      }
      function evaluate(gs) {
        const res = Array(N).fill("absent"), cnt = {};
        for (let i = 0; i < N; i++) { if (gs[i] === answer[i]) res[i] = "correct"; else cnt[answer[i]] = (cnt[answer[i]] || 0) + 1; }
        for (let i = 0; i < N; i++) { if (res[i] !== "correct" && cnt[gs[i]] > 0) { res[i] = "present"; cnt[gs[i]]--; } }
        return res;
      }
      const MK = { correct: "✓", present: "↔", absent: "×" }, SAY = { correct: "right place", present: "in the word, other place", absent: "not in the word" };
      const RANK = { absent: 1, present: 2, correct: 3 };
      function submit() {
        if (over) return;
        const r = rows[guesses.length];
        if (cur.length < N) { announce(status, "Fill every tile first: " + plural(N, "letter") + "."); if (!noMotion()) { r.row.classList.remove("shake"); void r.row.offsetWidth; r.row.classList.add("shake"); } return; }
        const res = evaluate(cur);
        r.tiles.forEach((t, i) => { t.classList.add(res[i]); t.append(h("span", { class: "mk", "aria-hidden": "true" }, MK[res[i]])); t.setAttribute("aria-label", cur[i].toUpperCase() + ", " + SAY[res[i]]); });
        res.forEach((st, i) => { const k = cur[i]; if (!keyState[k] || RANK[st] > RANK[keyState[k]]) keyState[k] = st; });
        for (const k in keyState) { const b = keys[k]; if (!b) continue; b.classList.remove("correct", "present", "absent"); b.classList.add(keyState[k]); b.querySelectorAll(".mk").forEach((x) => x.remove()); b.append(h("span", { class: "mk", "aria-hidden": "true" }, MK[keyState[k]])); b.setAttribute("aria-label", k.toUpperCase() + ", " + SAY[keyState[k]]); }
        guesses.push(cur.slice()); r.row.classList.remove("cur");
        const won = res.every((x) => x === "correct");
        if (won) return finish(true);
        if (guesses.length >= 6) return finish(false);
        rows[guesses.length].row.classList.add("cur"); cur = [];
        const right = res.filter((x) => x === "correct").length, near = res.filter((x) => x === "present").length;
        announce(status, "Guess " + guesses.length + " of 6: " + plural(right, "letter") + " in the right place, " + near + " in the word but elsewhere.");
      }
      function finish(won, revealed) {
        over = true; kbd.querySelectorAll("button").forEach((b) => b.setAttribute("aria-disabled", "true")); bar.lastChild.disabled = true;
        status.classList.toggle("ok", won); status.classList.toggle("no", !won);
        announce(status, won ? "You found it in " + plural(guesses.length, "guess") + "." : revealed ? "Here is the word." : "Out of guesses — here is the word.");
        result.hidden = false; result.replaceChildren(h("p", { class: "t" }, g.term), h("p", { class: "m" }, g.means),
          h("div", { class: "acts" }, h("button", { type: "button", class: "btn", onclick: play }, pool.length ? "Next word" : "Start the words again"), readLink(u, g)));
        setTimeout(() => { const b = result.querySelector("button"); if (b) b.focus(); }, 30);
      }
      api.key = (e) => {
        if (over) return false;
        const k = e.key;
        if (k === "Enter") { onKey("enter"); return true; }
        if (k === "Backspace") { onKey("back"); return true; }
        if (k.length === 1 && isLetter(k)) { onKey(fold(k)); return true; }
        return false;
      };
      api.debug = () => ({ game: "word-hunt", term: g.term, answer: answer.join(""), display: s.display, guesses: guesses.length, over, type: (word) => { cur = Array.from(fold(word)).filter(isLetter).slice(0, N); paint(); submit(); } });
    }
    play();
  }

  /* ================= game 2: Connections ================= */
  function connections(u, stage, api, groups) {
    const host = h("div", { class: "cn" }); stage.append(host);
    function play() {
      host.replaceChildren();
      const G = groups.map((g, gi) => ({ ...g, gi }));
      let tiles = shuffle(G.flatMap((g) => g.terms.map((t) => ({ t, gi: g.gi }))));
      let selected = [], mistakes = 0, solved = [], over = false;
      const status = h("p", { class: "ag-status", role: "status", "aria-live": "polite" });
      const bands = h("div", { class: "cn-bands" });
      const grid = h("div", { class: "cn-grid", role: "group", "aria-label": "Sixteen words" });
      const dots = h("span", { class: "cn-dots", "aria-hidden": "true" }, [0, 1, 2, 3].map(() => h("i")));
      const dotsText = h("span", { class: "ag-chip" }, dots, h("span", null, "4 mistakes left"));
      const checkB = h("button", { type: "button", class: "btn", disabled: true, onclick: check }, "Check");
      const shuffleB = h("button", { type: "button", class: "btn ghost small", onclick: () => { tiles = shuffle(tiles); draw(); } }, icon("shuffle"), "Shuffle");
      const clearB = h("button", { type: "button", class: "btn ghost small", onclick: () => { selected = []; draw(); } }, "Deselect");
      const bar = h("div", { class: "ag-bar" }, dotsText, h("span", { class: "grow" }), shuffleB, clearB, checkB);
      const result = h("div", { class: "ag-result", hidden: true });
      host.append(bands, grid, bar, status, result);
      function draw() {
        grid.replaceChildren(...tiles.map((x) => h("button", { type: "button", class: "cn-tile", "aria-pressed": selected.indexOf(x) >= 0 ? "true" : "false", onclick: () => toggle(x) }, x.t)));
        checkB.disabled = over || selected.length !== 4; clearB.disabled = over || !selected.length; shuffleB.disabled = over;
      }
      function toggle(x) {
        if (over) return;
        const i = selected.indexOf(x);
        if (i >= 0) selected.splice(i, 1); else if (selected.length < 4) selected.push(x); else { announce(status, "You already have four. Deselect one first."); return; }
        draw();
      }
      function band(g, missed) {
        return h("div", { class: "cn-band g" + g.gi + (missed ? " missed" : ""), role: "group", "aria-label": (missed ? "Not found: " : "Found: ") + g.name },
          h("p", { class: "g" }, h("span", { class: "ix", "aria-hidden": "true" }, String(solved.length)), g.name, missed ? h("span", { class: "ag-chip", style: "margin-left:auto" }, "not found") : null), h("p", { class: "w" }, g.terms.join(" · ")));
      }
      function check() {
        if (over || selected.length !== 4) return;
        const counts = {}; selected.forEach((x) => { counts[x.gi] = (counts[x.gi] || 0) + 1; });
        const best = Math.max(...Object.values(counts));
        if (best === 4) {
          const g = G[selected[0].gi]; solved.push(g.gi); tiles = tiles.filter((x) => x.gi !== g.gi); selected = [];
          bands.append(band(g)); draw();
          if (!noMotion()) bands.lastChild.classList.add("bump");
          if (solved.length === 4) return finish(true);
          announce(status, "Yes — " + g.name + ". " + (4 - solved.length) + " to go."); status.className = "ag-status ok"; return;
        }
        mistakes++; dots.children[mistakes - 1].classList.add("used"); dotsText.lastChild.textContent = plural(4 - mistakes, "mistake") + " left";
        if (!noMotion()) grid.querySelectorAll('[aria-pressed="true"]').forEach((b) => b.classList.add("bump"));
        status.className = "ag-status no";
        if (mistakes >= 4) return finish(false);
        announce(status, (best === 3 ? "One away! Three of those belong together." : "Not a group.") + " " + plural(4 - mistakes, "mistake") + " left.");
      }
      function finish(won) {
        over = true; selected = []; draw();
        if (!won) G.filter((g) => solved.indexOf(g.gi) < 0).forEach((g) => { solved.push(g.gi); bands.append(band(g, true)); });
        status.className = "ag-status " + (won ? "ok" : "no");
        announce(status, won ? "You found all four groups." : "Out of guesses. Here are all four groups.");
        result.hidden = false; result.replaceChildren(h("p", { class: "t" }, won ? "All four groups found" : "The four groups"), h("p", { class: "m" }, "Each group is a set of words that belong together in this unit."),
          h("div", { class: "acts" }, h("button", { type: "button", class: "btn", onclick: () => { if (!u.connections) groups = connectionGroups(u) || groups; play(); } }, "Play again"), h("a", { class: "btn ghost small", href: link("ebook.html") }, icon("book"), "Open the ebook")));
        setTimeout(() => { const b = result.querySelector("button"); if (b) b.focus(); }, 30);
      }
      api.key = null;
      api.debug = () => ({ game: "connections", groups: G.map((g) => ({ name: g.name, terms: g.terms })), mistakes, solved: solved.slice(), over, pick: (terms) => { selected = tiles.filter((x) => terms.indexOf(x.t) >= 0).slice(0, 4); draw(); check(); } });
      draw(); announce(status, "Pick four words that belong together, then press Check.");
    }
    play();
  }

  /* ================= game 3: Match the meaning ================= */
  function matchMeaning(u, stage, api) {
    const gl = (u.glossary || []).filter((g) => g && g.term && g.means);
    const host = h("div", { class: "mm" }); stage.append(host);
    if (gl.length < 4) { host.append(h("p", { class: "ag-note" }, "Match the meaning needs at least four glossary words.")); return; }
    function play() {
      host.replaceChildren();
      const set = shuffle(gl).slice(0, Math.min(8, gl.length));
      const terms = shuffle(set), means = shuffle(set);
      let selT = null, selM = null, done = 0, t0 = null, over = false;
      const status = h("p", { class: "ag-status", role: "status", "aria-live": "polite" });
      const chips = h("div", { class: "mm-chips", role: "group", "aria-label": "Words" });
      const list = h("div", { class: "mm-list", role: "group", "aria-label": "Meanings" });
      const TB = new Map(), MB = new Map();
      terms.forEach((g) => { const b = h("button", { type: "button", class: "mm-term", "aria-pressed": "false", onclick: () => pick("t", g) }, g.term); TB.set(g, b); chips.append(b); });
      means.forEach((g) => { const b = h("button", { type: "button", class: "mm-mean", "aria-pressed": "false", onclick: () => pick("m", g) }, h("span", { class: "lab" }), h("span", null, g.means)); MB.set(g, b); list.append(b); });
      const result = h("div", { class: "ag-result", hidden: true });
      host.append(h("div", { class: "mm-wrap" }, h("div", { class: "mm-terms" }, h("p", { class: "mm-h" }, "Words"), chips), h("div", null, h("p", { class: "mm-h" }, "Meanings"), list)), status, result);
      announce(status, "Tap a word, then tap its meaning. " + set.length + " pairs to find.");
      function pick(kind, g) {
        if (over) return; if (t0 == null) t0 = Date.now();
        if (kind === "t") { if (TB.get(g).classList.contains("done")) return; selT = selT === g ? null : g; }
        else { if (MB.get(g).classList.contains("done")) return; selM = selM === g ? null : g; }
        TB.forEach((b, k) => b.setAttribute("aria-pressed", k === selT ? "true" : "false")); MB.forEach((b, k) => b.setAttribute("aria-pressed", k === selM ? "true" : "false"));
        if (selT && selM) {
          const tb = TB.get(selT), mb = MB.get(selM);
          if (selT === selM) {
            tb.classList.add("done"); tb.setAttribute("aria-pressed", "false"); tb.setAttribute("aria-disabled", "true"); tb.prepend("✓ ");
            mb.classList.add("done"); mb.setAttribute("aria-pressed", "false"); mb.setAttribute("aria-disabled", "true"); mb.firstChild.textContent = "✓ " + selT.term;
            done++; selT = selM = null; status.className = "ag-status ok";
            if (done === set.length) return finish();
            announce(status, "Matched. " + (set.length - done) + " to go.");
          } else {
            tb.classList.add("no"); mb.classList.add("no"); status.className = "ag-status no"; announce(status, "Not a match. Try again.");
            const a = tb, b = mb; setTimeout(() => { a.classList.remove("no"); b.classList.remove("no"); }, 600);
            selT = selM = null; TB.forEach((x) => x.setAttribute("aria-pressed", "false")); MB.forEach((x) => x.setAttribute("aria-pressed", "false"));
          }
        }
      }
      function finish() {
        over = true; const took = mmss(Date.now() - (t0 || Date.now()));
        announce(status, "All " + set.length + " matched. You took " + took + ".");
        result.hidden = false; result.replaceChildren(h("p", { class: "t" }, "All matched"), h("p", { class: "m" }, "You took " + took + ". Times are not saved — every go is a fresh start."),
          h("div", { class: "acts" }, h("button", { type: "button", class: "btn", onclick: play }, "Play again with new words"), h("a", { class: "btn ghost small", href: link("ebook.html") }, icon("book"), "Open the ebook")));
        setTimeout(() => { const b = result.querySelector("button"); if (b) b.focus(); }, 30);
      }
      api.key = null;
      api.debug = () => ({ game: "match", pairs: set.map((g) => [g.term, g.means]), done, over, pair: (term) => { const g = set.find((x) => x.term === term); if (g) { pick("t", g); pick("m", g); } } });
    }
    play();
  }

  /* ================= the page ================= */
  function render(u) {
    if (rendered) return; rendered = true;
    const m = u.meta || {}; const main = document.getElementById("main") || document.body.appendChild(h("main", { id: "main" }));
    injectStyle();
    document.title = m.title + " · Arcade · " + m.subject + " Y" + m.year + " · Ad Astra";
    /* the top bar's nav gains an Arcade entry (engine or stand-alone bar alike) */
    const nav = document.querySelector("header.topbar nav");
    if (nav && !nav.querySelector("[data-arcade]")) {
      nav.querySelectorAll("a[aria-current]").forEach((a) => a.removeAttribute("aria-current"));
      let a = Array.from(nav.querySelectorAll("a[href]")).find((x) => /(^|\/)arcade\.html(\?|#|$)/.test(x.getAttribute("href") || ""));
      if (!a) { a = h("a", { href: link("arcade.html") }, icon("game"), "Arcade"); const calm = nav.querySelector(".calmtog"); if (calm) nav.insertBefore(a, calm); else nav.append(a); }
      a.setAttribute("aria-current", "page"); a.setAttribute("data-arcade", "1");
    }
    const nGl = (u.glossary || []).length;
    const groups = connectionGroups(u);
    main.replaceChildren();
    main.append(h("section", { class: "hero chrome ag-hero", "aria-labelledby": "agt" }, h("div", { class: "in" }, h("div", null,
      h("p", { class: "eyebrow" }, [m.subject, "Year " + m.year, m.title].filter(Boolean).join(" · ")),
      h("h1", { id: "agt" }, "Key-word arcade"),
      h("p", { class: "sub" }, "Three quick games built from this unit's " + nGl + " key words. Nothing is scored or saved: play for the words, as often as you like."),
      h("div", { class: "acts" }, h("a", { class: "btn ghost small", href: link("unit.html") }, icon("grid"), "Unit at a glance"), h("a", { class: "btn ghost small", href: link("ebook.html") }, icon("book"), "Ebook"), h("a", { class: "btn ghost small", href: link("modules.html") }, icon("layers"), "Modules"))))));
    const GAMES = [
      { id: "hunt", name: "Word hunt", how: "Read the clue and guess the key word, one letter at a time. Six guesses.", ico: "hunt", run: wordHunt, on: nGl > 0 },
      { id: "connect", name: "Connections", how: "Sixteen words, four hidden groups. Find the four that belong together.", ico: "connect", run: (uu, st, ap) => connections(uu, st, ap, groups), on: !!groups },
      { id: "match", name: "Match the meaning", how: "Eight words, eight meanings, shuffled. Pair them up.", ico: "match", run: matchMeaning, on: nGl >= 4 },
    ];
    const chooser = h("ul", { class: "ag-choose", "aria-label": "Games" });
    const stageWrap = h("div", { class: "ag-stagewrap", hidden: true });
    const stage = h("div", { class: "ag-body" }), stageHead = h("div", { class: "ag-head" });
    stageWrap.append(h("div", { class: "ag-stage" }, stageHead, stage)); /* head + body share one card */
    const api = { key: null, debug: null, cleanup: null }; let current = null;
    const reset = () => { if (api.cleanup) { try { api.cleanup(); } catch (e) { } } api.key = null; api.debug = null; api.cleanup = null; };
    const cards = {};
    function open(g) {
      if (!g.on) return;
      reset(); current = g;
      Object.values(cards).forEach((c) => c.setAttribute("aria-pressed", c.dataset.id === g.id ? "true" : "false"));
      chooser.classList.add("compact"); stageWrap.hidden = false;
      stageHead.replaceChildren(h("div", null, h("h2", { id: "ag-game" }, g.name), h("p", { class: "how" }, g.how)), h("button", { type: "button", class: "btn ghost small", onclick: closeStage }, icon("back"), "All games"));
      stage.replaceChildren(); g.run(u, stage, api);
      try { history.replaceState(null, "", location.pathname + location.search + "#" + g.id); } catch (e) { }
      const top = stageWrap.getBoundingClientRect().top + window.scrollY - 70;
      if (top < window.scrollY || window.innerWidth < 720) { try { window.scrollTo({ top: Math.max(0, top), behavior: noMotion() ? "auto" : "smooth" }); } catch (e) { } }
      setTimeout(() => { const f = document.getElementById("ag-game"); if (f) { f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); } }, 40);
    }
    function closeStage() {
      reset(); current = null; stageWrap.hidden = true; chooser.classList.remove("compact");
      Object.values(cards).forEach((c) => c.setAttribute("aria-pressed", "false"));
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { }
      const first = chooser.querySelector(".ag-card"); if (first) first.focus();
    }
    GAMES.forEach((g) => {
      const card = h("button", { type: "button", class: "ag-card" + (g.on ? "" : " off"), "aria-pressed": "false", "data-id": g.id, "aria-disabled": g.on ? null : "true", onclick: () => open(g) },
        h("span", { class: "ag-ico" }, icon(g.ico)), h("h3", null, g.name), h("p", null, g.on ? g.how : "Needs the unit's word groups, which are not in this manifest yet. Ask your teacher."),
        g.on ? h("span", { class: "ag-go" }, "Play", icon("arrow")) : h("span", { class: "ag-chip" }, "Not available"));
      cards[g.id] = card; chooser.append(h("li", null, card));
    });
    main.append(h("section", { class: "sec ag-main", "aria-label": "Games" }, h("div", { class: "wrap" }, chooser, stageWrap,
      h("p", { class: "note", style: "margin-top:22px;max-width:70ch" }, "For parents and teachers: these games keep no scores, times or streaks and send nothing anywhere. They exist so pupils meet the unit's words often, in different ways — retrieval practice, not competition."))));
    /* keyboard: letters go to the word hunt when it is open and focus is not in a text field */
    document.addEventListener("keydown", (e) => {
      if (!current || !api.key || e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target; if (t && t.closest && t.closest("input,textarea,select,[contenteditable]")) return;
      if (t && (t.tagName === "BUTTON" || t.tagName === "A") && (e.key === "Enter" || e.key === " ")) return; /* a focused button or link keeps its own Enter/Space */
      if (api.key(e)) e.preventDefault();
    });
    const setTop = () => { const tb = document.querySelector("header.topbar"); document.documentElement.style.setProperty("--ag-top", ((tb ? tb.getBoundingClientRect().height : 0) + 6) + "px"); };
    setTop(); window.addEventListener("resize", setTop);
    const want = (location.hash || "").slice(1); const g0 = GAMES.find((g) => g.id === want && g.on); if (g0) open(g0);
    if (DEBUG) window.__arcadeDebug = { open: (id) => { const g = GAMES.find((x) => x.id === id); if (g) open(g); return !!(g && g.on); }, close: closeStage, state: () => (api.debug ? api.debug() : null), games: GAMES.map((g) => ({ id: g.id, on: g.on })), groups };
  }

  /* ================= stand-alone chrome (used only when the engine is absent or already booted) ================= */
  function ownTheme(m) {
    const r = document.documentElement, y = Math.max(7, Math.min(11, parseInt(m.year, 10) || 7));
    r.dataset.subject = ["english", "englit", "maths", "combined", "triple", "geography", "history"].indexOf(m.subjectKey) >= 0 ? m.subjectKey : "maths";
    r.dataset.year = String(y); r.dataset.dark = y >= 10 ? "1" : "0";
    if (!r.dataset.calm) { let calm = false; try { calm = !!(JSON.parse(localStorage.getItem("astra.prefs") || "{}").calm); } catch (e) { } r.dataset.calm = calm ? "1" : "0"; }
  }
  function ownTopbar(m) {
    const calmOn = () => document.documentElement.dataset.calm === "1";
    const calm = h("button", { type: "button", class: "calmtog", "aria-pressed": calmOn() ? "true" : "false", title: "Larger text, more space, cream page, no animation" }, h("span", { class: "sw", "aria-hidden": "true" }), "Calm reading");
    calm.addEventListener("click", () => { const v = !calmOn(); document.documentElement.dataset.calm = v ? "1" : "0"; calm.setAttribute("aria-pressed", v ? "true" : "false"); try { const p = JSON.parse(localStorage.getItem("astra.prefs") || "{}"); p.calm = v; localStorage.setItem("astra.prefs", JSON.stringify(p)); } catch (e) { } });
    const nav = h("nav", { "aria-label": "Unit pages" }, [["unit.html", "Unit", "grid"], ["ebook.html", "Ebook", "book"], ["modules.html", "Modules", "layers"]].map((l) => h("a", { href: link(l[0]) }, icon(l[2]), l[1])), calm);
    document.body.prepend(h("a", { class: "skip", href: "#main" }, "Skip to content"),
      h("header", { class: "topbar chrome" }, h("div", { class: "in" }, h("a", { class: "brand", href: "../index.html" }, icon("star"), "Ad Astra"), h("span", { class: "subj" }, m.subject + " · Year " + m.year + " · " + m.title), nav)));
  }
  function ownFooter(m) {
    document.body.append(h("footer", { class: "foot chrome" }, h("p", null, NOTICE), h("p", { style: "opacity:.85" }, [m.board, m.spec, m.specRef].filter(Boolean).join(" · ")), h("p", { class: "pilot" }, PILOT)));
  }
  function ownSlug() {
    const u = qs("u"); if (u != null) return SLUG_RE.test(u) ? u : null;
    const parts = location.pathname.split("/").filter(Boolean); let f = parts.length >= 2 ? parts[parts.length - 2] : ""; try { f = decodeURIComponent(f); } catch (e) { }
    return SLUG_RE.test(f) ? f : null;
  }
  function ownLoadUnit(slug) {
    window.ASTRA_UNITS = window.ASTRA_UNITS || {};
    const have = () => { const u = window.ASTRA_UNITS[slug]; return u && u.meta && Array.isArray(u.chapters) ? u : null; };
    if (have()) return Promise.resolve(have());
    return new Promise((res, rej) => { const s = document.createElement("script"); s.src = "../" + slug + "/manifest.js"; s.onload = () => { const u = have(); u ? res(u) : rej(new Error("The manifest for “" + slug + "” did not register a unit.")); }; s.onerror = () => rej(new Error("Could not load ../" + slug + "/manifest.js")); document.head.append(s); });
  }
  function ownFail(msg) {
    const main = document.getElementById("main") || document.body;
    main.replaceChildren(h("div", { class: "wrap", style: "padding:40px 16px" }, h("div", { class: "err", role: "alert" }, h("h2", null, "This page could not open"), h("p", null, msg), h("p", null, h("a", { href: "../index.html" }, "Back to all units")))));
  }
  async function standalone() {
    if (rendered) return;
    const slug = (A && A.slug) ? A.slug() : ownSlug();
    if (!slug) { if (!document.querySelector(".topbar")) { ownTheme({ year: 7, subjectKey: "maths" }); } ownFail("No unit was named. Open this page from a unit folder (<slug>/arcade.html) or add ?u=<slug> to the address."); return; }
    let u;
    try { u = await ((A && A.loadUnit) ? A.loadUnit(slug) : ownLoadUnit(slug)); } catch (e) { if (!document.querySelector(".err")) ownFail(e.message); return; }
    if (rendered) return;
    const m = u.meta;
    if (!document.querySelector(".topbar")) { if (A && A.theme) A.theme(m.subjectKey, m.year); else ownTheme(m); if (A && A.topbar) A.topbar(m, "Arcade"); else ownTopbar(m); }
    render(u);
    if (!document.querySelector("footer.foot")) { if (A && A.footer) A.footer(m); else ownFooter(m); }
  }

  /* ================= boot =================
     With the engine: register the page and let the engine's boot call it (it loads the manifest, sets the theme, top bar
     and footer). A watchdog covers the cases where the engine has already booted (and drew the unit page as its fallback)
     or never calls us: once the manifest is registered we wait a moment, then build the page ourselves. */
  if (A && A.pages) {
    A.pages.arcade = render; /* the engine's boot calls this directly, so its "Loading the key-word games…" note is never needed */
    if (typeof A.ready === "function") { A.ready(() => { if (!rendered) standalone(); }); } /* engine already booted (A.unit set) → runs at once; else after its boot */
    else { legacyWatch(); }
  } else {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", standalone); else standalone();
  }
  function legacyWatch() { /* an engine without Astra.ready: wait for the manifest, then give its boot a moment to call us */
    const slug = A.slug ? A.slug() : ownSlug(); const t0 = Date.now();
    const tick = () => {
      if (rendered) return;
      const have = slug && window.ASTRA_UNITS && window.ASTRA_UNITS[slug];
      if (have || document.querySelector("#main .err") || Date.now() - t0 > 8000) { setTimeout(() => { if (!rendered && !document.querySelector("#main .err")) standalone(); }, have ? 400 : 0); return; }
      setTimeout(tick, 150);
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(tick, 300)); else setTimeout(tick, 300);
  }
})();
