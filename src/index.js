import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Search from './scripts/Search.jsx'

const root = ReactDOM.createRoot(document.getElementById('react-search-root'))
root.render(<Search />)

import { glitchText } from './scripts/glitchText.js'

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.A_Back, .A_MenuButton, .A_Button')
    .forEach((el) => {
      el.addEventListener('mouseenter', () => glitchText(el))
    })
})

const burgerButton = document.querySelector('.A_Burger')
const menuButtons = document.querySelectorAll('.C_MenuButtons')[1]
const searchBase = document.querySelector('.O_Search.Base')
const burgerIcon = document.querySelector('.Q_Burger')
const nav = document.querySelector('.O_NavBar')

burgerButton.addEventListener('click', function () {
  menuButtons.classList.toggle('Active')
  searchBase.classList.toggle('Active')
  burgerIcon.classList.toggle('Active')
  burgerButton.classList.toggle('Active')
  nav.classList.toggle('Active')
})
