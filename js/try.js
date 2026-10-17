/* Dr Vitor Carvalho — "Try it" module on the home page.
   One task from the Maths unit, three ways in (Support / Core / Stretch).
   Reads window.ASTRA_UNITS["maths-directed"] (units/maths-directed/manifest.js) at run time:
   the manifest stays the single source of the content. No network, no storage;
   the "say why" line is kept in a variable on this page only.
   Draws the number line with window.AstraWidgets (units/assets/astra-widgets.js) when present. */
(function () {
  "use strict";

  var MINUS = "−";
  var UNIT_HREF = "units/maths-directed/unit.html";
  var host = document.querySelector("[data-try]");
  if (!host) return;

  var slug = host.getAttribute("data-unit") || "maths-directed";
  var chapterKey = host.getAttribute("data-chapter") || "adding";

  /* ---- Content: fail quietly, leaving the "Open the unit" link in place ---- */
  var unit = window.ASTRA_UNITS && window.ASTRA_UNITS[slug];
  var chapter = null, mod = null;
  if (unit && unit.chapters) {
    for (var i = 0; i < unit.chapters.length; i++) {
      if (unit.chapters[i].key === chapterKey) { chapter = unit.chapters[i]; break; }
    }
  }
  if (chapter && chapter.modules && chapter.modules.length) mod = chapter.modules[0];
  if (!mod || !mod.task || !mod.levels) return;

  var task = mod.task;
  var levels = mod.levels;
  var support = levels.support || {};
  var core = levels.core || {};
  var stretch = levels.stretch || {};
  var contexts = Array.isArray(mod.contexts) ? mod.contexts : [];

  /* The correct value. A numeric task carries `answer`; an mcq with numeric
     options points at the one correct option. */
  var answer = null, tolerance = 0;
  if (task.kind === "numeric" && typeof task.answer === "number") {
    answer = task.answer; tolerance = typeof task.tolerance === "number" ? task.tolerance : 0;
  } else if (task.kind === "mcq" && Array.isArray(task.options) && typeof task.answer === "number") {
    answer = parseNumber(task.options[task.answer]);
  }
  if (answer === null || !isFinite(answer)) return;

  /* ---- Helpers ---- */
  function parseNumber(text) {
    if (text == null) return null;
    var s = String(text).replace(/[−‒–]/g, "-").replace(/\s+/g, "").replace(/^\+/, "");
    if (!/^-?\d*\.?\d+$/.test(s)) return null;
    var n = Number(s);
    return isFinite(n) ? n : null;
  }
  function fmt(n) {
    var s = String(Math.round(n * 1e6) / 1e6);
    return s.charAt(0) === "-" ? MINUS + s.slice(1) : s;
  }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function reducedMotion() {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  }

  /* "What happened" for a wrong value: the matching misconception or option feedback. */
  function whatHappened(value) {
    var k;
    if (Array.isArray(task.misconceptions)) {
      for (k = 0; k < task.misconceptions.length; k++) {
        var m = task.misconceptions[k];
        if (typeof m.answer === "number" && Math.abs(m.answer - value) <= 1e-9 && m.says) return m.says;
      }
    }
    if (Array.isArray(task.options) && Array.isArray(task.feedback)) {
      for (k = 0; k < task.options.length; k++) {
        var v = parseNumber(task.options[k]);
        if (v !== null && Math.abs(v - value) <= 1e-9 && task.feedback[k]) return task.feedback[k];
      }
    }
    return null;
  }

  /* Number line: a simple "a + b" or "a − b" task gives a start and a target. */
  function lineSpec(q) {
    var m = String(q).match(/([−\-]?\s*\d+(?:\.\d+)?)\s*([+−\-])\s*\(?\s*([−\-]?\s*\d+(?:\.\d+)?)\s*\)?/);
    var start = null, target = null;
    if (m) {
      var a = parseNumber(m[1]), b = parseNumber(m[3]);
      if (a !== null && b !== null) {
        start = a;
        target = m[2] === "+" ? a + b : a - b;
        if (Math.abs(target - answer) > 1e-9) { start = null; target = null; }
      }
    }
    var lo = Math.min(0, start === null ? 0 : start, target === null ? 0 : target);
    var hi = Math.max(0, start === null ? 0 : start, target === null ? 0 : target);
    var reach = Math.max(Math.abs(lo), Math.abs(hi), 5);
    var bound = Math.ceil((reach + 1) / 5) * 5;
    var spec = { type: "numberline", min: -bound, max: bound, step: 1 };
    if (start !== null) {
      spec.start = start; spec.target = target;
      spec.prompt = "Start at " + fmt(start) + ". Drag the counter to show " + plainExpression(q) + ".";
    } else {
      spec.prompt = "The number line from " + fmt(-bound) + " to " + fmt(bound) + ". Zero sits in the middle.";
    }
    return spec;
  }
  function plainExpression(q) {
    var m = String(q).match(/[−\-]?\d+(?:\.\d+)?\s*[+−\-]\s*\(?\s*[−\-]?\d+(?:\.\d+)?\s*\)?/);
    return m ? m[0].replace(/-/g, MINUS).replace(/\s+/g, " ").trim() : "the task";
  }

  /* ---- Build ---- */
  var lanes = [
    { key: "support", label: "Support", sub: "Steps and a worked example" },
    { key: "core", label: "Core", sub: "The task; a hint on request" },
    { key: "stretch", label: "Stretch", sub: "The task, then further" }
  ];
  var current = "core";
  var contextIndex = -1;           /* -1 = the task as written */
  var kept = null;                 /* the one-line "say why", in memory only */
  var hintShown = false;

  var tablist = el("div", { class: "try-tabs", role: "tablist", "aria-label": "Way in" });
  var panels = {};
  var tabs = {};
  lanes.forEach(function (l) {
    var tab = el("button", {
      type: "button", role: "tab", id: "try-tab-" + l.key, class: "try-tab",
      "aria-selected": "false", "aria-controls": "try-panel-" + l.key, tabindex: "-1"
    }, [el("span", { class: "try-tab-label", text: l.label }), el("small", { text: l.sub })]);
    tab.addEventListener("click", function () { select(l.key, false); });
    tab.addEventListener("keydown", onTabKey);
    tabs[l.key] = tab;
    tablist.appendChild(tab);
    panels[l.key] = el("div", { role: "tabpanel", id: "try-panel-" + l.key, class: "try-panel", "aria-labelledby": "try-tab-" + l.key, tabindex: "0", hidden: "" });
  });

  function onTabKey(e) {
    var order = lanes.map(function (l) { return l.key; });
    var at = order.indexOf(current), to = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") to = order[(at + 1) % order.length];
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") to = order[(at + order.length - 1) % order.length];
    else if (e.key === "Home") to = order[0];
    else if (e.key === "End") to = order[order.length - 1];
    if (to) { e.preventDefault(); select(to, true); }
  }
  function select(key, focus) {
    current = key;
    lanes.forEach(function (l) {
      var on = l.key === key;
      tabs[l.key].setAttribute("aria-selected", on ? "true" : "false");
      tabs[l.key].setAttribute("tabindex", on ? "0" : "-1");
      if (on) panels[l.key].removeAttribute("hidden"); else panels[l.key].setAttribute("hidden", "");
    });
    host.setAttribute("data-lane", key);
    if (focus) tabs[key].focus();
  }

  /* Support: numbered steps, then the parallel worked example. */
  (function buildSupport() {
    var p = panels.support;
    p.appendChild(el("p", { class: "try-panel-kicker", text: "Support · the way in" }));
    if (Array.isArray(support.steps) && support.steps.length) {
      p.appendChild(el("ol", { class: "try-steps" }, support.steps.map(function (s) { return el("li", { text: s }); })));
    }
    var ex = support.example;
    if (ex && ex.q) {
      var exBox = el("div", { class: "try-example" }, [
        el("p", { class: "try-panel-kicker", text: "A parallel example" }),
        el("p", { class: "try-example-q", text: ex.q })
      ]);
      if (Array.isArray(ex.steps)) exBox.appendChild(el("ol", { class: "try-example-steps" }, ex.steps.map(function (s) { return el("li", { text: s }); })));
      if (ex.answer != null) exBox.appendChild(el("p", { class: "try-example-answer" }, [el("span", { text: "Answer " }), el("strong", { text: String(ex.answer) })]));
      p.appendChild(exBox);
    }
    p.appendChild(el("p", { class: "try-panel-foot", text: "Now the same kind of question, with the numbers from the task." }));
  })();

  /* Core: the task as set; a hint on request. */
  (function buildCore() {
    var p = panels.core;
    p.appendChild(el("p", { class: "try-panel-kicker", text: "Core · the task as set" }));
    p.appendChild(el("p", { text: "Most of the class starts here: the question, nothing added. A hint is there if you want it." }));
    if (core.hint) {
      var hint = el("p", { class: "try-hint", id: "try-hint", hidden: "", text: core.hint });
      var btn = el("button", { type: "button", class: "try-btn try-btn-ghost", "aria-expanded": "false", "aria-controls": "try-hint", text: "Show a hint" });
      btn.addEventListener("click", function () {
        hintShown = !hintShown;
        btn.setAttribute("aria-expanded", hintShown ? "true" : "false");
        btn.textContent = hintShown ? "Hide the hint" : "Show a hint";
        if (hintShown) hint.removeAttribute("hidden"); else hint.setAttribute("hidden", "");
      });
      p.appendChild(btn);
      p.appendChild(hint);
    }
    p.appendChild(el("p", { class: "try-panel-foot", text: "No fewer demands and no extra steps: the hint is the only thing added." }));
  })();

  /* Stretch: the task, then the extend prompt. */
  (function buildStretch() {
    var p = panels.stretch;
    p.appendChild(el("p", { class: "try-panel-kicker", text: "Stretch · and then" }));
    p.appendChild(el("p", { text: "Answer the task first. Then take it further:" }));
    if (stretch.extend) p.appendChild(el("p", { class: "try-extend", text: stretch.extend }));
    p.appendChild(el("p", { class: "try-panel-foot", text: "The extension asks for an argument, not a harder sum." }));
  })();

  /* ---- The task (identical in every lane) ---- */
  var taskCard = el("div", { class: "try-task" });
  var tag = [unit.meta && unit.meta.year ? "Year " + unit.meta.year : null, unit.meta && unit.meta.subject ? unit.meta.subject : null, chapter.title].filter(Boolean).join(" · ");
  taskCard.appendChild(el("p", { class: "try-tag", text: tag }));

  var chips = null;
  if (contexts.length) {
    chips = el("div", { class: "try-chips", role: "group", "aria-label": "Set the task in a context" });
    var all = [{ label: "As written", q: task.q }].concat(contexts);
    all.forEach(function (c, idx) {
      var b = el("button", { type: "button", class: "try-chip", "aria-pressed": idx === 0 ? "true" : "false", text: c.label });
      b.addEventListener("click", function () { setContext(idx - 1); });
      chips.appendChild(b);
    });
    taskCard.appendChild(chips);
  }

  var qEl = el("p", { class: "try-q", id: "try-q", text: task.q });
  taskCard.appendChild(qEl);

  var input = el("input", {
    type: "text", id: "try-answer", class: "try-input", inputmode: "numeric", autocomplete: "off",
    autocorrect: "off", spellcheck: "false", "aria-describedby": "try-q", placeholder: "Your answer"
  });
  var signBtn = el("button", { type: "button", class: "try-btn try-sign", "aria-label": "Change the sign of your answer", text: "+/" + MINUS });
  var checkBtn = el("button", { type: "submit", class: "try-btn try-check", text: "Check" });
  var form = el("form", { class: "try-form", novalidate: "" }, [
    el("label", { class: "visually-hidden", for: "try-answer", text: "Your answer" }),
    input, signBtn, checkBtn
  ]);
  taskCard.appendChild(form);

  var result = el("div", { class: "try-result", "aria-live": "polite", "aria-atomic": "true" });
  taskCard.appendChild(result);

  var lineHost = el("div", { class: "try-line" });
  taskCard.appendChild(lineHost);

  signBtn.addEventListener("click", function () {
    var v = input.value.replace(/\s+/g, "");
    if (/^[−\-]/.test(v)) input.value = v.slice(1);
    else input.value = MINUS + v;
    input.focus();
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); check(); });

  function setContext(idx) {
    contextIndex = idx;
    var q = idx < 0 ? task.q : (contexts[idx].q || task.q);
    qEl.textContent = q;
    if (chips) Array.prototype.forEach.call(chips.children, function (b, k) { b.setAttribute("aria-pressed", k === idx + 1 ? "true" : "false"); });
    input.value = "";
    clear(result);
    result.className = "try-result";
  }

  function check() {
    var value = parseNumber(input.value);
    clear(result);
    if (value === null) {
      result.className = "try-result is-note";
      result.appendChild(el("p", { text: "Type a number first. Use the +/" + MINUS + " button for a negative answer." }));
      input.focus();
      return;
    }
    if (Math.abs(value - answer) <= tolerance + 1e-9) {
      var why = (contextIndex >= 0 && contexts[contextIndex].why) || mod.why || "";
      result.className = "try-result is-correct";
      result.appendChild(el("p", { class: "try-verdict" }, [el("strong", { text: "Correct: " + fmt(answer) + "." }), " ", why]));
      /* "Say why that works": one line, kept in memory on this page only. */
      var sayInput = el("input", { type: "text", id: "try-say", class: "try-input try-say", autocomplete: "off", maxlength: "200", placeholder: "One sentence" });
      var keepBtn = el("button", { type: "button", class: "try-btn try-btn-ghost", text: "Keep" });
      var keptNote = el("p", { class: "try-kept", hidden: "" });
      if (mod.explain) sayInput.setAttribute("aria-describedby", "try-say-desc");
      var say = el("div", { class: "try-explain" }, [
        el("label", { for: "try-say", class: "try-explain-label", text: "Say why that works" }),
        mod.explain ? el("p", { id: "try-say-desc", class: "try-explain-desc", text: mod.explain }) : null,
        el("div", { class: "try-explain-row" }, [sayInput, keepBtn]),
        keptNote
      ]);
      if (kept) { sayInput.value = kept; keptNote.textContent = "Kept, on this page only. Nothing is sent or stored."; keptNote.removeAttribute("hidden"); }
      keepBtn.addEventListener("click", function () {
        var t = sayInput.value.trim();
        if (!t) { sayInput.focus(); return; }
        kept = t;
        keptNote.textContent = "Kept, on this page only. Nothing is sent or stored.";
        keptNote.removeAttribute("hidden");
      });
      result.appendChild(say);
      return;
    }
    var says = whatHappened(value);
    result.className = "try-result is-wrong";
    if (says) {
      result.appendChild(el("p", { class: "try-verdict" }, [el("strong", { text: "Not yet." }), " You answered " + fmt(value) + "."]));
      result.appendChild(el("p", { class: "try-kicker", text: "What happened" }));
      result.appendChild(el("p", { text: says }));
    } else {
      result.appendChild(el("p", { class: "try-verdict" }, [el("strong", { text: "Not yet." }), " You answered " + fmt(value) + "."]));
      result.appendChild(el("p", { text: mod.why || "" }));
    }
    result.appendChild(el("p", { class: "try-again", text: "Change your answer and check again." }));
  }

  /* ---- Assemble ---- */
  var laneCol = el("div", { class: "try-lane" }, lanes.map(function (l) { return panels[l.key]; }));
  var grid = el("div", { class: "try-grid" }, [laneCol, taskCard]);
  var caption = el("p", { class: "try-caption", text: "The task is identical in every lane. Only the way in changes." });
  var closing = el("p", { class: "try-close" }, [
    "Every pupil ends on the same question. Built from the department’s own Year 7 deck. ",
    el("a", { href: UNIT_HREF }, ["Open the full unit ", el("span", { "aria-hidden": "true", text: "→" })])
  ]);

  clear(host);
  host.appendChild(tablist);
  host.appendChild(caption);
  host.appendChild(grid);
  host.appendChild(closing);
  host.classList.add("is-ready");
  select(current, false);

  /* The number line, set to the task's numbers. */
  if (window.AstraWidgets && typeof window.AstraWidgets.render === "function") {
    try {
      var spec = lineSpec(task.q);
      lineHost.appendChild(el("p", { class: "try-kicker", text: spec.start != null ? "Show it on the line" : "The line" }));
      window.AstraWidgets.render(lineHost, spec, { calm: reducedMotion() });
    } catch (e) {
      lineHost.parentNode.removeChild(lineHost);
    }
  } else {
    lineHost.parentNode.removeChild(lineHost);
  }
})();
