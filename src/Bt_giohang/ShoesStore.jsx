import React from 'react'
import ProductList from './ProductList'
import data from './data.json'

export default function ShoesStore() {
  return (
    <div className='container'>
        <h1 className='text-center text-secondary'>ShoesStore</h1>
        <ProductList products={data}/>
    </div>
  )
}
