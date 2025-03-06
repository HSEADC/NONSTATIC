import './index.css'
import galleryData from './gallery.json'

function generateGalleryCards() {
  const galleryContainer = document.querySelector('.C_GalleryCards')
  galleryContainer.innerHTML = ''

  galleryData.forEach((item) => {
    const card = document.createElement('div')
    card.classList.add('M_GalleryCard')
    card.setAttribute('id', `gallery-card-${item.id}`)

    const authorLabel = document.createElement('h4')
    authorLabel.classList.add('A_Label')
    authorLabel.textContent = item.author

    const titleLabel = document.createElement('h4')
    titleLabel.classList.add('A_Label')
    titleLabel.textContent = item.title

    const imgElement = document.createElement('img')
    imgElement.classList.add('A_GalleryCardIMG')
    imgElement.src = item.imgSrc
    imgElement.alt = item.altText

    card.appendChild(authorLabel)
    card.appendChild(titleLabel)
    card.appendChild(imgElement)
    galleryContainer.appendChild(card)
  })
}

document.addEventListener('DOMContentLoaded', generateGalleryCards)
