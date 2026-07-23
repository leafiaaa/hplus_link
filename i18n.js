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
      linkXninja: "xNinja AI Workhub Website",
      linkFacebook: "Facebook",
      linkLinkedin: "LinkedIn",
      linkYoutube: "Youtube",
      linkTiktok: "TH Tiktok",
    },
    tw: {
      pageTitle: "Hundred Plus — 連結",
      selectLanguage: "選擇語言",
      language: "語言",
      heading: "Hundred Plus",
      tagline: "We do Hundred Plus Services",
      linkHundredPlus: "Hundred Plus 網站",
      link101Form: "101Form 網站",
      linkXninja: "xNinja AI 智慧工作平台 — Hundred Plus",
      linkFacebook: "Facebook",
      linkLinkedin: "LinkedIn",
      linkYoutube: "Youtube",
      linkTiktok: " 泰國 Tiktok",
    },
    th: {
      pageTitle: "Hundred Plus — ลิงก์",
      selectLanguage: "เลือกภาษา",
      language: "ภาษา",
      heading: "Hundred Plus",
      tagline: "We do Hundred Plus Services",
      linkHundredPlus: "เว็บไซต์ Hundred Plus",
      link101Form: "เว็บไซต์ 101Form",
      linkXninja: "เว็บไซต์ xNinja AI Workhub",
      linkFacebook: "Facebook",
      linkLinkedin: "LinkedIn",
      linkYoutube: "Youtube",
      linkTiktok: " TH Tiktok",
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
