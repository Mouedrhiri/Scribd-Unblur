// ==UserScript==
// @name         Scribd Unblur - Ouedrhiri
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the popups and unblurs the text <3
// @author       Mohammed Ouedrhiri
// @match        http*://*.scribd.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  setInterval(function () {
    var elements = document.getElementsByClassName(
      "auto__doc_page_webpack_doc_page_blur_promo"
    );
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    var elements1 = document.getElementsByClassName("promo");
    while (elements1.length > 0) {
      elements1[0].parentNode.removeChild(elements1[0]);
    }
    var all = document.getElementsByClassName("a");
    for (var i = 0; i < all.length; i++) {
      all[i].style.color = "black";
    }
    var allL = document.getElementsByClassName("l");
    for (i = 0; i < allL.length; i++) {
      allL[i].style.color = "black";
    }
    var allImg = document.getElementsByClassName("absimg");
    for (i = 0; i < allImg.length; i++) {
      allImg[i].style.opacity = 1;
    }

    var list = document.getElementsByClassName("text_layer");
    for (let item of list) {
      item.style.textShadow = "";
    }
  }, 1000);
})();
