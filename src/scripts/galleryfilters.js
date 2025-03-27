document.addEventListener('DOMContentLoaded', () => {
  let filterContainer = document.querySelector('.C_FilterButtons')
  let filterButtons = filterContainer.querySelectorAll('.A_Button')
  const resetButton = document.querySelector('.A_Back')
  const cards = document.querySelectorAll('.M_GalleryCard')
  let activeFilters = new Set()
  updateCards() // Инициализация при загрузке
  function updateCards() {
    if (activeFilters.size === 0) {
      cards.forEach((card) => card.classList.remove('Hidden'))
    } else {
      cards.forEach((card) => {
        console.log('hi')
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
})
