import React from 'react'
import './cart.css'

export default function Cart({product, cartClose}) {
  return (
    <div className="cart" onClick={cartClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={cartClose}>
          &times;
        </span>
        <img src={product.image} alt="product" />
        <p>{product.description}</p>
        <p>Price: {product.price}$</p>
      </div>
    </div>
  )
}
