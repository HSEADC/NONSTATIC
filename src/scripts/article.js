import '../index.css'
import articleData from '../articles.json'
import { generativeSelection } from './generativeSelection.js'

function generateArticleCards() {
  const articleContainer = document.querySelector('.C_ArticleCards')
  articleContainer.innerHTML = ''

  articleData.forEach((item) => {
    const card = document.createElement('div')
    card.classList.add('O_Card')
    card.setAttribute('id', `article-card-${item.id}`)
    card.setAttribute('data-category', item.programTag)

    const canvas = document.createElement('canvas')
    canvas.classList.add('A_ElectricCanvas')

    const title = document.createElement('h4')
    title.classList.add('A_Label', 'Important')
    title.textContent = item.title

    const imgLink = document.createElement('a')
    imgLink.classList.add('M_ArticlePreviewLink')
    imgLink.href = item.link

    const mediaElement =
      item.type === 'video'
        ? (() => {
            const video = document.createElement('video')
            video.classList.add('A_ArticlePreviewIMG')
            video.src = `./${item.imgSrc}`
            video.autoplay = true
            video.muted = true
            video.loop = true
            video.playsInline = true
            return video
          })()
        : (() => {
            const img = document.createElement('img')
            img.classList.add('A_ArticlePreviewIMG')
            img.src = `./${item.imgSrc}`
            return img
          })()

    const tags = document.createElement('div')
    tags.classList.add('C_Tags', 'Preview')

    const tagStrings = item.programTag.split(' ')

    const tagTranslations = {
      nodeProgramme: 'Нодовые',
      graphProgramme: 'Граф редакторы',
      codeProgramme: 'Код',
      beginner: 'Новичок',
      intermediate: 'Продолжающий',
      advanced: 'Продвинутый',
      tutorial: 'Туториал',
      theory: 'Знакомство'
    }

    tagStrings.forEach((tagText) => {
      const tag = document.createElement('div')
      tag.classList.add('A_Tag')
      tag.textContent = tagTranslations[tagText] || tagText
      tags.appendChild(tag)
    })

    card.appendChild(imgLink)
    imgLink.appendChild(tags)
    imgLink.appendChild(mediaElement)
    card.appendChild(title)
    card.appendChild(canvas)
    articleContainer.appendChild(card)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  generateArticleCards()
  generativeSelection('.O_Card')
})
