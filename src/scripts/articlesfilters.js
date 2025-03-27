document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.A_Button')
  const resetButton = document.querySelector('.A_Back')
  const cards = document.querySelectorAll('.O_Card')

  const activeFilters = {
    instrument: new Set(),
    level: new Set(),
    type: new Set()
  }

  updateCards()

  function updateCards() {
    cards.forEach((card) => {
      const [instrument, level, type] = card.dataset.category.split(' ')

      const matchInstrument =
        activeFilters.instrument.size === 0 ||
        activeFilters.instrument.has(instrument)
      const matchLevel =
        activeFilters.level.size === 0 || activeFilters.level.has(level)
      const matchType =
        activeFilters.type.size === 0 || activeFilters.type.has(type)

      const isVisible = matchInstrument && matchLevel && matchType
      card.classList.toggle('Hidden', !isVisible)
    })
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter
      const group = button.dataset.group

      const set = activeFilters[group]
      if (set.has(filter)) {
        set.delete(filter)
        button.classList.remove('Active')
      } else {
        set.add(filter)
        button.classList.add('Active')
      }

      updateCards()
    })
  })

  resetButton.addEventListener('click', () => {
    Object.values(activeFilters).forEach((set) => set.clear())
    filterButtons.forEach((button) => button.classList.remove('Active'))
    updateCards()
  })
})
