import React from 'react'

export const ButtonComponent = ({ text, onClick }) => {

  return <button onClick={ onClick } className='mt-4 mr-4'>{ text }</button>

}

