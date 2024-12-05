import './index.css'

var form = document.getElementById('my-form')

function runCode() {
  const htmlCode = document.getElementById('htmlCode').value
  const cssCode = document.getElementById('cssCode').value
  const jsCode = document.getElementById('jsCode').value

  const sandbox = document.getElementById('sandbox')
  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}<\/script>
    </body>
    </html>
  `
  sandbox.srcdoc = content
}

if (document.querySelector('.runCode')) {
  let button = document.querySelector('.runCode')
  button.addEventListener('click', () => {
    runCode()
  })
}

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
            status.innerHTML = 'чет не сработало('
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

let paths = document.querySelectorAll('.scrollLine')
let scrollContainer = document.getElementById('scrollContainer')
let currentTextIndex = 3

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
})

if (document.querySelector('#myCanvas')) {
  let canvas = document.getElementById('myCanvas')
  let ctx = canvas.getContext('2d')
  let lines = 7
  let maxWidthFactor = 50 // Max width is 5% of the viewport
  let hoverRange = 4 // Number of lines affected by the hover
  let animationSpeed = 0.05 // Speed of transition

  let hoverIndex = -1
  let lineHeight
  let maxWidth
  let currentWidths = []
  let targetWidths = []

  // Function to resize canvas and recalculate variables
  function resizeCanvas() {
    canvas.width = (window.innerWidth * 50) / 100 // 50% of the viewport width
    canvas.height = (canvas.width * 150) / 300 // Maintain aspect ratio 300x150
    lineHeight = canvas.height / lines
    maxWidth = (maxWidthFactor * window.innerWidth) / 100

    // Reset widths based on new maxWidth
    currentWidths = Array(lines).fill(maxWidth)
    targetWidths = Array(lines).fill(maxWidth)

    drawTriangles()
  }

  function drawTriangles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < lines; i++) {
      const centerY = i * lineHeight + lineHeight / 2
      const width = currentWidths[i]

      // Set up the gradient
      const gradient = ctx.createRadialGradient(
        0,
        centerY,
        0,
        0,
        centerY,
        width
      )
      gradient.addColorStop(0, 'rgba(177, 180, 185, 0)')
      gradient.addColorStop(0.5, '#CEFD63')
      gradient.addColorStop(1, 'rgba(177, 180, 185, 0)')

      ctx.fillStyle = gradient

      ctx.beginPath()
      ctx.moveTo(0, centerY - lineHeight / 2) // Top right corner
      ctx.lineTo(width, centerY) // Tip of the triangle (to the right)
      ctx.lineTo(0, centerY + lineHeight / 2) // Bottom right corner
      ctx.closePath()
      ctx.fill()

      ctx.strokeStyle = '#bcc9eb' // Stroke color (black)
      ctx.lineWidth = 2 // Stroke width
      ctx.stroke()
    }
  }

  // Animate the transition of widths
  function animate() {
    let animationInProgress = false

    for (let i = 0; i < lines; i++) {
      if (Math.abs(currentWidths[i] - targetWidths[i]) > 0.1) {
        animationInProgress = true
        currentWidths[i] +=
          (targetWidths[i] - currentWidths[i]) * animationSpeed
      }
    }

    drawTriangles()

    if (animationInProgress) {
      requestAnimationFrame(animate)
    }
  }

  // Update the target widths based on hover
  function updateTargetWidths() {
    for (let i = 0; i < lines; i++) {
      let distanceFromHover = Math.abs(i - hoverIndex)

      if (hoverIndex !== -1 && distanceFromHover <= hoverRange) {
        targetWidths[i] =
          (maxWidth * (hoverRange - distanceFromHover)) / hoverRange
      } else if (hoverIndex !== -1 && distanceFromHover > hoverRange) {
        targetWidths[i] = 0
      } else {
        targetWidths[i] = maxWidth
      }
    }

    animate()
  }

  // Event listeners for hover effect
  canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect()
    const y = event.clientY - rect.top

    hoverIndex = Math.floor(y / lineHeight)
    updateTargetWidths()
  })

  canvas.addEventListener('mouseleave', () => {
    hoverIndex = -1
    updateTargetWidths()
  })

  // Attach resize event listener
  window.addEventListener('resize', resizeCanvas)

  // Initialize canvas
  resizeCanvas()

  // Handle mouse movement
  canvas.addEventListener('mousemove', (e) => {
    const mouseY = e.offsetY
    hoverIndex = Math.floor(mouseY / lineHeight)
    updateTargetWidths()
  })

  // Handle mouse leave
  canvas.addEventListener('mouseleave', () => {
    hoverIndex = -1
    updateTargetWidths()
  })

  // Initialize
  drawTriangles()
}
