/******/ (() => { // webpackBootstrap
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener('DOMContentLoaded', function () {
  var filterContainer = document.querySelector('.C_FilterButtons');
  var filterButtons = filterContainer.querySelectorAll('.A_Button');
  var resetButton = document.querySelector('.A_Back');
  var cards = document.querySelectorAll('.M_GalleryCard');
  var activeFilters = new Set();
  updateCards(); // Инициализация при загрузке
  function updateCards() {
    if (activeFilters.size === 0) {
      cards.forEach(function (card) {
        return card.classList.remove('Hidden');
      });
    } else {
      cards.forEach(function (card) {
        console.log('hi');
        var categories = card.dataset.category.split(' ');
        var isVisible = _toConsumableArray(activeFilters).some(function (filter) {
          return categories.includes(filter);
        });
        card.classList.toggle('Hidden', !isVisible);
      });
    }
  }
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.filter;
      if (activeFilters.has(filter)) {
        activeFilters["delete"](filter);
        button.classList.remove('Active');
      } else {
        activeFilters.add(filter);
        button.classList.add('Active');
      }
      updateCards();
    });
  });
  resetButton.addEventListener('click', function () {
    activeFilters.clear();
    filterButtons.forEach(function (button) {
      return button.classList.remove('Active');
    });
    updateCards();
  });
});
function glitchText(element, text) {
  var reversed = Array.from(text).reverse();
  var steps = text.length;
  var frames = [];

  // Generate all frames ahead of time
  for (var _index = 0; _index < steps; _index++) {
    var frame = _toConsumableArray(reversed);

    // Move capital letter left and shift other letters forward progressively
    for (var i = 0; i <= _index; i++) {
      var movingChar = frame.pop();
      frame.splice(i, 0, movingChar);
    }

    // Gradually replace correct letters
    for (var _i = 0; _i <= _index; _i++) {
      frame[_i] = text[_i];
    }
    frames.push(frame.join(''));
  }
  var index = 0;
  function animate() {
    if (index < frames.length) {
      element.childNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = frames[index];
        }
      });
      index++;
      setTimeout(animate, 40);
    } else {
      element.childNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = text;
        }
      });
    }
  }
  setTimeout(animate, 100);
}
var triggerElement = document.querySelector('.A_Back');
var textElement = triggerElement.querySelector('p');
var originalText = textElement.textContent;
triggerElement.addEventListener('mouseenter', function () {
  glitchText(textElement, originalText);
});
/******/ })()
;