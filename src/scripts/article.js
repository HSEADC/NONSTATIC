import '../index.css'
import articleData from '../articles.json'

function generateArticleCards() {
  const articleContainer = document.querySelector('.C_ArticleCards')
  articleContainer.innerHTML = ''

  articleData.forEach((item) => {
    const card = document.createElement('div')
    card.classList.add('O_Card')
    card.setAttribute('id', `article-card-${item.id}`)
    card.setAttribute('data-category', item.sphereTag)

    const canvas = document.createElement('canvas')
    canvas.classList.add('A_ElectricCanvas')

    const title = document.createElement('h4')
    title.classList.add('A_Label')
    title.classList.add('Important')
    title.textContent = item.title

    const imgLink = document.createElement('a')
    imgLink.classList.add('M_ArticlePreviewLink')
    imgLink.href = item.link

    const imgElement = document.createElement('img')
    imgElement.classList.add('A_ArticlePreviewIMG')
    imgElement.src = `./${item.imgSrc}`

    const tags = document.createElement('div')
    tags.classList.add('C_Tags')
    tags.classList.add('Preview')

    const tagStrings = item.programTag.split(' ') // ['nodeProgramme', 'beginner', 'tutorial']

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
    imgLink.appendChild(imgElement)
    card.appendChild(title)
    card.appendChild(canvas)
    articleContainer.appendChild(card)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  generateArticleCards()
})
