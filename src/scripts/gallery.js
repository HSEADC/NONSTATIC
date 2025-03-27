import '../index.css'
import galleryData from '../gallery.json'
import { createNoise2D } from 'simplex-noise'
import { generativeSelection } from './generativeSelection.js'

function generateGalleryCards() {
  const galleryContainer = document.querySelector('.C_GalleryCards')
  galleryContainer.innerHTML = ''

  galleryData.forEach((item) => {
    const card = document.createElement('div')
    card.classList.add('M_GalleryCard')
    card.setAttribute('id', `gallery-card-${item.id}`)
    card.setAttribute('data-category', item.programTag)

    const canvas = document.createElement('canvas')
    canvas.classList.add('A_ElectricCanvas')

    const authorLabel = document.createElement('h4')
    authorLabel.classList.add('A_Label')
    authorLabel.classList.add('Important')
    authorLabel.textContent = item.author

    const titleLabel = document.createElement('h4')
    titleLabel.classList.add('A_Label')
    titleLabel.classList.add('Important')
    titleLabel.textContent = item.title

    const imgElement = document.createElement('a')
    imgElement.classList.add('A_GalleryCardIMG')
    imgElement.style.backgroundImage = `url('./${item.imgSrc}')`
    imgElement.href = item.link

    card.appendChild(authorLabel)
    card.appendChild(titleLabel)
    card.appendChild(imgElement)
    card.appendChild(canvas)
    galleryContainer.appendChild(card)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  generateGalleryCards()
  generativeSelection('.M_GalleryCard')
})
