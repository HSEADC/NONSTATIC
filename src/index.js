import './index.css'

let paths = document.querySelectorAll('.preview > div > svg > path')

paths.forEach((path) => {
  let pathLength = path.getTotalLength()
  path.style.strokeDasharray = `${pathLength} ${pathLength}`
  path.style.strokeDashoffset = pathLength
})

let scrollContainer = document.getElementById('scrollContainer')
let currentTextIndex = 1

window.addEventListener('scroll', () => {
  paths.forEach((path) => {
    let pathLength = path.getTotalLength()
    let scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    let drawLength = pathLength * scrollPercentage * 4

    path.style.strokeDashoffset = pathLength - drawLength

    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none'
    } else {
      path.style.strokeDasharray = `${pathLength} ${pathLength}`
    }
  })

  let scrollPosition = window.scrollY + window.innerHeight
  let containerHeight = scrollContainer.offsetHeight

  let messages = [
    'подписывайся на телегу',
    'ты уже подписался?',
    'а сейчас?',
    'ты будешь скроллить пока не подпишешься'
  ]
  if (scrollPosition >= containerHeight - 100) {
    let newText = document.createElement('div')
    newText.classList.add('text')
    if (currentTextIndex === 0 || currentTextIndex === 1) {
      let parts = messages[currentTextIndex].split(' ')
      let span1 = document.createElement('span')
      span1.textContent = parts.slice(0, 1).join(' ')
      let span2 = document.createElement('span')
      span2.textContent = parts.slice(1, 3).join(' ')
      newText.appendChild(span1)
      newText.appendChild(span2)
    } else if (currentTextIndex == 3) {
      let parts = messages[currentTextIndex].split(' ')
      let span1 = document.createElement('span')
      span1.textContent = parts.slice(0, 2).join(' ')
      let span2 = document.createElement('span')
      span2.textContent = parts.slice(2, 4).join(' ')
      let span3 = document.createElement('span')
      span3.textContent = parts.slice(4, 6).join(' ')
      newText.appendChild(span1)
      newText.appendChild(span2)
      newText.appendChild(span3)
    } else {
      let span = document.createElement('span')
      span.textContent = messages[currentTextIndex]
      newText.appendChild(span)
    }
    scrollContainer.appendChild(newText)

    let newLine = document.createElement('div')
    newLine.classList.add('line')
    scrollContainer.appendChild(newLine)

    currentTextIndex = (currentTextIndex + 1) % messages.length
  }
})
