import React from 'react'
import { useState, useEffect } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductList.css'

export const ProductList = () => {
    const [products, setProducts] = useState([])

  

    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/Product')
        const result = await response.json()
  
        setProducts(result)
      } 
      fetchProducts()
    }, [])
  
    console.log(products)

  return (
    <div className='product-list'>
        {products.map((product, index) => (
        <ProductCard product={product} />
    ))}
    </div>
  )
}

