import { generativeSelection } from './generativeSelection.js'

const imagesData = [
  { src: './images/indexPreview/1.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/2.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/3.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/4.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/5.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/6.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/7.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/8.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/9.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/10.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/11.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/12.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/13.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/14.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/15.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/16.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/17.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/18.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/19.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/20.png', link: 'https://example.com/1' },
  { src: './images/indexPreview/21.png', link: 'https://example.com/1' }
]

const descriptions = document.querySelectorAll('.A_Description')

descriptions.forEach((description) => {
  const randomColumn = Math.floor(Math.random() * 7) + 1

  description.style.gridColumnStart = randomColumn
})

function getRandomImages(num) {
  const shuffledImages = [...imagesData]
  const randomImages = []
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * shuffledImages.length)
    randomImages.push(shuffledImages[randomIndex])
  }
  return randomImages
}

function renderImages() {
  const container = document.querySelector('.M_IndexGallery')
  container.innerHTML = ''
  const randomImages = getRandomImages(10)

  randomImages.forEach((image) => {
    const imgElement = document.createElement('img')
    imgElement.src = image.src
    imgElement.alt = image.src

    const anchorElement = document.createElement('a')
    anchorElement.href = image.link
    anchorElement.classList.add('A_ArticlePreviewIMG')
    anchorElement.appendChild(imgElement)

    const canvasElement = document.createElement('canvas')
    canvasElement.classList.add('A_ElectricCanvas')
    anchorElement.appendChild(canvasElement)

    container.appendChild(anchorElement)
  })
}

import 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript.min.js'

Prism.highlightAll()

renderImages()

const selectors = [
  '.M_VideoPreview',
  '.M_IndexTutorial',
  '.A_ArticlePreviewIMG'
]

window.addEventListener('DOMContentLoaded', () => {
  selectors.forEach((selector) => {
    generativeSelection(selector)
  })
})
