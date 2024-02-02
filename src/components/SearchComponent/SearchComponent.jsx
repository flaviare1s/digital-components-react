import React from 'react'
import './SearchComponent.css'

export const SearchComponent = () => {
  return (
    <div className='search-component'>
      <input type="text" />
      <p><span>Filtrar por Tipo:</span> Gorgeous</p>
      <p><span>Filtrar por Tipo:</span> Intelligent</p>
    </div>
  )
}
