/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/scripts/glitchText.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function glitchText(targetElement) {
  // Находим первый текстовый узел
  var walker = document.createTreeWalker(targetElement, NodeFilter.SHOW_TEXT, {
    acceptNode: function acceptNode(node) {
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  var textNode = walker.nextNode();
  if (!textNode) return;

  // Сохраняем оригинальный текст, если он ещё не сохранён
  if (!targetElement._originalText) {
    targetElement._originalText = textNode.nodeValue;
  }
  var text = targetElement._originalText;
  var reversed = _toConsumableArray(text).reverse();
  var steps = text.length;
  var frames = [];
  for (var _index = 0; _index < steps; _index++) {
    var frame = _toConsumableArray(reversed);
    for (var i = 0; i <= _index; i++) {
      var movingChar = frame.pop();
      frame.splice(i, 0, movingChar);
    }
    for (var _i = 0; _i <= _index; _i++) {
      frame[_i] = text[_i];
    }
    frames.push(frame.join(''));
  }
  var index = 0;

  // Убираем старую анимацию, если была
  if (targetElement._glitchTimeouts) {
    targetElement._glitchTimeouts.forEach(clearTimeout);
  }
  targetElement._glitchTimeouts = [];
  function animate() {
    if (index < frames.length) {
      textNode.nodeValue = frames[index];
      var timeout = setTimeout(animate, 40);
      targetElement._glitchTimeouts.push(timeout);
      index++;
    } else {
      textNode.nodeValue = text;
    }
  }
  var start = setTimeout(animate, 100);
  targetElement._glitchTimeouts.push(start);
}
;// ./src/index.js


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.A_Back, .A_MenuButton, .A_Button').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      return glitchText(el);
    });
  });
});
var burgerButton = document.querySelector('.A_Burger');
var menuButtons = document.querySelectorAll('.C_MenuButtons')[1];
var searchBase = document.querySelector('.O_Search.Base');
var burgerIcon = document.querySelector('.Q_Burger');
var nav = document.querySelector('.O_NavBar');
burgerButton.addEventListener('click', function () {
  menuButtons.classList.toggle('Active');
  searchBase.classList.toggle('Active');
  burgerIcon.classList.toggle('Active');
  burgerButton.classList.toggle('Active');
  nav.classList.toggle('Active');
});
/******/ })()
;