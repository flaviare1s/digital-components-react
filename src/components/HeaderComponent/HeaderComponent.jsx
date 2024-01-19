import React from 'react'
import './HeaderComponent.css'

export const HeaderComponent = () => {
  return (
    <div className='header'>
        <div>
          <h1>Meu site usando React</h1>
        </div>
        <div className='menu'>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
    </div>
  )
}
