/* © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved. */
/* astra-widgets.js — interactive learning objects for the Ad Astra ebook (schema astra/2, Section.widget).
 *
 *   window.AstraWidgets.render(containerEl, widgetSpec, { calm:boolean, voice?:{ say(text) } }) -> { destroy(), el, get(), set() }
 *
 *   widgetSpec.type = "numberline" | "circuit"   (see SCHEMA.md, "Section (new key) widget")
 *
 * Self-contained: one file, no dependencies, no network. Styles are injected once (<style id="astra-widgets-css">).
 * Colours come from the host page's CSS variables (--text, --muted, --card, --accent/--acc, --rule, --ok, --acc-soft)
 * with light/dark fallbacks. Calm mode (opts.calm, :root[data-calm="1"] or prefers-reduced-motion) removes all motion.
 * Works by mouse, touch (pointer events) and keyboard (native range input + visible buttons); no red, no buzzers.
 */
(function (global) {
  "use strict";

  var VERSION = "1.0.0";
  var NS = "http://www.w3.org/2000/svg";
  var MINUS = "−";
  var CSS_ID = "astra-widgets-css";
  var uidCounter = 0;

  /* ------------------------------------------------------------------ styles */
  var CSS = [
    ".aw{--aw-fb-text:#1F1C17;--aw-fb-muted:#4D473D;--aw-fb-card:#FFFFFF;--aw-fb-acc:#2E4A8C;--aw-fb-rule:rgba(43,38,32,.18);--aw-fb-ok:#1D6A33;--aw-fb-soft:rgba(46,74,140,.12);",
    "  --aw-text:var(--text,var(--aw-fb-text));--aw-muted:var(--muted,var(--aw-fb-muted));--aw-card:var(--card,var(--aw-fb-card));",
    "  --aw-acc:var(--accent,var(--acc,var(--aw-fb-acc)));--aw-rule:var(--rule,var(--aw-fb-rule));--aw-ok:var(--ok,var(--aw-fb-ok));--aw-soft:var(--acc-soft,var(--aw-fb-soft));",
    "  --aw-glow:#F4B942;--aw-font:var(--f-ui,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif);",
    "  font-family:var(--aw-font);color:var(--aw-text);max-width:100%;min-width:0;box-sizing:border-box;margin:12px 0;position:relative;line-height:1.4}",
    "@media (prefers-color-scheme:dark){.aw{--aw-fb-text:#ECE6D8;--aw-fb-muted:#B8B0A0;--aw-fb-card:#1E2230;--aw-fb-acc:#9DB8FF;--aw-fb-rule:rgba(236,230,216,.22);--aw-fb-ok:#86D29B;--aw-fb-soft:rgba(157,184,255,.2)}}",
    ".aw *,.aw *::before,.aw *::after{box-sizing:border-box}",
    ".aw .w-prompt{font-size:1rem;line-height:1.45;margin:0 0 8px;font-weight:600;color:var(--aw-text)}",
    ".aw .aw-stage{position:relative;background:var(--aw-card);border:1px solid var(--aw-rule);border-radius:12px;padding:6px;overflow:hidden}",
    ".aw .aw-stage svg{display:block;width:100%;height:auto;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;overflow:visible}",
    ".aw .aw-circuit-svg{max-width:440px;margin:0 auto}",
    ".aw .w-status{font-size:.95rem;line-height:1.45;margin:6px 0 0;min-height:1.4em;color:var(--aw-text)}",
    ".aw .w-status.is-done{color:var(--aw-ok);font-weight:600}",
    ".aw .aw-bar{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px;align-items:center}",
    ".aw .aw-group{display:inline-flex;flex-wrap:wrap;gap:3px;align-items:center;border:1px solid var(--aw-rule);border-radius:999px;padding:2px 3px 2px 9px}",
    ".aw .aw-group .aw-btn.aw-mini{padding:3px 8px;min-height:30px}",
    ".aw .aw-group .aw-glabel{font-size:.78rem;color:var(--aw-muted);margin-right:4px}",
    ".aw .aw-btn{font:inherit;font-family:var(--aw-font);font-size:.86rem;font-weight:600;min-height:40px;padding:6px 14px;border-radius:999px;border:1.5px solid var(--aw-acc);background:var(--aw-card);color:var(--aw-acc);cursor:pointer;display:inline-flex;align-items:center;gap:6px;line-height:1.15;touch-action:manipulation}",
    ".aw .aw-btn.aw-mini{min-height:32px;padding:3px 9px;font-size:.76rem}",
    ".aw .aw-btn[aria-checked='true'],.aw .aw-btn[aria-pressed='true']{background:var(--aw-acc);color:var(--aw-card)}",
    ".aw .aw-btn:hover{filter:brightness(1.06)}",
    ".aw .aw-btn:disabled{opacity:.45;cursor:default;filter:none}",
    ".aw :focus-visible{outline:3px solid var(--aw-acc);outline-offset:2px}",
    ".aw .aw-sr{position:absolute;left:8px;top:8px;width:1px;height:1px;opacity:0;margin:0;padding:0;border:0;overflow:hidden;pointer-events:none}",
    /* number line */
    ".aw-numberline .nl-line{stroke:var(--aw-text);stroke-width:2;fill:none;stroke-linecap:round}",
    ".aw-numberline .nl-tick{stroke:var(--aw-text);stroke-width:1.5}",
    ".aw-numberline .nl-tick.minor{stroke:var(--aw-muted);stroke-width:1}",
    ".aw-numberline .nl-tick.zero{stroke-width:3}",
    ".aw-numberline .nl-lbl{fill:var(--aw-text);font-size:12px;text-anchor:middle;font-variant-numeric:tabular-nums}",
    ".aw-numberline .nl-lbl.zero{font-weight:700;font-size:13px}",
    ".aw-numberline .nl-arrow{fill:var(--aw-text)}",
    ".aw-numberline .nl-hit{fill:transparent;cursor:grab}",
    ".aw-numberline .nl-counter{fill:var(--aw-acc);stroke:var(--aw-card);stroke-width:3;cursor:grab}",
    ".aw-numberline .nl-cgroup.is-target .nl-counter{fill:var(--aw-ok)}",
    ".aw-numberline .nl-cgroup{transition:transform .16s ease-out}",
    ".aw-numberline .nl-cgroup.is-focus .nl-ring{stroke:var(--aw-acc);stroke-width:3;fill:none}",
    ".aw-numberline .nl-ring{fill:none;stroke:none}",
    ".aw-numberline .nl-ctext{fill:var(--aw-card);font-size:11px;font-weight:700;text-anchor:middle;pointer-events:none}",
    ".aw-numberline .nl-ghost{fill:none;stroke:var(--aw-muted);stroke-width:2;stroke-dasharray:3 3}",
    ".aw-numberline .nl-ghostlbl{fill:var(--aw-muted);font-size:10px;text-anchor:middle;letter-spacing:.04em;text-transform:uppercase}",
    ".aw-numberline .nl-jump{fill:none;stroke:var(--aw-acc);stroke-width:2.5;stroke-linecap:round}",
    ".aw-numberline .nl-hop{fill:none;stroke:var(--aw-acc);stroke-width:2;stroke-linecap:round;opacity:.85}",
    ".aw-numberline .nl-jlbl{fill:var(--aw-acc);font-size:14px;font-weight:700;text-anchor:middle}",
    ".aw-numberline .nl-jlbl.small{font-size:12px;font-weight:600;fill:var(--aw-muted)}",
    ".aw-numberline .nl-jhead{fill:var(--aw-acc)}",
    ".aw-numberline .nl-tap{fill:var(--aw-acc);opacity:.9}",
    ".aw-numberline.is-dragging .nl-hit,.aw-numberline.is-dragging .nl-counter{cursor:grabbing}",
    /* circuit */
    ".aw-circuit .wire{stroke:var(--aw-text);stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round}",
    ".aw-circuit .wire.live{stroke:var(--aw-acc)}",
    ".aw-circuit .mask{fill:var(--aw-card);stroke:none}",
    ".aw-circuit .sym{stroke:var(--aw-text);stroke-width:2;fill:var(--aw-card)}",
    ".aw-circuit .sym.thin{stroke-width:1.6}",
    ".aw-circuit .sym.fillink{fill:var(--aw-text)}",
    ".aw-circuit .sym.dashed{stroke:var(--aw-muted);stroke-dasharray:3 3}",
    ".aw-circuit .plate{stroke:var(--aw-text);stroke-linecap:butt}",
    ".aw-circuit .dot{fill:var(--aw-text)}",
    ".aw-circuit .lbl{fill:var(--aw-muted);font-size:11px;text-anchor:middle}",
    ".aw-circuit .lbl.b{fill:var(--aw-text);font-weight:600}",
    ".aw-circuit .mlet{fill:var(--aw-text);font-size:13px;font-weight:700;text-anchor:middle}",
    ".aw-circuit .rd{fill:var(--aw-acc);font-size:12px;font-weight:700;text-anchor:middle;font-variant-numeric:tabular-nums}",
    ".aw-circuit .hitdisc{fill:var(--aw-soft);pointer-events:none}",
    ".aw-circuit .hit{fill:transparent;stroke:var(--aw-acc);stroke-opacity:.45;stroke-width:1.5;stroke-dasharray:3 3;cursor:pointer;pointer-events:all}",
    ".aw-circuit .hit:hover{stroke-opacity:.9}",
    ".aw-circuit .glow{pointer-events:none}",
    ".aw table.aw-table{width:100%;border-collapse:collapse;font-size:.76rem;margin-top:6px;font-variant-numeric:tabular-nums;color:var(--aw-text)}",
    ".aw .aw-table th,.aw .aw-table td{text-align:left;padding:2px 6px;border-bottom:1px solid var(--aw-rule);line-height:1.3}",
    ".aw .aw-table th{font-weight:600;color:var(--aw-muted);font-size:.7rem;letter-spacing:.05em;text-transform:uppercase}",
    ".aw .aw-table td.num,.aw .aw-table th.num{text-align:right;white-space:nowrap}",
    ".aw .aw-table tr.off td{color:var(--aw-muted)}",
    ".aw .aw-table tr.total td{font-weight:700;border-bottom:0;border-top:2px solid var(--aw-rule)}",
    ".aw .aw-vh{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
    /* calm / reduced motion: no transitions anywhere */
    ".aw[data-calm='1'] *,:root[data-calm='1'] .aw *{transition:none!important;animation:none!important}",
    "@media (prefers-reduced-motion:reduce){.aw *{transition:none!important;animation:none!important}}"
  ].join("\n");

  function injectCSS() {
    if (document.getElementById(CSS_ID)) return;
    var s = document.createElement("style");
    s.id = CSS_ID;
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ------------------------------------------------------------------ DOM helpers */
  function setAttrs(e, attrs) {
    if (!attrs) return;
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === "style" && typeof v === "object") { Object.keys(v).forEach(function (p) { e.style[p] = v[p]; }); }
      else if (k.indexOf("on") === 0 && typeof v === "function") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : String(v));
    });
  }
  function append(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { append(e, x); }); return; }
    if (c.nodeType) e.appendChild(c); else e.appendChild(document.createTextNode(String(c)));
  }
  function h(tag, attrs) { var e = document.createElement(tag); setAttrs(e, attrs); for (var i = 2; i < arguments.length; i++) append(e, arguments[i]); return e; }
  function s(tag, attrs) { var e = document.createElementNS(NS, tag); setAttrs(e, attrs); for (var i = 2; i < arguments.length; i++) append(e, arguments[i]); return e; }
  function clear(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function isNum(v) { return typeof v === "number" && isFinite(v); }
  function num(v, d) { return isNum(v) ? v : d; }

  /* ------------------------------------------------------------------ number formatting */
  function decimalsOf(step) { var t = String(step); var i = t.indexOf("."); return i < 0 ? 0 : t.length - i - 1; }
  function roundTo(v, d) { var r = Number(v.toFixed(d)); return Math.abs(r) < 1e-12 ? 0 : r; }
  function fmt(v, d) { d = d || 0; if (Math.abs(v) < 1e-12) v = 0; var t = Math.abs(v).toFixed(d); return (v < 0 ? MINUS : "") + t; }
  function spoken(v, d) { d = d || 0; if (Math.abs(v) < 1e-12) return "0"; return (v < 0 ? "negative " : "") + Math.abs(v).toFixed(d); }
  /* 2 significant figures, kept as a reading (trailing zero kept: 1 -> "1.0", 0.5 -> "0.50", 12 -> "12") */
  function sig2(x) {
    if (!isFinite(x)) return "—";
    if (Math.abs(x) < 1e-12) return "0";
    var p = Math.max(0, 1 - Math.floor(Math.log10(Math.abs(x))));
    var r = Number(x.toPrecision(2));
    /* toPrecision may round up a power of ten (0.095 -> 0.10): recompute decimals from the rounded value */
    if (Math.abs(r) >= 1e-12) p = Math.max(0, 1 - Math.floor(Math.log10(Math.abs(r))));
    return r.toFixed(p);
  }
  function trimNum(x) { if (!isFinite(x)) return "—"; var r = Number(x.toPrecision(4)); return String(r); }
  function fmtI(I) { if (!isFinite(I) || Math.abs(I) < 1e-12) return "0 A"; return Math.abs(I) < 0.1 ? sig2(I * 1000) + " mA" : sig2(I) + " A"; }
  function fmtV(V) { if (!isFinite(V) || Math.abs(V) < 1e-12) return "0 V"; return sig2(V) + " V"; }
  function fmtR(R) { return isFinite(R) ? trimNum(R) + " Ω" : "—"; }

  function isCalm(opts) {
    if (opts && opts.calm) return true;
    try {
      if (document.documentElement.getAttribute("data-calm") === "1") return true;
      if (global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    } catch (e) { /* ignore */ }
    return false;
  }

  /* ================================================================== WIDGET 1 — number line */
  function renderNumberline(root, spec, opts) {
    var min = num(spec.min, -10), max = num(spec.max, 10), step = num(spec.step, 1);
    if (!(step > 0)) step = 1;
    if (!(max > min)) max = min + 10 * step;
    var d = decimalsOf(step);
    var n = Math.round((max - min) / step) + 1;
    if (n > 401) { step = (max - min) / 400; d = Math.max(d, 2); n = 401; }
    var vals = [];
    for (var i = 0; i < n; i++) vals.push(roundTo(min + i * step, d));
    max = vals[n - 1];

    function snap(v) { var k = Math.round((v - min) / step); k = Math.max(0, Math.min(n - 1, k)); return vals[k]; }
    function idx(v) { return Math.max(0, Math.min(n - 1, Math.round((v - min) / step))); }

    var hasStart = isNum(spec.start), hasTarget = isNum(spec.target);
    var interactive = hasStart || hasTarget || spec.interactive === true;
    var mode = spec.show === "counters" ? "counters" : "jumps";
    var start = hasStart ? snap(spec.start) : null;                 /* jumps are drawn from here */
    var target = hasTarget ? snap(spec.target) : null;
    var origin = interactive ? (hasStart ? start : snap(0)) : null;  /* where the counter begins */
    var cur = origin;
    var reached = false;
    var uid = "awnl" + (++uidCounter);

    /* --- skeleton --- */
    if (spec.prompt) root.appendChild(h("p", { class: "w-prompt" }, spec.prompt));
    var stage = h("div", { class: "aw-stage" });
    var input = null;
    if (interactive) {
      input = h("input", {
        type: "range", class: "aw-sr", min: String(min), max: String(max), step: String(step), value: String(cur),
        "aria-label": "Counter on the number line" + (spec.prompt ? ". " + spec.prompt : ""),
        "aria-valuetext": spoken(cur, d)
      });
      stage.appendChild(input);
    }
    var svg = s("svg", { role: interactive ? "img" : "img", "aria-hidden": interactive ? "true" : null, "aria-label": interactive ? null : ("Number line from " + spoken(min, d) + " to " + spoken(max, d)), focusable: "false" });
    stage.appendChild(svg);
    root.appendChild(stage);

    var status = h("p", { class: "w-status", "aria-live": "polite" });
    var bar = null, btnL, btnR, btnReset;
    if (interactive) {
      bar = h("div", { class: "aw-bar" });
      btnL = h("button", { type: "button", class: "aw-btn aw-mini", "aria-label": "Move the counter left one step" }, "◀ Left");
      btnR = h("button", { type: "button", class: "aw-btn aw-mini", "aria-label": "Move the counter right one step" }, "Right ▶");
      bar.appendChild(btnL); bar.appendChild(btnR);
      if (origin != null) { btnReset = h("button", { type: "button", class: "aw-btn aw-mini" }, "Start again"); bar.appendChild(btnReset); }
      root.appendChild(bar);
    }
    root.appendChild(status);

    /* --- geometry (recomputed on resize) --- */
    var G = {}, maxChars = 1;
    var layers = {};
    function measure() {
      var w = stage.clientWidth - 16;
      if (!(w > 0)) w = 320;
      var W = Math.max(240, Math.round(w));
      var padL = 30, padR = 30;
      var usable = W - padL - padR;
      var ppt = usable / (n - 1);
      maxChars = Math.max(fmt(min, d).length, fmt(max, d).length);
      var need = Math.ceil((maxChars * 7.2 + 8) / ppt);
      var nice = [1, 2, 5, 10, 20, 25, 50, 100], every = need;
      for (var k = 0; k < nice.length; k++) if (nice[k] >= need) { every = nice[k]; break; }
      var iZero = vals.indexOf(0);
      var H = !interactive ? 74 : hasStart ? 128 : 100;
      G = { W: W, H: H, padL: padL, usable: usable, ppt: ppt, every: every, anchor: iZero >= 0 ? iZero : 0, lineY: !interactive ? 32 : hasStart ? 84 : 56 };
    }
    function xOf(v) { return G.padL + ((v - min) / (max - min)) * G.usable; }
    function vOfClientX(cx) {
      var r = svg.getBoundingClientRect();
      var x = (cx - r.left) * (G.W / (r.width || G.W));
      var k = Math.round((x - G.padL) / G.ppt);
      return vals[Math.max(0, Math.min(n - 1, k))];
    }

    function build() {
      measure();
      clear(svg);
      svg.setAttribute("viewBox", "0 0 " + G.W + " " + G.H);
      var y = G.lineY;
      var defs = s("defs", null,
        s("marker", { id: uid + "-head", viewBox: "0 0 10 10", refX: "7", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" },
          s("path", { d: "M0,0 L10,5 L0,10 z", class: "nl-jhead" })));
      svg.appendChild(defs);
      var base = s("g");
      base.appendChild(s("line", { class: "nl-line", x1: G.padL - 17, y1: y, x2: G.W - G.padL + 17, y2: y }));
      base.appendChild(s("path", { class: "nl-arrow", d: "M" + (G.padL - 24) + "," + y + " l9,-5 v10 z" }));
      base.appendChild(s("path", { class: "nl-arrow", d: "M" + (G.W - G.padL + 24) + "," + y + " l-9,-5 v10 z" }));
      for (var i = 0; i < n; i++) {
        var v = vals[i], x = xOf(v);
        var labelled = ((i - G.anchor) % G.every) === 0;
        var isZero = v === 0;
        var th = isZero ? 11 : labelled ? 7 : 4;
        base.appendChild(s("line", { class: "nl-tick" + (isZero ? " zero" : labelled ? "" : " minor"), x1: x, y1: y - th, x2: x, y2: y + th, "data-v": fmt(v, d) }));
        if (labelled) base.appendChild(s("text", { class: "nl-lbl" + (isZero ? " zero" : ""), x: x, y: y + 24, "data-v": String(v) }, fmt(v, d)));
      }
      svg.appendChild(base);
      layers.jumps = s("g", { class: "nl-jumps" });
      svg.appendChild(layers.jumps);
      if (interactive) {
        /* transparent hit band so a tap anywhere on the track moves the counter */
        svg.insertBefore(s("rect", { class: "nl-hit", x: 0, y: y - 34, width: G.W, height: 68 }), base);
        if (hasStart) {
          layers.ghost = s("g", null,
            s("circle", { class: "nl-ghost", cx: xOf(start), cy: y, r: 10 }),
            s("text", { class: "nl-ghostlbl", x: xOf(start), y: y + 38 }, "start"));
          svg.appendChild(layers.ghost);
        }
        var cr = Math.max(13, 5 + maxChars * 3.4);
        layers.counter = s("g", { class: "nl-cgroup" },
          s("circle", { class: "nl-hit", cx: 0, cy: y, r: Math.max(24, cr + 9) }),
          s("circle", { class: "nl-ring", cx: 0, cy: y, r: cr + 6 }),
          s("circle", { class: "nl-counter", cx: 0, cy: y, r: cr }),
          s("text", { class: "nl-ctext", x: 0, y: y + 4, "font-size": maxChars > 3 ? 10 : 11 }, fmt(cur, d)));
        svg.appendChild(layers.counter);
        layers.counter.style.transform = "translate(" + xOf(cur) + "px,0)";
      } else {
        svg.insertBefore(s("rect", { class: "nl-hit", x: 0, y: 0, width: G.W, height: G.H, style: { cursor: "pointer" } }), base);
        layers.tap = s("g");
        svg.appendChild(layers.tap);
      }
      update(true);
    }

    function arcPath(x1, x2, yBase, hgt) {
      var mid = (x1 + x2) / 2;
      return "M" + x1 + "," + yBase + " Q" + mid + "," + (yBase - hgt) + " " + x2 + "," + yBase;
    }

    function update(silent) {
      if (!interactive) return;
      var y = G.lineY;
      layers.counter.style.transform = "translate(" + xOf(cur) + "px,0)";
      layers.counter.querySelector(".nl-ctext").textContent = fmt(cur, d);
      var atTarget = hasTarget && cur === target;
      layers.counter.classList.toggle("is-target", atTarget);
      /* jumps */
      clear(layers.jumps);
      if (hasStart && cur !== start) {
        var diff = roundTo(cur - start, d);
        var sign = diff > 0 ? "+" : MINUS;
        var x1 = xOf(start), x2 = xOf(cur), yb = y - 21;
        var head = "url(#" + uid + "-head)";
        if (mode === "counters") {
          var steps = Math.round(Math.abs(diff) / step), dir = diff > 0 ? 1 : -1;
          for (var k = 0; k < steps; k++) {
            var a = xOf(roundTo(start + k * step * dir, d)), b = xOf(roundTo(start + (k + 1) * step * dir, d));
            layers.jumps.appendChild(s("path", { class: "nl-hop", d: arcPath(a, b, yb, 16), "marker-end": head }));
          }
          layers.jumps.appendChild(s("text", { class: "nl-jlbl", x: (x1 + x2) / 2, y: yb - 30 }, sign + fmt(Math.abs(diff), d)));
          layers.jumps.appendChild(s("text", { class: "nl-jlbl small", x: (x1 + x2) / 2, y: yb - 46 },
            steps + (steps === 1 ? " hop" : " hops") + " of " + sign + fmt(step, d)));
        } else {
          var hgt = Math.min(44, 22 + Math.abs(x2 - x1) * 0.12);
          layers.jumps.appendChild(s("path", { class: "nl-jump", d: arcPath(x1, x2, yb, hgt), "marker-end": head }));
          layers.jumps.appendChild(s("text", { class: "nl-jlbl", x: (x1 + x2) / 2, y: yb - hgt / 2 - 8 }, sign + fmt(Math.abs(diff), d)));
        }
      }
      /* input + buttons */
      input.value = String(cur);
      input.setAttribute("aria-valuetext", spoken(cur, d) + (atTarget ? ", that's it" : ""));
      btnL.disabled = cur === vals[0];
      btnR.disabled = cur === vals[n - 1];
      /* status */
      var text = "";
      if (hasStart && cur !== start) {
        var df = roundTo(cur - start, d), op = df > 0 ? "+" : MINUS, mag = fmt(Math.abs(df), d);
        if (atTarget) text = "That's it: " + fmt(start, d) + " " + op + " " + mag + " = " + fmt(cur, d) + ".";
        else text = fmt(start, d) + " → " + fmt(cur, d) + ": a jump of " + op + mag + "." + (hasTarget ? " Keep going." : "");
      } else if (atTarget) {
        text = "That's it: " + fmt(cur, d) + ".";
      } else if (cur === origin) {
        text = "The counter is at " + fmt(cur, d) + "." + (hasTarget && !silent ? " Keep going." : (silent ? " Drag it, tap the line, or use the arrow keys." : ""));
      } else {
        text = "The counter is at " + fmt(cur, d) + "." + (hasTarget ? " Keep going." : "");
      }
      status.textContent = text;
      status.classList.toggle("is-done", atTarget);
      if (atTarget && !reached) {
        reached = true;
        if (opts && opts.voice && typeof opts.voice.say === "function") { try { opts.voice.say(text); } catch (e) { /* ignore */ } }
      } else if (!atTarget) reached = false;
    }

    function setValue(v) { v = snap(v); if (v === cur) return; cur = v; update(false); }

    /* --- interaction --- */
    var dragging = false, pid = null;
    function onDown(e) {
      if (e.button != null && e.button !== 0) return;
      e.preventDefault();
      if (!interactive) { readonlyTap(e); return; }
      dragging = true; pid = e.pointerId;
      root.classList.add("is-dragging");
      try { svg.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ }
      try { input.focus({ preventScroll: true }); } catch (x) { input.focus(); }
      setValue(vOfClientX(e.clientX));
    }
    function onMove(e) { if (dragging && (pid == null || e.pointerId === pid)) { e.preventDefault(); setValue(vOfClientX(e.clientX)); } }
    function onUp(e) { if (dragging) { dragging = false; pid = null; root.classList.remove("is-dragging"); try { svg.releasePointerCapture(e.pointerId); } catch (x) { /* ignore */ } } }
    function readonlyTap(e) {
      var v = vOfClientX(e.clientX), y = G.lineY;
      clear(layers.tap);
      layers.tap.appendChild(s("circle", { class: "nl-tap", cx: xOf(v), cy: y, r: 7 }));
      var abs = fmt(Math.abs(v), d);
      status.textContent = v === 0 ? "That is zero." : "That is " + fmt(v, d) + ": " + abs + (v < 0 ? " below zero." : " above zero.");
    }
    svg.addEventListener("pointerdown", onDown);
    svg.addEventListener("pointermove", onMove);
    svg.addEventListener("pointerup", onUp);
    svg.addEventListener("pointercancel", onUp);
    svg.addEventListener("lostpointercapture", onUp);
    if (interactive) {
      input.addEventListener("input", function () { setValue(Number(input.value)); });
      input.addEventListener("focus", function () { layers.counter && layers.counter.classList.add("is-focus"); });
      input.addEventListener("blur", function () { layers.counter && layers.counter.classList.remove("is-focus"); });
      btnL.addEventListener("click", function () { setValue(vals[Math.max(0, idx(cur) - 1)]); });
      btnR.addEventListener("click", function () { setValue(vals[Math.min(n - 1, idx(cur) + 1)]); });
      if (btnReset) btnReset.addEventListener("click", function () { cur = origin; reached = false; update(true); input.focus({ preventScroll: true }); });
    }

    /* --- responsive --- */
    var ro = null, raf = 0, lastW = -1;
    function onResize() {
      if (raf) return;
      raf = (global.requestAnimationFrame || function (f) { return setTimeout(f, 16); })(function () {
        raf = 0; var w = stage.clientWidth; if (w !== lastW) { lastW = w; build(); }
      });
    }
    build(); lastW = stage.clientWidth;
    if (global.ResizeObserver) { ro = new ResizeObserver(onResize); ro.observe(stage); }
    else global.addEventListener("resize", onResize);

    return {
      get: function () { return cur; },
      set: function (v) { if (interactive && isNum(v)) setValue(v); },
      destroy: function () {
        if (ro) ro.disconnect(); else global.removeEventListener("resize", onResize);
        svg.removeEventListener("pointerdown", onDown); svg.removeEventListener("pointermove", onMove);
        svg.removeEventListener("pointerup", onUp); svg.removeEventListener("pointercancel", onUp);
      }
    };
  }

  /* ================================================================== WIDGET 2 — circuit */
  var KINDS = { lamp: 1, resistor: 1, ldr: 1, thermistor: 1 };
  var ENV = {
    ldr: { what: "Light", levels: [{ label: "Dark", mult: 8 }, { label: "Dim", mult: 3 }, { label: "Room", mult: 1 }, { label: "Bright", mult: 0.3 }] },
    thermistor: { what: "Temperature", levels: [{ label: "Cold", mult: 8 }, { label: "Cool", mult: 3 }, { label: "Room", mult: 1 }, { label: "Hot", mult: 0.3 }] }
  };
  var PRESETS = {
    "series-2-lamps": { title: "Two lamps in series", defaults: [{ kind: "lamp", r: 3 }, { kind: "lamp", r: 3 }], removable: true, voltmeter: null, parallel: false },
    "parallel-2-lamps": { title: "Two lamps in parallel", defaults: [{ kind: "lamp", r: 3 }, { kind: "lamp", r: 3 }], removable: false, voltmeter: null, parallel: true },
    "series-1-lamp-resistor": { title: "A lamp and a resistor in series", defaults: [{ kind: "lamp", r: 4 }, { kind: "resistor", r: 8 }], removable: false, voltmeter: 0, parallel: false },
    "potential-divider": { title: "Potential divider", defaults: [{ kind: "resistor", r: 10 }, { kind: "resistor", r: 20 }], removable: false, voltmeter: 1, parallel: false },
    "ammeter-voltmeter": { title: "Measuring resistance", defaults: [{ kind: "resistor", r: 10 }], removable: false, voltmeter: 0, parallel: false }
  };

  function normaliseComps(list, P) {
    var out = [];
    for (var i = 0; i < P.defaults.length; i++) {
      var given = Array.isArray(list) ? list[i] : null;
      var kind = given && KINDS[given.kind] ? given.kind : P.defaults[i].kind;
      var r = given && isNum(given.r) && given.r > 0 ? given.r : P.defaults[i].r;
      out.push({ kind: kind, r: r });
    }
    /* names */
    var counts = {}; out.forEach(function (c) { counts[c.kind] = (counts[c.kind] || 0) + 1; });
    var seen = {};
    out.forEach(function (c) {
      seen[c.kind] = (seen[c.kind] || 0) + 1;
      var base = c.kind === "ldr" ? "LDR" : c.kind.charAt(0).toUpperCase() + c.kind.slice(1);
      c.name = counts[c.kind] > 1 ? base + " " + seen[c.kind] : base;
      c.short = c.kind === "lamp" ? "L" + seen[c.kind] : c.kind === "resistor" ? "R" + (counts.resistor > 1 ? seen[c.kind] : "") : c.kind === "ldr" ? "LDR" : "Th";
    });
    return out;
  }
  function initialState(comps) {
    return { sw: { main: true, b1: true, b2: true }, removed: comps.map(function () { return false; }), level: comps.map(function () { return 2; }) };
  }
  function effectiveR(comps, state) {
    return comps.map(function (c, i) {
      var env = ENV[c.kind];
      var lv = state && state.level ? state.level[i] : 2;
      return env ? c.r * env.levels[lv == null ? 2 : lv].mult : c.r;
    });
  }

  /* The physics. Ideal cell (no internal resistance), ideal meters.
   * series:   R_total = sum R ; I = V / R_total ; V_k = I R_k ; any open switch or removed lamp -> I = 0 everywhere.
   * parallel: each closed branch k has V across it and I_k = V / R_k ; I_total = sum I_k ; 1/R_total = sum 1/R_k.  */
  function compute(presetKey, supply, components, state) {
    var P = PRESETS[presetKey];
    if (!P) throw new Error("Unknown circuit preset: " + presetKey);
    supply = isNum(supply) && supply > 0 ? supply : 6;
    var comps = normaliseComps(components, P);
    state = state || initialState(comps);
    var R = effectiveR(comps, state);
    var parts = [], Rt, I, open, why = "";
    if (P.parallel) {
      var mainClosed = state.sw.main !== false;
      var closed = comps.map(function (c, i) { return state.sw["b" + (i + 1)] !== false && !state.removed[i]; });
      var G = 0; closed.forEach(function (on, i) { if (on) G += 1 / R[i]; });
      Rt = G > 0 ? 1 / G : Infinity;
      open = !mainClosed || G === 0;
      I = open ? 0 : supply / Rt;
      parts = comps.map(function (c, i) {
        var on = !open && closed[i];
        var Ii = on ? supply / R[i] : 0;
        return { name: c.name, short: c.short, kind: c.kind, R: R[i], I: Ii, V: on ? supply : 0, P: Ii * Ii * R[i], on: on, branchClosed: closed[i] };
      });
      why = !mainClosed ? "main-open" : G === 0 ? "all-branches-open" : closed.every(Boolean) ? "closed" : "branch-open";
    } else {
      var gap = state.sw.main === false ? "main-open" : "";
      state.removed.forEach(function (rm, i) { if (rm && !gap) gap = "removed-" + i; });
      open = !!gap;
      Rt = R.reduce(function (a, b) { return a + b; }, 0);
      I = open ? 0 : supply / Rt;
      parts = comps.map(function (c, i) {
        return { name: c.name, short: c.short, kind: c.kind, R: R[i], I: I, V: I * R[i], P: I * I * R[i], on: !open && !state.removed[i], removed: !!state.removed[i] };
      });
      why = gap || "closed";
    }
    var volt = P.voltmeter == null ? null : parts[P.voltmeter].V;
    return { preset: presetKey, supply: supply, Rtotal: open && !P.parallel ? Infinity : Rt, Rparts: Rt, I: I, open: open, why: why, parts: parts, ammeter: I, voltmeter: volt, voltAcross: P.voltmeter, comps: comps };
  }
  /* brightness reference: the brightest lamp in the preset's all-closed, all-present, room-level state */
  function referencePower(presetKey, supply, comps) {
    var ref = compute(presetKey, supply, comps, initialState(comps));
    var m = 0; ref.parts.forEach(function (p) { if (p.kind === "lamp" && p.P > m) m = p.P; });
    return m;
  }

  function renderCircuit(root, spec, opts) {
    var key = PRESETS[spec.preset] ? spec.preset : null;
    if (!key) {
      root.appendChild(h("p", { class: "w-status", "aria-live": "polite" }, "This circuit preset is not available."));
      return { destroy: function () { } };
    }
    var P = PRESETS[key];
    var supply = isNum(spec.supply) && spec.supply > 0 ? spec.supply : 6;
    var comps = normaliseComps(spec.components, P);
    var state = initialState(comps);
    var Pref = referencePower(key, supply, comps);
    var uid = "awc" + (++uidCounter);
    var res = null;

    if (spec.prompt) root.appendChild(h("p", { class: "w-prompt" }, spec.prompt));
    var stage = h("div", { class: "aw-stage" });
    var svg = s("svg", { class: "aw-circuit-svg", viewBox: key === "parallel-2-lamps" ? "0 0 360 204" : "0 0 360 190", role: "img", focusable: "false", "aria-labelledby": uid + "-title" });
    var title = s("title", { id: uid + "-title" }, P.title + " circuit diagram");
    svg.appendChild(title);
    stage.appendChild(svg);
    root.appendChild(stage);
    var bar = h("div", { class: "aw-bar" });
    root.appendChild(bar);
    var table = h("table", { class: "aw-table" });
    root.appendChild(table);
    var status = h("p", { class: "w-status", "aria-live": "polite" });
    root.appendChild(status);

    /* ---------- SVG primitives (viewBox units) ---------- */
    function wire(g, pts, live) { g.appendChild(s("polyline", { class: "wire" + (live ? " live" : ""), points: pts.map(function (p) { return p.join(","); }).join(" ") })); }
    function dot(g, x, y) { g.appendChild(s("circle", { class: "dot", cx: x, cy: y, r: 3 })); }
    function cellSym(g, x, y, label) {
      g.appendChild(s("rect", { class: "mask", x: x - 10, y: y - 16, width: 20, height: 32 }));
      g.appendChild(s("line", { class: "plate", x1: x - 4, y1: y - 14, x2: x - 4, y2: y + 14, "stroke-width": 2 }));
      g.appendChild(s("line", { class: "plate", x1: x + 4, y1: y - 7, x2: x + 4, y2: y + 7, "stroke-width": 5 }));
      g.appendChild(s("text", { class: "lbl b", x: x, y: y - 21 }, label));
      g.appendChild(s("text", { class: "lbl", x: x - 14, y: y - 8, "font-size": 10 }, "+"));
    }
    var rings = [], glowG = null, hitG = null;
    function hit(g, x, y, r, act, label) {
      (hitG || g).appendChild(s("circle", { class: "hitdisc", cx: x, cy: y, r: r }));
      var c = s("circle", { class: "hit", cx: x, cy: y, r: r, "data-act": act });
      c.appendChild(s("title", null, label));
      c.addEventListener("click", function (e) { e.preventDefault(); act_(act); });
      rings.push(c);
    }
    function switchV(g, x, y, closed, act, label) { /* on a vertical wire */
      hit(g, x + 4, y, 24, act, label);
      g.appendChild(s("rect", { class: "mask", x: x - 3, y: y - 12, width: 6, height: 24 }));
      g.appendChild(s("circle", { class: "sym fillink thin", cx: x, cy: y - 12, r: 2.6 }));
      g.appendChild(s("circle", { class: "sym fillink thin", cx: x, cy: y + 12, r: 2.6 }));
      g.appendChild(s("line", { class: "wire", x1: x, y1: y + 12, x2: closed ? x : x + 13, y2: closed ? y - 12 : y - 7, "stroke-width": 2.4 }));
    }
    function switchH(g, x, y, closed, act, label) { /* on a horizontal wire; blade pivots at the left contact */
      hit(g, x, y, 22, act, label);
      g.appendChild(s("rect", { class: "mask", x: x - 12, y: y - 3, width: 24, height: 6 }));
      g.appendChild(s("circle", { class: "sym fillink thin", cx: x - 12, cy: y, r: 2.6 }));
      g.appendChild(s("circle", { class: "sym fillink thin", cx: x + 12, cy: y, r: 2.6 }));
      g.appendChild(s("line", { class: "wire", x1: x - 12, y1: y, x2: closed ? x + 12 : x + 7, y2: closed ? y : y - 13, "stroke-width": 2.4 }));
    }
    function lampSym(g, x, y, bright, removed, act, label) {
      if (act) hit(g, x, y, 24, act, label);
      if (!removed && bright > 0) (glowG || g).appendChild(s("circle", { class: "glow", cx: x, cy: y, r: 27, fill: "url(#" + uid + "-glow)", opacity: String(Math.min(1, bright)), "data-bright": bright.toFixed(3) }));
      if (removed) {
        g.appendChild(s("rect", { class: "mask", x: x - 13, y: y - 3, width: 26, height: 6 }));
        g.appendChild(s("circle", { class: "sym dashed", cx: x, cy: y, r: 12, "data-bright": "0" }));
      } else {
        g.appendChild(s("circle", { class: "sym", cx: x, cy: y, r: 12, "data-bright": bright.toFixed(3) }));
        g.appendChild(s("line", { class: "wire", x1: x - 8.5, y1: y - 8.5, x2: x + 8.5, y2: y + 8.5 }));
        g.appendChild(s("line", { class: "wire", x1: x - 8.5, y1: y + 8.5, x2: x + 8.5, y2: y - 8.5 }));
      }
    }
    function resistorSym(g, x, y) { g.appendChild(s("rect", { class: "sym", x: x - 18, y: y - 7, width: 36, height: 14 })); }
    function ldrSym(g, x, y) {
      resistorSym(g, x, y);
      g.appendChild(s("line", { class: "wire", x1: x - 24, y1: y - 26, x2: x - 12, y2: y - 12, "marker-end": "url(#" + uid + "-ah)" }));
      g.appendChild(s("line", { class: "wire", x1: x - 14, y1: y - 30, x2: x - 2, y2: y - 16, "marker-end": "url(#" + uid + "-ah)" }));
    }
    function thermistorSym(g, x, y) {
      resistorSym(g, x, y);
      g.appendChild(s("polyline", { class: "wire", points: (x - 26) + "," + (y + 12) + " " + (x - 17) + "," + (y + 12) + " " + (x + 12) + "," + (y - 13) }));
    }
    function compSym(g, c, x, y, part, act) {
      if (c.kind === "lamp") lampSym(g, x, y, Pref > 0 ? part.P / Pref : 0, !!part.removed, act, (part.removed ? "Put " : "Take out ") + c.name.toLowerCase() + (part.removed ? " back" : ""));
      else if (c.kind === "ldr") ldrSym(g, x, y);
      else if (c.kind === "thermistor") thermistorSym(g, x, y);
      else resistorSym(g, x, y);
    }
    function compLabel(g, c, x, y, R) { g.appendChild(s("text", { class: "lbl", x: x, y: y }, c.name + " · " + fmtR(R))); }
    function meter(g, x, y, letter, reading, readingY) {
      g.appendChild(s("circle", { class: "sym", cx: x, cy: y, r: 13 }));
      g.appendChild(s("text", { class: "mlet", x: x, y: y + 4.5 }, letter));
      if (reading != null) g.appendChild(s("text", { class: "rd", x: x, y: readingY, "data-meter": letter }, reading));
    }
    function voltmeter(g, x, y, hw, reading) { /* loop above a component on the bottom wire */
      var yv = y - 52;
      wire(g, [[x - hw, y], [x - hw, yv], [x - 13, yv]]);
      wire(g, [[x + 13, yv], [x + hw, yv], [x + hw, y]]);
      dot(g, x - hw, y); dot(g, x + hw, y);
      meter(g, x, yv, "V", reading, yv - 20);
    }

    /* ---------- the drawing ---------- */
    function draw() {
      res = compute(key, supply, comps, state);
      clear(svg); svg.appendChild(title);
      var defs = s("defs", null,
        s("radialGradient", { id: uid + "-glow" },
          s("stop", { offset: "0", "stop-color": "#F4B942", "stop-opacity": "0.95" }),
          s("stop", { offset: "0.45", "stop-color": "#F4B942", "stop-opacity": "0.55" }),
          s("stop", { offset: "1", "stop-color": "#F4B942", "stop-opacity": "0" })),
        s("marker", { id: uid + "-ah", viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto" },
          s("path", { d: "M0,0 L10,5 L0,10 z", fill: "currentColor", style: { color: "var(--aw-text)" } })));
      svg.appendChild(defs);
      hitG = s("g", { class: "hits" });
      svg.appendChild(hitG);
      glowG = s("g", { class: "glows" });
      svg.appendChild(glowG);
      var g = s("g");
      svg.appendChild(g);
      var L = 28, Rr = 332, T = 38, B = 150, live = !res.open;
      var A = res.ammeter;
      if (key === "parallel-2-lamps") {
        var N1 = 118, N2 = 318, y1 = 128, y2 = 172;
        wire(g, [[L, B], [L, T], [Rr, T], [Rr, B], [N2, B]], live);
        wire(g, [[L, B], [N1, B]], live);
        wire(g, [[N1, y1], [N1, y2]], false); wire(g, [[N2, y1], [N2, y2]], false);
        wire(g, [[N1, y1], [N2, y1]], res.parts[0].on); wire(g, [[N1, y2], [N2, y2]], res.parts[1].on);
        dot(g, N1, B); dot(g, N2, B);
        cellSym(g, 180, T, fmtV(supply));
        switchV(g, L, 94, state.sw.main, "sw:main", (state.sw.main ? "Open" : "Close") + " the main switch");
        meter(g, 72, B, "A", fmtI(A), B + 27);
        [y1, y2].forEach(function (yy, i) {
          var c = comps[i];
          switchH(g, 165, yy, state.sw["b" + (i + 1)], "sw:b" + (i + 1), (state.sw["b" + (i + 1)] ? "Open" : "Close") + " the switch in branch " + (i + 1));
          compSym(g, c, 236, yy, res.parts[i], null);
          compLabel(g, c, 236, yy + 27, res.parts[i].R);
        });
      } else {
        wire(g, [[L, B], [L, T], [Rr, T], [Rr, B], [L, B]], live);
        cellSym(g, 180, T, fmtV(supply));
        switchV(g, L, 94, state.sw.main, "sw:main", (state.sw.main ? "Open" : "Close") + " the switch");
        var xs;
        if (key === "series-2-lamps") xs = [88, 180, 272];
        else if (key === "series-1-lamp-resistor") xs = [88, 180, 272];
        else if (key === "potential-divider") xs = [null, 130, 250];
        else xs = [100, 230];
        if (xs[0] != null) meter(g, xs[0], B, "A", fmtI(A), B + 27);
        comps.forEach(function (c, i) {
          var x = xs[i + 1];
          if (P.voltmeter === i) voltmeter(g, x, B, c.kind === "lamp" ? 26 : 28, fmtV(res.voltmeter));
          compSym(g, c, x, B, res.parts[i], P.removable && c.kind === "lamp" ? "rm:" + i : null);
          compLabel(g, c, x, B + 27, res.parts[i].R);
        });
        if (key === "potential-divider") g.appendChild(s("text", { class: "lbl", x: xs[2], y: B - 85, "font-size": 10 }, "V out"));
      }
      rings.forEach(function (rg) { g.appendChild(rg); }); rings = [];
      drawBar(); drawTable(); status.textContent = describe();
    }

    /* ---------- controls (keyboard + screen-reader path; the SVG hits mirror them) ---------- */
    function swBtn(id, labelOn, labelOff, act) {
      var on = state.sw[id];
      return h("button", { type: "button", class: "aw-btn aw-mini", role: "switch", "aria-checked": on ? "true" : "false", "data-act": act, onclick: function () { act_(act); } }, on ? labelOn : labelOff);
    }
    function drawBar() {
      clear(bar);
      bar.appendChild(swBtn("main", key === "parallel-2-lamps" ? "Main: closed" : "Switch: closed", key === "parallel-2-lamps" ? "Main: open" : "Switch: open", "sw:main"));
      if (key === "parallel-2-lamps") {
        comps.forEach(function (c, i) { bar.appendChild(swBtn("b" + (i + 1), "Branch " + (i + 1) + ": closed", "Branch " + (i + 1) + ": open", "sw:b" + (i + 1))); });
      }
      if (P.removable) {
        comps.forEach(function (c, i) {
          if (c.kind !== "lamp") return;
          var rm = state.removed[i];
          bar.appendChild(h("button", { type: "button", class: "aw-btn aw-mini", role: "switch", "aria-checked": rm ? "false" : "true", "data-act": "rm:" + i, onclick: function () { act_("rm:" + i); } }, c.name + (rm ? ": out" : ": in")));
        });
      }
      comps.forEach(function (c, i) {
        var env = ENV[c.kind]; if (!env) return;
        var grp = h("div", { class: "aw-group", role: "group", "aria-label": env.what + " at the " + c.name });
        grp.appendChild(h("span", { class: "aw-glabel", "aria-hidden": "true" }, (c.kind === "thermistor" ? "Temp" : env.what) + ":"));
        env.levels.forEach(function (lv, k) {
          grp.appendChild(h("button", { type: "button", class: "aw-btn aw-mini", "aria-pressed": state.level[i] === k ? "true" : "false", "data-act": "lv:" + i + ":" + k, onclick: function () { act_("lv:" + i + ":" + k); } }, lv.label));
        });
        bar.appendChild(grp);
      });
    }
    function drawTable() {
      clear(table);
      table.appendChild(h("caption", { class: "aw-vh" }, "Readings for each component"));
      table.appendChild(h("thead", null, h("tr", null, h("th", { scope: "col" }, "Component"), h("th", { scope: "col", class: "num" }, "R"), h("th", { scope: "col", class: "num" }, "Current"), h("th", { scope: "col", class: "num" }, "p.d."))));
      var tb = h("tbody");
      res.parts.forEach(function (p, i) {
        tb.appendChild(h("tr", { class: p.on ? "" : "off", "data-row": i },
          h("td", null, p.name + (p.removed ? " (taken out)" : P.parallel && !p.branchClosed ? " (branch open)" : "")),
          h("td", { class: "num" }, fmtR(p.R)),
          h("td", { class: "num", "data-cell": "I" + i }, fmtI(p.I)),
          h("td", { class: "num", "data-cell": "V" + i }, fmtV(p.V))));
      });
      tb.appendChild(h("tr", { class: "total" },
        h("td", null, "Total"),
        h("td", { class: "num", "data-cell": "Rtotal" }, res.open && !P.parallel ? "— (open)" : fmtR(res.Rtotal)),
        h("td", { class: "num", "data-cell": "I" }, fmtI(res.I)),
        h("td", { class: "num", "data-cell": "Vsupply" }, fmtV(supply))));
      table.appendChild(tb);
    }

    function describe() {
      var p = res.parts, sup = fmtV(supply);
      if (key === "series-2-lamps") {
        if (res.why === "main-open") return "The switch is open, so the circuit is broken. No current flows and both lamps are off.";
        if (state.removed[0] && state.removed[1]) return "Both lamps are out of their holders. There is no complete path, so no current flows.";
        if (res.why.indexOf("removed-") === 0) { var k = Number(res.why.slice(8)); return p[k].name + " is out of its holder. That leaves a gap in the only path, so no current flows — and " + p[1 - k].name.toLowerCase() + " goes out too."; }
        var same = Math.abs(p[0].R - p[1].R) < 1e-9;
        return "The switch is closed. The same current, " + fmtI(res.I) + ", flows through both lamps one after the other. The " + sup + " is shared" + (same ? " equally: " + fmtV(p[0].V) + " across each lamp." : ": " + fmtV(p[0].V) + " across " + p[0].name.toLowerCase() + " and " + fmtV(p[1].V) + " across " + p[1].name.toLowerCase() + " — the bigger resistance takes the bigger share.");
      }
      if (key === "parallel-2-lamps") {
        if (res.why === "main-open") return "The main switch is open. No current leaves the cell, so both lamps are off.";
        if (res.why === "all-branches-open") return "Both branch switches are open. There is no complete path, so no current flows.";
        if (res.why === "branch-open") { var o = p[0].on ? 1 : 0, j = 1 - o; return "Branch " + (o + 1) + " is open, so " + p[o].name.toLowerCase() + " is off. " + p[j].name + " still has its own path to the cell, so it stays just as bright with " + fmtI(p[j].I) + " through it. The cell now supplies " + fmtI(res.I) + " in total."; }
        return "Both branches are closed. " + fmtI(res.I) + " leaves the cell and splits: " + fmtI(p[0].I) + " through " + p[0].name.toLowerCase() + " and " + fmtI(p[1].I) + " through " + p[1].name.toLowerCase() + ". Each lamp has the full " + sup + " across it.";
      }
      if (key === "series-1-lamp-resistor") {
        if (res.open) return "The switch is open: no current flows and the voltmeter reads 0 V.";
        return "A current of " + fmtI(res.I) + " flows through the " + p[0].name.toLowerCase() + " and the " + p[1].name.toLowerCase() + " in turn. The " + fmtR(p[1].R) + " " + p[1].name.toLowerCase() + " takes " + fmtV(p[1].V) + " and the " + p[0].name.toLowerCase() + " takes " + fmtV(p[0].V) + "; the two p.d.s add up to the " + sup + " supply.";
      }
      if (key === "potential-divider") {
        if (res.open) return "The switch is open: no current flows and the voltmeter reads 0 V.";
        var t = "The two resistances share the " + sup + " in proportion to their size. The voltmeter across " + p[1].name + " (" + fmtR(p[1].R) + " out of " + fmtR(res.Rtotal) + ") reads " + fmtV(p[1].V) + ".";
        comps.forEach(function (c, i) {
          var env = ENV[c.kind]; if (!env) return;
          var lv = env.levels[state.level[i]];
          if (lv.mult !== 1) t += " " + lv.label + ": the " + c.name + "'s resistance is " + (lv.mult > 1 ? "higher" : "lower") + " (" + fmtR(p[i].R) + "), so its share of the supply " + (lv.mult > 1 ? "rises" : "falls") + (i === 1 ? "" : " and V out " + (lv.mult > 1 ? "falls" : "rises")) + ".";
        });
        return t;
      }
      if (res.open) return "The switch is open: the ammeter reads 0 A and the voltmeter reads 0 V.";
      return "The ammeter, in series, reads " + fmtI(res.I) + ". The voltmeter, in parallel across the " + p[0].name.toLowerCase() + ", reads " + fmtV(res.voltmeter) + ". So R = V ÷ I = " + trimNum(res.voltmeter) + " ÷ " + trimNum(res.I) + " = " + fmtR(res.voltmeter / res.I) + ".";
    }

    function act_(act) {
      var m = act.split(":");
      if (m[0] === "sw") state.sw[m[1]] = !state.sw[m[1]];
      else if (m[0] === "rm") state.removed[Number(m[1])] = !state.removed[Number(m[1])];
      else if (m[0] === "lv") state.level[Number(m[1])] = Number(m[2]);
      else return;
      var focusAct = document.activeElement && document.activeElement.getAttribute ? document.activeElement.getAttribute("data-act") : null;
      draw();
      if (focusAct) { var b = bar.querySelector("[data-act='" + focusAct + "']"); if (b) b.focus({ preventScroll: true }); }
    }

    draw();
    return {
      get: function () { return res; },
      set: function (patch) {
        if (!patch) return;
        if (patch.sw) Object.keys(patch.sw).forEach(function (k) { state.sw[k] = !!patch.sw[k]; });
        if (Array.isArray(patch.removed)) patch.removed.forEach(function (v, i) { if (i < state.removed.length) state.removed[i] = !!v; });
        if (Array.isArray(patch.level)) patch.level.forEach(function (v, i) { if (i < state.level.length && v >= 0 && v <= 3) state.level[i] = v | 0; });
        draw();
      },
      destroy: function () { }
    };
  }

  /* ================================================================== self-test of the physics */
  function near(a, b) { return Math.abs(a - b) < 1e-9 || (a === b); }
  function _selfTestReport() {
    var out = [];
    function check(name, cond, got) { out.push({ name: name, pass: !!cond, got: got }); }
    var r, st;
    /* 1. series-2-lamps: 6 V, 3 Ω + 3 Ω */
    r = compute("series-2-lamps", 6, [{ kind: "lamp", r: 3 }, { kind: "lamp", r: 3 }]);
    check("series-2-lamps: R_total 6 Ω", near(r.Rtotal, 6), r.Rtotal);
    check("series-2-lamps: I = 1 A", near(r.I, 1), r.I);
    check("series-2-lamps: 3 V across each lamp", near(r.parts[0].V, 3) && near(r.parts[1].V, 3), [r.parts[0].V, r.parts[1].V]);
    check("series-2-lamps: P = 3 W each", near(r.parts[0].P, 3) && near(r.parts[1].P, 3), [r.parts[0].P, r.parts[1].P]);
    check("series-2-lamps: ammeter reads '1.0 A'", fmtI(r.I) === "1.0 A", fmtI(r.I));
    st = initialState(r.comps); st.removed[0] = true;
    r = compute("series-2-lamps", 6, null, st);
    check("series-2-lamps: lamp 1 removed -> I = 0, lamp 2 off", near(r.I, 0) && r.open && !r.parts[1].on, r.I);
    st = initialState(r.comps); st.sw.main = false;
    r = compute("series-2-lamps", 6, null, st);
    check("series-2-lamps: switch open -> I = 0", near(r.I, 0) && r.open, r.I);
    r = compute("series-2-lamps", 6, [{ kind: "lamp", r: 2 }, { kind: "lamp", r: 4 }]);
    check("series-2-lamps: 2 Ω + 4 Ω -> 1 A, 2 V and 4 V", near(r.I, 1) && near(r.parts[0].V, 2) && near(r.parts[1].V, 4), [r.I, r.parts[0].V, r.parts[1].V]);
    /* 2. parallel-2-lamps: 6 V, 3 Ω ‖ 3 Ω */
    r = compute("parallel-2-lamps", 6, [{ kind: "lamp", r: 3 }, { kind: "lamp", r: 3 }]);
    check("parallel-2-lamps: R_total 1.5 Ω", near(r.Rtotal, 1.5), r.Rtotal);
    check("parallel-2-lamps: I_total = 6/1.5 = 4 A", near(r.I, 4), r.I);
    check("parallel-2-lamps: 6/3 = 2 A in each branch", near(r.parts[0].I, 2) && near(r.parts[1].I, 2), [r.parts[0].I, r.parts[1].I]);
    check("parallel-2-lamps: 6 V across each lamp", near(r.parts[0].V, 6) && near(r.parts[1].V, 6), [r.parts[0].V, r.parts[1].V]);
    check("parallel-2-lamps: P = 12 W each", near(r.parts[0].P, 12) && near(r.parts[1].P, 12), [r.parts[0].P, r.parts[1].P]);
    st = initialState(r.comps); st.sw.b1 = false;
    r = compute("parallel-2-lamps", 6, null, st);
    check("parallel-2-lamps: branch 1 open -> R_total 3 Ω, I_total 2 A", near(r.Rtotal, 3) && near(r.I, 2), [r.Rtotal, r.I]);
    check("parallel-2-lamps: branch 1 open -> lamp 2 unchanged (2 A, 6 V, 12 W)", near(r.parts[1].I, 2) && near(r.parts[1].V, 6) && near(r.parts[1].P, 12) && r.parts[1].on && !r.parts[0].on, [r.parts[1].I, r.parts[1].V]);
    st = initialState(r.comps); st.sw.main = false;
    r = compute("parallel-2-lamps", 6, null, st);
    check("parallel-2-lamps: main open -> nothing flows", near(r.I, 0) && !r.parts[0].on && !r.parts[1].on, r.I);
    r = compute("parallel-2-lamps", 6, [{ kind: "lamp", r: 2 }, { kind: "lamp", r: 6 }]);
    check("parallel-2-lamps: 2 Ω ‖ 6 Ω -> 1.5 Ω, 4 A total, 3 A + 1 A", near(r.Rtotal, 1.5) && near(r.I, 4) && near(r.parts[0].I, 3) && near(r.parts[1].I, 1), [r.Rtotal, r.I, r.parts[0].I, r.parts[1].I]);
    /* 3. series-1-lamp-resistor: 6 V, lamp 4 Ω + resistor 8 Ω */
    r = compute("series-1-lamp-resistor", 6, [{ kind: "lamp", r: 4 }, { kind: "resistor", r: 8 }]);
    check("series-1-lamp-resistor: R_total 12 Ω, I 0.5 A", near(r.Rtotal, 12) && near(r.I, 0.5), [r.Rtotal, r.I]);
    check("series-1-lamp-resistor: 2 V lamp + 4 V resistor = 6 V", near(r.parts[0].V, 2) && near(r.parts[1].V, 4) && near(r.parts[0].V + r.parts[1].V, 6), [r.parts[0].V, r.parts[1].V]);
    check("series-1-lamp-resistor: voltmeter across lamp reads 2 V ('2.0 V')", near(r.voltmeter, 2) && fmtV(r.voltmeter) === "2.0 V", fmtV(r.voltmeter));
    check("series-1-lamp-resistor: ammeter '0.50 A'", fmtI(r.I) === "0.50 A", fmtI(r.I));
    /* 4. potential-divider: 6 V, 10 Ω + 20 Ω, V_out across 20 Ω */
    r = compute("potential-divider", 6, [{ kind: "resistor", r: 10 }, { kind: "resistor", r: 20 }]);
    check("potential-divider: I 0.2 A, V_out = 6 × 20/30 = 4 V", near(r.I, 0.2) && near(r.voltmeter, 4) && near(r.parts[0].V, 2), [r.I, r.voltmeter]);
    r = compute("potential-divider", 6, [{ kind: "ldr", r: 10 }, { kind: "resistor", r: 20 }]);
    st = initialState(r.comps); st.level[0] = 0; /* Dark: ×8 -> 80 Ω */
    r = compute("potential-divider", 6, [{ kind: "ldr", r: 10 }, { kind: "resistor", r: 20 }], st);
    check("potential-divider (LDR dark, 80 Ω + 20 Ω): I 0.06 A, V_out 1.2 V", near(r.I, 0.06) && near(r.voltmeter, 1.2), [r.I, r.voltmeter]);
    st.level[0] = 3; /* Bright: ×0.3 -> 3 Ω */
    r = compute("potential-divider", 6, [{ kind: "ldr", r: 10 }, { kind: "resistor", r: 20 }], st);
    check("potential-divider (LDR bright, 3 Ω + 20 Ω): V_out = 6 × 20/23", near(r.voltmeter, 6 * 20 / 23), r.voltmeter);
    r = compute("potential-divider", 9, [{ kind: "resistor", r: 1000 }, { kind: "thermistor", r: 2000 }]);
    check("potential-divider (1 kΩ + 2 kΩ thermistor at 9 V): I 3 mA, V_out 6 V", near(r.I, 0.003) && near(r.voltmeter, 6) && fmtI(r.I) === "3.0 mA", [r.I, r.voltmeter, fmtI(r.I)]);
    /* 5. ammeter-voltmeter: 6 V, 10 Ω */
    r = compute("ammeter-voltmeter", 6, [{ kind: "resistor", r: 10 }]);
    check("ammeter-voltmeter: I 0.6 A, V 6 V, R = V/I = 10 Ω", near(r.I, 0.6) && near(r.voltmeter, 6) && near(r.voltmeter / r.I, 10), [r.I, r.voltmeter]);
    check("ammeter-voltmeter: readings '0.60 A' and '6.0 V'", fmtI(r.I) === "0.60 A" && fmtV(r.voltmeter) === "6.0 V", [fmtI(r.I), fmtV(r.voltmeter)]);
    st = initialState(r.comps); st.sw.main = false;
    r = compute("ammeter-voltmeter", 6, null, st);
    check("ammeter-voltmeter: switch open -> 0 A, 0 V", near(r.I, 0) && near(r.voltmeter, 0), [r.I, r.voltmeter]);
    /* formatting */
    check("sig2 formatting", sig2(1) === "1.0" && sig2(0.5) === "0.50" && sig2(2) === "2.0" && sig2(2 / 3) === "0.67" && sig2(12) === "12" && sig2(0.095) === "0.095" && sig2(0.0995) === "0.10", [sig2(1), sig2(0.5), sig2(2 / 3), sig2(12), sig2(0.095), sig2(0.0995)]);
    check("minus sign formatting", fmt(-3) === MINUS + "3" && fmt(0) === "0" && fmt(2.5, 1) === "2.5", [fmt(-3), fmt(0)]);
    return out;
  }
  function _selfTest() {
    var rep = _selfTestReport();
    var fails = rep.filter(function (r) { return !r.pass; });
    if (fails.length && global.console) console.warn("AstraWidgets self-test failures:", fails);
    return fails.length === 0;
  }

  /* ================================================================== public API */
  var IMPL = { numberline: renderNumberline, circuit: renderCircuit };

  function render(container, spec, opts) {
    if (!container || typeof container.appendChild !== "function") throw new Error("AstraWidgets.render: a container element is required");
    injectCSS();
    opts = opts || {}; spec = spec || {};
    var type = typeof spec.type === "string" ? spec.type : "unknown";
    var root = h("div", { class: "aw aw-" + type.replace(/[^a-z0-9-]/gi, ""), "data-widget": type, "data-calm": isCalm(opts) ? "1" : "0" });
    container.appendChild(root);
    var impl = IMPL[type];
    var inst = {};
    if (!impl) {
      root.appendChild(h("p", { class: "w-status", "aria-live": "polite" }, "This activity cannot be shown here."));
    } else {
      try { inst = impl(root, spec, opts) || {}; }
      catch (err) {
        clear(root);
        root.appendChild(h("p", { class: "w-status", "aria-live": "polite" }, "This activity could not be drawn."));
        if (global.console) console.error("AstraWidgets:", err);
      }
    }
    return {
      el: root,
      get: inst.get || function () { return null; },
      set: inst.set || function () { },
      destroy: function () {
        try { if (inst.destroy) inst.destroy(); } catch (e) { /* ignore */ }
        if (root.parentNode) root.parentNode.removeChild(root);
      }
    };
  }

  global.AstraWidgets = {
    version: VERSION,
    render: render,
    types: Object.keys(IMPL),
    presets: Object.keys(PRESETS),
    compute: compute,
    format: { current: fmtI, voltage: fmtV, resistance: fmtR, sig2: sig2, number: fmt },
    _selfTest: _selfTest,
    _selfTestReport: _selfTestReport
  };
})(typeof window !== "undefined" ? window : this);
