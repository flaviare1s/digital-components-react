import React from 'react'
import { ProductList } from '../ProductList/ProductList'
import { SearchComponent } from '../SearchComponent/SearchComponent'
import './BodyComponent.css'

export const BodyComponent = () => {
  
  return (
    <div className='body'>
        <div className='search'>
          <SearchComponent/>
        </div>
        <div className='products'>
          <ProductList/>
        </div>
    </div>
  )
}

