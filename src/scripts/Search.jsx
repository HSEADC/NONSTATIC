import React, { useEffect, useState, useRef } from 'react'
import { generativeSelection } from './generativeSelection.js'
import { createPortal } from 'react-dom'
import articlesData from '../articles.json'

export default function Search() {
  const [isFocused, setIsFocused] = useState(false)
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState([])
  const searchRef = useRef(null)

  // при загрузке показываем 10 случайных
  useEffect(() => {
    const shuffled = [...articlesData].sort(() => 0.5 - Math.random())
    setFiltered(shuffled.slice(0, 10))
  }, [])

  // при вводе текста — фильтрация
  useEffect(() => {
    if (query.length >= 3) {
      const q = query.toLowerCase()
      const matched = articlesData.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.altText?.toLowerCase().includes(q) ||
          item.sphereTag?.toLowerCase().includes(q)
      )
      setFiltered(matched)
    } else if (query.length < 3) {
      const shuffled = [...articlesData].sort(() => 0.5 - Math.random())
      setFiltered(shuffled.slice(0, 10))
    }
  }, [query])

  // клик вне блока — закрываем
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isFocused) {
      generativeSelection('.A_SearchIMG')
    }
  }, [filtered, isFocused])

  return (
    <>
      {isFocused &&
        createPortal(<div className="Q_BackgroundBlur"></div>, document.body)}

      <div className="O_Search" ref={searchRef}>
        <div className="M_InputWrapper">
          <input
            type="text"
            placeholder="Что ищешь?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="A_Input Big"
          />
        </div>

        {isFocused && (
          <div className="W_SearchItemsWrapper">
            <div className="A_Description">
              {query.length >= 3
                ? filtered.length > 0
                  ? 'Мы нашли…'
                  : 'Мы ничего не нашли…'
                : 'Мб ты искал это?'}
            </div>

            {(query.length < 3 || filtered.length > 0) && (
              <div className="C_SearchPreviews">
                {filtered.map((item, i) => (
                  <div
                    key={i}
                    className="M_SearchPreview"
                    onClick={() => {
                      if (item.link) {
                        window.location.href = item.link
                      }
                    }}
                    style={{ cursor: item.link ? 'pointer' : 'default' }}
                  >
                    <div className="A_SearchIMG">
                      {item.imgSrc.match(/\.(mp4|mov)$/i) ? (
                        <video
                          src={item.imgSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img src={item.imgSrc} alt={item.title} />
                      )}
                      <canvas className="A_ElectricCanvas"></canvas>
                    </div>
                    <h4 className="A_Label">{item.title}</h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
