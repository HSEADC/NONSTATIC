import './index.css'

const paths = document.querySelectorAll('.preview > div > svg > path')

// Set up the stroke lengths for each path
paths.forEach((path) => {
  const pathLength = path.getTotalLength()
  path.style.strokeDasharray = `${pathLength} ${pathLength}`
  path.style.strokeDashoffset = pathLength
})

const scrollContainer = document.getElementById('scrollContainer')

// Combine event listeners
window.addEventListener('scroll', () => {
  // Drawing the SVG paths
  paths.forEach((path) => {
    const pathLength = path.getTotalLength()
    const scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    // Calculate the drawn length
    const drawLength = pathLength * scrollPercentage * 4

    path.style.strokeDashoffset = pathLength - drawLength

    // Handle stroke dasharray
    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none'
    } else {
      path.style.strokeDasharray = `${pathLength} ${pathLength}`
    }
  })

  // Adding new text and lines
  const scrollPosition = window.scrollY + window.innerHeight
  const containerHeight = scrollContainer.offsetHeight

  // If near the bottom, add a new text div
  if (scrollPosition >= containerHeight - 100) {
    const newText = document.createElement('div')
    newText.classList.add('text')
    newText.textContent = 'подписывайся на телегу'
    scrollContainer.appendChild(newText)

    const newLine = document.createElement('div')
    newLine.classList.add('line')
    scrollContainer.appendChild(newLine)
  }
})
