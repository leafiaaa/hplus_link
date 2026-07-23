/*
 * i18n.js
 * Lightweight translation helper for the Hundred Plus links page.
 *
 * Usage:
 *   1. Tag any translatable text node with:  data-i18n="key"
 *   2. Tag any translatable attribute with:  data-i18n-attr="attrName:key"
 *      (multiple attrs on one element: "attr1:key1,attr2:key2")
 *   3. Call window.i18n.apply("en" | "tw" | "th") whenever the language
 *      changes (and once on page load for the default language).
 */
(function (window, document) {
  "use strict";

  var translations = {
    en: {
      pageTitle: "Hundred Plus — Links",
      selectLanguage: "Select language",
      language: "Language",
      heading: "Hundred Plus",
      tagline: "We do Hundred Plus Services",
      linkHundredPlus: "Hundred Plus Website",
      link101Form: "101Form Website",
      linkXninja: "xNinja AI Workhub — Hundred Plus",
      linkFacebook: "Facebook",
      linkLinkedin: "LinkedIn",
      linkYoutube: "Hundred Plus",
      linkTiktok: "Hundred Plus TH Tiktok",
    },
    tw: {
      pageTitle: "Hundred Plus — 連結",
      selectLanguage: "選擇語言",
      language: "語言",
      heading: "Hundred Plus",
      tagline: "專‧業‧來‧自‧加‧值‧的‧服‧務",
      linkHundredPlus: "Hundred Plus 官網",
      link101Form: "101Form 官網",
      linkXninja: "xNinja AI 智慧工作平台 — Hundred Plus",
      linkFacebook: "Facebook",
      linkLinkedin: "LinkedIn",
      linkYoutube: "Hundred Plus",
      linkTiktok: "Hundred Plus 泰國 Tiktok",
    },
    th: {
      pageTitle: "Hundred Plus — ลิงก์",
      selectLanguage: "เลือกภาษา",
      language: "ภาษา",
      heading: "Hundred Plus",
      tagline: "เราให้บริการ Hundred Plus",
      linkHundredPlus: "เว็บไซต์ Hundred Plus",
      link101Form: "เว็บไซต์ 101Form",
      linkXninja: "xNinja AI Workhub — Hundred Plus",
      linkFacebook: "Facebook",
      linkLinkedin: "LinkedIn",
      linkYoutube: "Hundred Plus",
      linkTiktok: "Hundred Plus TH Tiktok",
    },
  };

  var DEFAULT_LANG = "en";
  var currentLang = DEFAULT_LANG;

  function getDict(lang) {
    return translations[lang] || translations[DEFAULT_LANG];
  }

  function applyTextNodes(dict) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (el.tagName === "TITLE") {
          document.title = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }

  function applyAttrNodes(dict) {
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      spec.split(",").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = (parts[0] || "").trim();
        var key = (parts[1] || "").trim();
        if (attr && key && dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      });
    });
  }

  function apply(lang) {
    var dict = getDict(lang);
    currentLang = translations[lang] ? lang : DEFAULT_LANG;
    applyTextNodes(dict);
    applyAttrNodes(dict);
    document.documentElement.setAttribute("lang", currentLang);
  }

  window.i18n = {
    translations: translations,
    apply: apply,
    getCurrentLang: function () {
      return currentLang;
    },
  };
})(window, document);
