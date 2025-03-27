/******/ (() => { // webpackBootstrap
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.A_Button');
  var resetButton = document.querySelector('.A_Back');
  var cards = document.querySelectorAll('.O_Card');
  var activeFilters = {
    instrument: new Set(),
    level: new Set(),
    type: new Set()
  };
  updateCards();
  function updateCards() {
    cards.forEach(function (card) {
      var _card$dataset$categor = card.dataset.category.split(' '),
        _card$dataset$categor2 = _slicedToArray(_card$dataset$categor, 3),
        instrument = _card$dataset$categor2[0],
        level = _card$dataset$categor2[1],
        type = _card$dataset$categor2[2];
      var matchInstrument = activeFilters.instrument.size === 0 || activeFilters.instrument.has(instrument);
      var matchLevel = activeFilters.level.size === 0 || activeFilters.level.has(level);
      var matchType = activeFilters.type.size === 0 || activeFilters.type.has(type);
      var isVisible = matchInstrument && matchLevel && matchType;
      card.classList.toggle('Hidden', !isVisible);
    });
  }
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.filter;
      var group = button.dataset.group;
      var set = activeFilters[group];
      if (set.has(filter)) {
        set["delete"](filter);
        button.classList.remove('Active');
      } else {
        set.add(filter);
        button.classList.add('Active');
      }
      updateCards();
    });
  });
  resetButton.addEventListener('click', function () {
    Object.values(activeFilters).forEach(function (set) {
      return set.clear();
    });
    filterButtons.forEach(function (button) {
      return button.classList.remove('Active');
    });
    updateCards();
  });
});
/******/ })()
;