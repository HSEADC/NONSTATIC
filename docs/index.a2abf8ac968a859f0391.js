/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var paths = document.querySelectorAll('.preview > div > svg > path');

// Set up the stroke lengths for each path
paths.forEach(function (path) {
  var pathLength = path.getTotalLength();
  path.style.strokeDasharray = "".concat(pathLength, " ").concat(pathLength);
  path.style.strokeDashoffset = pathLength;
});
var scrollContainer = document.getElementById('scrollContainer');

// Combine event listeners
window.addEventListener('scroll', function () {
  // Drawing the SVG paths
  paths.forEach(function (path) {
    var pathLength = path.getTotalLength();
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Calculate the drawn length
    var drawLength = pathLength * scrollPercentage * 4;
    path.style.strokeDashoffset = pathLength - drawLength;

    // Handle stroke dasharray
    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none';
    } else {
      path.style.strokeDasharray = "".concat(pathLength, " ").concat(pathLength);
    }
  });

  // Adding new text and lines
  var scrollPosition = window.scrollY + window.innerHeight;
  var containerHeight = scrollContainer.offsetHeight;

  // If near the bottom, add a new text div
  if (scrollPosition >= containerHeight - 100) {
    var newText = document.createElement('div');
    newText.classList.add('text');
    newText.textContent = 'подписывайся на телегу';
    scrollContainer.appendChild(newText);
    var newLine = document.createElement('div');
    newLine.classList.add('line');
    scrollContainer.appendChild(newLine);
  }
});
/******/ })()
;