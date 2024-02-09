import React from 'react'
import { useState } from 'react'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import './HeaderComponent.css'



export const HeaderComponent = () => {
  const [mudarCor, setmudarCor] = useState('darkgrey')
  const [contador, setContador] = useState(0)

  function randomHexColor() {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
  
    var hexColor = '#' + 
        red.toString(16).padStart(2, '0') +
        green.toString(16).padStart(2, '0') +
        blue.toString(16).padStart(2, '0')

    return hexColor

  }


  return (
    <div className='flex flex-col sm:flex-row justify-around sm:w-screen p-8'>
      <div>
        <img src="react.svg" alt="React Logo" />
      </div>
        <div>
          <h1>Meu site usando React</h1>
        </div>
        <div className='sm:flex justify-center'>
            <ButtonComponent text={ 'Clique aqui!' } style={{background: mudarCor }} onClick={() => setmudarCor(randomHexColor())} />
            <ButtonComponent text={ contador } onClick={() => setContador(contador + 1)} />
        </div>
    </div>
  )
}
