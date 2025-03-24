/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/articles.json
const articles_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":1,"title":"Симуляция плесени","imgSrc":"images/articles/slimeMoldPreview.png","altText":"slime mold simulation on black background","programTag":"codeProgramme intermediate tutorial","link":"articles/slimeMold.html"},{"id":2,"title":"Облако точек","imgSrc":"images/articles/pointCloudPreview.png","altText":"point cloud of tree particles flying around","programTag":"nodeProgramme beginner tutorial","link":"articles/pointCloud.html"},{"id":3,"title":"Хладни узоры","imgSrc":"images/articles/chladniPatternsPreview.png","altText":"chladni patters on black bacground","programTag":"codeProgramme beginner tutorial","link":"articles/chladniPatterns.html"},{"id":4,"title":"Кинетическая типографика","imgSrc":"images/articles/kineticTypographyPreview.png","altText":"green glitch typography on background with fashion","programTag":"codeProgramme beginner tutorial","link":"articles/kineticTypograhy.html"},{"id":5,"title":"Цветное стекло","imgSrc":"images/articles/colourfulGlassPreview.png","altText":"colourful glass refractions","programTag":"nodeProgramme beginner tutorial","link":"articles/colourfulGlass.html"},{"id":6,"title":"Крипи глаза","imgSrc":"images/articles/creepyEyesPreview.mp4","altText":"creepy 3d eyes on black background","programTag":"codeProgramme intermediate tutorial","link":"articles/creepyEyes.html"},{"id":7,"title":"Пиксельные сдвиги","imgSrc":"images/articles/pixelSlicePreview.png","altText":"landscape pixel slice","programTag":"nodeProgramme intermediate tutorial","link":"articles/pixelSlice.html"},{"id":8,"title":"Блобы","imgSrc":"images/articles/blobsPreview.png","altText":"white gradient blobs on black background","programTag":"graphProgramme beginner tutorial","link":"articles/blobs.html"},{"id":9,"title":"Пушистый шум","imgSrc":"images/articles/fluffyTheNoisePreview.png","altText":"fluffy cloud of particles on black background","programTag":"nodeProgramme beginner tutorial","link":"articles/FluffyTheNoise.html"}]');
;// ./src/scripts/article.js


function generateArticleCards() {
  var articleContainer = document.querySelector('.C_ArticleCards');
  articleContainer.innerHTML = '';
  articles_namespaceObject.forEach(function (item) {
    var card = document.createElement('div');
    card.classList.add('O_Card');
    card.setAttribute('id', "article-card-".concat(item.id));
    card.setAttribute('data-category', item.sphereTag);
    var canvas = document.createElement('canvas');
    canvas.classList.add('A_ElectricCanvas');
    var title = document.createElement('h4');
    title.classList.add('A_Label');
    title.classList.add('Important');
    title.textContent = item.title;
    var imgLink = document.createElement('a');
    imgLink.classList.add('M_ArticlePreviewLink');
    imgLink.href = item.link;
    var imgElement = document.createElement('img');
    imgElement.classList.add('A_ArticlePreviewIMG');
    imgElement.src = "./".concat(item.imgSrc);
    var tags = document.createElement('div');
    tags.classList.add('C_Tags');
    tags.classList.add('Preview');
    var tagStrings = item.programTag.split(' '); // ['nodeProgramme', 'beginner', 'tutorial']

    var tagTranslations = {
      nodeProgramme: 'Нодовые',
      graphProgramme: 'Граф редакторы',
      codeProgramme: 'Код',
      beginner: 'Новичок',
      intermediate: 'Продолжающий',
      advanced: 'Продвинутый',
      tutorial: 'Туториал',
      theory: 'Знакомство'
    };
    tagStrings.forEach(function (tagText) {
      var tag = document.createElement('div');
      tag.classList.add('A_Tag');
      tag.textContent = tagTranslations[tagText] || tagText;
      tags.appendChild(tag);
    });
    card.appendChild(imgLink);
    imgLink.appendChild(tags);
    imgLink.appendChild(imgElement);
    card.appendChild(title);
    card.appendChild(canvas);
    articleContainer.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  generateArticleCards();
});
/******/ })()
;