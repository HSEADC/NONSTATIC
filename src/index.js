import './index.css'

var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var button = document.getElementById('my-form-button')
  var collectEmails = document.querySelector('.collectEmails')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => {
      status.style.display = 'block'
      if (response.ok) {
        status.innerHTML = 'спасибо <33'
        button.remove()
        collectEmails.remove()
        form.reset()
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors']
              .map((error) => error['message'])
              .join(', ')
          } else {
            status.innerHTML = 'чет не сработало('
          }
        })
      }
    })
    .catch((error) => {
      status.innerHTML = 'чет не сработало('
    })
}
if (form) {
  form.addEventListener('submit', handleSubmit)
}

let scrollIncrementIndex = 1

let preview = document.querySelector('.preview')

if (preview) {
  scrollIncrementIndex = 4
}

let paths = document.querySelectorAll('div > svg > path')
let scrollContainer = document.getElementById('scrollContainer')
let currentTextIndex = 1

paths.forEach((path) => {
  let pathLength = path.getTotalLength()
  path.style.strokeDasharray = `${pathLength} ${pathLength}`
  path.style.strokeDashoffset = pathLength
})

window.addEventListener('scroll', () => {
  paths.forEach((path) => {
    let pathLength = path.getTotalLength()
    let scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    let drawLength = pathLength * scrollPercentage * scrollIncrementIndex

    path.style.strokeDashoffset = pathLength - drawLength

    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none'
    } else {
      path.style.strokeDasharray = `${pathLength} ${pathLength}`
    }
  })

  if (scrollContainer) {
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
        if (currentTextIndex === 0) {
          let qrCode = document.createElement('div')
          qrCode.classList.add('qrCode')
          let qrCodeLink = document.createElement('a')
          qrCodeLink.classList.add('qrCodeLink')
          qrCodeLink.href = 'https://t.me/nonstatic_generativ'
          qrCode.appendChild(qrCodeLink)
          newText.appendChild(qrCode)
        }
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
  }
})
