export function glitchText(targetElement) {
  // Находим первый текстовый узел
  const walker = document.createTreeWalker(
    targetElement,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        return node.nodeValue.trim()
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP
      }
    }
  )
  const textNode = walker.nextNode()
  if (!textNode) return

  // Сохраняем оригинальный текст, если он ещё не сохранён
  if (!targetElement._originalText) {
    targetElement._originalText = textNode.nodeValue
  }

  const text = targetElement._originalText
  const reversed = [...text].reverse()
  const steps = text.length
  const frames = []

  for (let index = 0; index < steps; index++) {
    const frame = [...reversed]
    for (let i = 0; i <= index; i++) {
      const movingChar = frame.pop()
      frame.splice(i, 0, movingChar)
    }
    for (let i = 0; i <= index; i++) {
      frame[i] = text[i]
    }
    frames.push(frame.join(''))
  }

  let index = 0

  // Убираем старую анимацию, если была
  if (targetElement._glitchTimeouts) {
    targetElement._glitchTimeouts.forEach(clearTimeout)
  }
  targetElement._glitchTimeouts = []

  function animate() {
    if (index < frames.length) {
      textNode.nodeValue = frames[index]
      const timeout = setTimeout(animate, 40)
      targetElement._glitchTimeouts.push(timeout)
      index++
    } else {
      textNode.nodeValue = text
    }
  }

  const start = setTimeout(animate, 100)
  targetElement._glitchTimeouts.push(start)
}
