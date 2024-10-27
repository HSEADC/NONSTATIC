/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var paths = document.querySelectorAll('.preview > div > svg > path');
paths.forEach(function (path) {
  var pathLength = path.getTotalLength();
  path.style.strokeDasharray = "".concat(pathLength, " ").concat(pathLength);
  path.style.strokeDashoffset = pathLength;
});
var scrollContainer = document.getElementById('scrollContainer');
var currentTextIndex = 1;
window.addEventListener('scroll', function () {
  paths.forEach(function (path) {
    var pathLength = path.getTotalLength();
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage * 4;
    path.style.strokeDashoffset = pathLength - drawLength;
    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none';
    } else {
      path.style.strokeDasharray = "".concat(pathLength, " ").concat(pathLength);
    }
  });
  var scrollPosition = window.scrollY + window.innerHeight;
  var containerHeight = scrollContainer.offsetHeight;
  var messages = ['подписывайся на телегу', 'ты уже подписался?', 'а сейчас?', 'ты будешь скроллить пока не подпишешься'];
  if (scrollPosition >= containerHeight - 100) {
    var newText = document.createElement('div');
    newText.classList.add('text');
    if (currentTextIndex === 0 || currentTextIndex === 1) {
      var parts = messages[currentTextIndex].split(' ');
      var span1 = document.createElement('span');
      span1.textContent = parts.slice(0, 1).join(' ');
      var span2 = document.createElement('span');
      span2.textContent = parts.slice(1, 3).join(' ');
      newText.appendChild(span1);
      newText.appendChild(span2);
    } else if (currentTextIndex == 3) {
      var _parts = messages[currentTextIndex].split(' ');
      var _span = document.createElement('span');
      _span.textContent = _parts.slice(0, 2).join(' ');
      var _span2 = document.createElement('span');
      _span2.textContent = _parts.slice(2, 4).join(' ');
      var span3 = document.createElement('span');
      span3.textContent = _parts.slice(4, 6).join(' ');
      newText.appendChild(_span);
      newText.appendChild(_span2);
      newText.appendChild(span3);
    } else {
      var span = document.createElement('span');
      span.textContent = messages[currentTextIndex];
      newText.appendChild(span);
    }
    scrollContainer.appendChild(newText);
    var newLine = document.createElement('div');
    newLine.classList.add('line');
    scrollContainer.appendChild(newLine);
    currentTextIndex = (currentTextIndex + 1) % messages.length;
  }
});
/******/ })()
;