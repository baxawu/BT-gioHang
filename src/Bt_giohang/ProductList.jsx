import React from 'react'
import ProductItem from './ProductItem';

export default function ProductList({products}) {
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-4">
            <ProductItem product={product} />
          </div>
        );
      })}
    </div>
  )
}
