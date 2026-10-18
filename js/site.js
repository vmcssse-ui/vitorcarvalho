/* Dr Vitor Carvalho — site behaviour. No tracking, no network calls beyond
   same-origin checks that a sample file exists. */

/* =====================================================================
   CONFIG — TODO (Vitor): replace the two placeholder values below.
   - linkedin: your full public profile URL, e.g. https://www.linkedin.com/in/your-name/
   - email:    the professional address you want shown on the Contact page
   While a value is still the placeholder, the page shows it as plain text
   and no link is made.
   ===================================================================== */
var SITE_CONFIG = {
  linkedin: "https://www.linkedin.com/in/dr-vitor-carvalho-97133163/",
  email: "vmcssse@gmail.com"
};

(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");
  doc.classList.add("js");

  /* ---- Responsive navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", function (m) {
      if (m.matches) setOpen(false);
    });
  }

  /* ---- Contact details from SITE_CONFIG ---- */
  var isSet = function (key) {
    var v = SITE_CONFIG[key];
    return v && v !== "LINKEDIN_URL" && v !== "EMAIL_ADDRESS";
  };
  document.querySelectorAll("[data-cfg='linkedin']").forEach(function (el) {
    if (isSet("linkedin")) {
      el.setAttribute("href", SITE_CONFIG.linkedin);
      el.setAttribute("rel", "noopener");
      el.removeAttribute("aria-disabled");
    } else {
      el.setAttribute("href", "contact.html#linkedin");
      el.setAttribute("data-placeholder", "LINKEDIN_URL");
    }
  });
  document.querySelectorAll("[data-cfg='email']").forEach(function (el) {
    if (isSet("email")) {
      var a = document.createElement("a");
      a.href = "mailto:" + SITE_CONFIG.email;
      a.textContent = SITE_CONFIG.email;
      el.textContent = "";
      el.appendChild(a);
      el.classList.remove("muted");
    } else {
      el.textContent = "Email address to follow";
      el.classList.add("muted");
    }
  });

  /* ---- Samples page: render from the JSON block in samples.html ---- */
  var dataEl = document.getElementById("samples-data");
  if (dataEl) {
    var data;
    try { data = JSON.parse(dataEl.textContent); } catch (e) { data = null; }
    if (data) renderSamples(data);
  }

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  /* A link is shown as "in preparation" when the data says it is not ready,
     or when the site is served over http(s) and the file is not there yet. */
  function linkOrPending(item, cls) {
    if (item.ready === false) {
      return el("span", { class: "pending", text: item.label + " — in preparation" });
    }
    var a = el("a", { href: item.href, class: cls || "" , text: item.label });
    if (item.probe !== false && location.protocol.indexOf("http") === 0 && window.fetch) {
      fetch(item.href, { method: "HEAD", cache: "no-store" }).then(function (r) {
        if (!r.ok) a.replaceWith(el("span", { class: "pending", text: item.label + " — in preparation" }));
      }).catch(function () { /* leave the link as it is */ });
    }
    return a;
  }

  function renderSamples(d) {
    var units = document.getElementById("units");
    if (units && d.units) {
      units.textContent = "";
      d.units.forEach(function (u, i) {
        var plate = el("div", { class: "unit-plate" }, [
          el("img", { src: u.plate, alt: u.plateAlt, width: "1600", height: "900", loading: i < 1 ? "eager" : "lazy", decoding: "async" })
        ]);
        var links = el("div", { class: "links" }, u.links.map(function (l) { return linkOrPending(l); }));
        var body = el("div", { class: "unit-body" }, [
          el("p", { class: "tag", text: u.subject + " · " + u.year }),
          el("h3", { text: u.plateTitle }),
          el("p", { class: "unit-name" }, [document.createTextNode(u.unit + " "), el("span", { text: "· " + u.lessons })]),
          el("p", { text: u.summary }),
          el("p", { class: "review", text: u.status }),
          links
        ]);
        units.appendChild(el("article", { class: "unit", "aria-label": u.subject + ": " + u.unit }, [plate, body]));
      });
    }
    var lib = document.getElementById("library");
    if (lib && d.library) {
      lib.textContent = "";
      d.library.forEach(function (g) {
        var rows = g.units.map(function (u) {
          var base = "units/" + u.slug + "/";
          var links = el("span", { class: "lib-links" }, [
            el("a", { href: base + "unit.html", text: "Unit" }),
            el("a", { href: base + "ebook.html", text: "Ebook" }),
            el("a", { href: base + "modules.html", text: "Modules" }),
            el("a", { href: base + "arcade.html", text: "Arcade" }),
            u.decks ? el("a", { href: "decks.html#" + u.slug, text: "Decks" }) : null
          ]);
          var meta = u.year + " · " + u.lessons + " lessons · " + u.chapters + " chapters" + (u.l1 ? " · 6 home languages" : "");
          return el("li", { class: "lib-row" + (u.exemplar ? " exemplar" : "") }, [
            el("div", null, [
              el("span", { class: "lib-title", text: u.title }),
              u.exemplar ? el("span", { class: "lib-badge", text: "exemplar" }) : null,
              el("span", { class: "lib-meta", text: meta })
            ]),
            links
          ]);
        });
        lib.appendChild(el("section", { class: "lib-group", "aria-label": g.subject }, [
          el("h3", { text: g.subject }),
          el("ul", null, rows)
        ]));
      });
    }
    var eal = document.getElementById("eal");
    if (eal && d.eal) {
      eal.textContent = "";
      d.eal.forEach(function (L) {
        var links = L.units.map(function (u) {
          return el("a", { href: "units/" + u.slug + "/ebook.html?l1=" + L.code, text: u.title + " (Y" + u.year + ")" });
        });
        eal.appendChild(el("article", { class: "eal-card", lang: L.code, dir: L.dir }, [
          el("h3", { text: L.native }),
          el("p", { class: "eal-en", lang: "en", dir: "ltr", text: L.english + " · " + L.units.length + (L.units.length === 1 ? " book" : " books") + " · machine translation, awaiting a speaker's check" }),
          el("div", { class: "eal-links", lang: "en", dir: "ltr" }, links)
        ]));
      });
    }
    var live = document.getElementById("live");
    if (live && d.live) {
      live.textContent = "";
      d.live.forEach(function (w) {
        live.appendChild(el("a", { class: "card", href: w.href, rel: "noopener" }, [
          el("span", { class: "tag", text: w.kind }),
          el("h3", { text: w.title }),
          el("p", { text: w.summary }),
          el("span", { class: "host", text: w.href.replace(/^https?:\/\//, "").replace(/\/$/, "") })
        ]));
      });
    }
    var dl = document.getElementById("downloads");
    if (dl && d.downloads) {
      dl.textContent = "";
      d.downloads.forEach(function (f) {
        dl.appendChild(el("li", null, [
          el("div", null, [el("h3", { text: f.title }), el("p", { text: f.summary })]),
          el("div", { class: "links" }, [linkOrPending({ href: f.href, label: f.label, ready: f.ready, probe: f.probe })])
        ]));
      });
    }
  }
})();
