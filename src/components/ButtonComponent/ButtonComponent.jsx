import React from 'react'

export const ButtonComponent = ({ text, ...rest }) => {

  return <button className='mt-4 mr-4' {...rest}>{ text }</button>

}

