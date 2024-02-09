import React from 'react'
import { useProducts } from "../../providers/products"
import './ProductCard.css'

export const ProductCard = ({ product, ...rest }) => {
  const products = useProducts()

  console.log(products)

  return (
    <a href={`/product/${product.id}`}>
      <div className='product-card' {...rest}> <img src={product.image} alt="" /> {product.name} <br /> R${product.price}</div>
    </a>
  )
}

