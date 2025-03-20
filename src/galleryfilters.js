document.addEventListener('DOMContentLoaded', () => {
  let filterContainer = document.querySelector('.W_Filter')
  let filterButtons = filterContainer.querySelectorAll('.A_Button')
  const resetButton = document.querySelector('.A_Back')
  const cards = document.querySelectorAll('.M_GalleryCard')
  let activeFilters = new Set()

  function glitchText(element, text) {
    let reversed = Array.from(text).reverse()
    let steps = text.length
    let frames = []

    // Generate all frames ahead of time
    for (let index = 0; index < steps; index++) {
      let frame = [...reversed]

      // Move capital letter left and shift other letters forward progressively
      for (let i = 0; i <= index; i++) {
        let movingChar = frame.pop()
        frame.splice(i, 0, movingChar)
      }

      // Gradually replace correct letters
      for (let i = 0; i <= index; i++) {
        frame[i] = text[i]
      }

      frames.push(frame.join(''))
    }

    let index = 0
    function animate() {
      if (index < frames.length) {
        element.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = frames[index]
          }
        })
        index++
        setTimeout(animate, 40)
      } else {
        element.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = text
          }
        })
      }
    }

    setTimeout(animate, 100)
  }

  let triggerElement = document.querySelector('.A_Back')
  let textElement = triggerElement.querySelector('p')
  let originalText = textElement.textContent

  triggerElement.addEventListener('mouseenter', () => {
    glitchText(textElement, originalText)
  })

  function updateCards() {
    if (activeFilters.size === 0) {
      cards.forEach((card) => card.classList.remove('Hidden'))
    } else {
      cards.forEach((card) => {
        const categories = card.dataset.category.split(' ')
        const isVisible = [...activeFilters].some((filter) =>
          categories.includes(filter)
        )
        card.classList.toggle('Hidden', !isVisible)
      })
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter
      if (activeFilters.has(filter)) {
        activeFilters.delete(filter)
        button.classList.remove('Active')
      } else {
        activeFilters.add(filter)
        button.classList.add('Active')
      }
      updateCards()
    })
  })

  resetButton.addEventListener('click', () => {
    activeFilters.clear()
    filterButtons.forEach((button) => button.classList.remove('Active'))
    updateCards()
  })

  updateCards() // Инициализация при загрузке
})
