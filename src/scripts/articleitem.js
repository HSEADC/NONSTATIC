import '../index.css'
import { generativeSelection } from './generativeSelection.js'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript.min.js'

function setupPopUpToggle() {
  const isMobile = window.innerWidth < 900

  const popUps = document.querySelectorAll('.O_PopUp')
  const toggleLines = document.querySelectorAll('.M_PopupOpenLine')

  // Remove old listeners
  toggleLines.forEach((line) => {
    const newLine = line.cloneNode(true)
    line.parentNode.replaceChild(newLine, line)
  })

  const updatedToggleLines = document.querySelectorAll('.M_PopupOpenLine')
  const updatedIcons = document.querySelectorAll('.Q_PopUpIcon')
  const index = isMobile ? 1 : 0

  const popUp = popUps[index]
  const toggleLine = updatedToggleLines[index]
  const icon = updatedIcons[index]

  if (popUp && toggleLine && icon) {
    toggleLine.addEventListener('click', () => {
      const isClosing = popUp.classList.contains('Opened')
      const children = Array.from(popUp.children)

      if (isClosing) {
        // Add .Closed to children after delay
        popUp.classList.remove('Opened')
        popUp.classList.add('Closed')

        setTimeout(() => {
          popUp.classList.add('TrueClosed')
        }, 300)

        setTimeout(() => {
          children.forEach((child) => child.classList.add('Closed'))
        }, 300)
      } else {
        setTimeout(() => {
          popUp.classList.remove('TrueClosed')
          children.forEach((child) => child.classList.remove('Closed'))
        }, 0)

        setTimeout(() => {
          // Remove .Closed from children with delay
          popUp.classList.remove('Closed')
          popUp.classList.add('Opened')
        }, 200)
      }

      icon.classList.toggle('Opened')
      icon.classList.toggle('Closed')
    })
  }
}

const selectors = ['.O_Card', '.SO_VideoPreview']

setupPopUpToggle()

window.addEventListener('DOMContentLoaded', () => {
  selectors.forEach((selector) => {
    generativeSelection(selector)
  })
  Prism.highlightAll()
})
window.addEventListener('resize', setupPopUpToggle)
