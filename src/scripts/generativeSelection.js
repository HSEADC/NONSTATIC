import { createNoise2D } from 'simplex-noise'

export function generativeSelection(
  cardSelector,
  canvasSelector = '.A_ElectricCanvas'
) {
  document.querySelectorAll(cardSelector).forEach((card) => {
    const canvas = card.querySelector(canvasSelector)
    const ctx = canvas.getContext('2d')
    const noise2D = createNoise2D()

    const scaleFactor = 2
    canvas.width = card.clientWidth * scaleFactor
    canvas.height = card.clientHeight * scaleFactor
    ctx.scale(scaleFactor, scaleFactor)

    let time = 0

    function generateElectricPath() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#CAFF4F'
      ctx.lineWidth = 8
      ctx.shadowColor = '#CAFF4F'
      ctx.shadowBlur = 12

      let points = []
      let numPoints = 600
      let padding = 15

      for (let i = 0; i < numPoints; i++) {
        let progress = i / numPoints
        let x, y

        if (progress < 0.25) {
          x =
            padding + progress * (canvas.width / scaleFactor - 2 * padding) * 4
          y = padding
        } else if (progress < 0.5) {
          x = canvas.width / scaleFactor - padding
          y =
            padding +
            (progress - 0.25) * (canvas.height / scaleFactor - 2 * padding) * 4
        } else if (progress < 0.75) {
          x =
            canvas.width / scaleFactor -
            padding -
            (progress - 0.5) * (canvas.width / scaleFactor - 2 * padding) * 4
          y = canvas.height / scaleFactor - padding
        } else {
          x = padding
          y =
            canvas.height / scaleFactor -
            padding -
            (progress - 0.75) * (canvas.height / scaleFactor - 2 * padding) * 4
        }

        let noiseFactorX = noise2D(i * 0.0103, time * 0.005) * 150
        let noiseFactorY = noise2D(i * 0.0103, time * 0.005 + 100) * 150

        if (Math.random() < 0.2) {
          noiseFactorX *= 1.1
          noiseFactorY *= 1.1
        }

        x += noiseFactorX
        y += noiseFactorY

        x = Math.max(padding, Math.min(x, canvas.width / scaleFactor - padding))
        y = Math.max(
          padding,
          Math.min(y, canvas.height / scaleFactor - padding)
        )

        points.push({ x, y })
      }

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      for (let i = 1; i < points.length - 1; i++) {
        let midX = (points[i].x + points[i + 1].x) / 2
        let midY = (points[i].y + points[i + 1].y) / 2
        ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY)
      }
      ctx.closePath()
      ctx.stroke()
    }

    let interval
    card.addEventListener('mouseenter', () => {
      interval = setInterval(() => {
        time += 1
        generateElectricPath()
      }, 50)
    })

    card.addEventListener('mouseleave', () => {
      clearInterval(interval)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    })
  })
}
