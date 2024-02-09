import React from 'react'
import './ProductCard.css'

export const ProductCard = ({ product, ...rest }) => {
  return (
    <a href={`/product/${product.id}`}>
      <div className='product-card' {...rest}> <img src={product.image} alt="" /> {product.name} <br /> R${product.price}</div>
    </a>
  )
}

