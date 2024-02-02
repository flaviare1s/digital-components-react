import React from 'react'
import './ProductCard.css'

export const ProductCard = ({ product }) => {
  return (
    <div className='product-card'> <img src={product.image} alt="" /> {product.name} <br /> R${product.price}</div>
  )
}

