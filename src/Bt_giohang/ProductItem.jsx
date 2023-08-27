import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './Cart';

export default function ProductItem({product}) {
  const [cartOpen, setCartOpen] =useState(false)

  const openCart = () => {
    setCartOpen(true);
  };

  const cartClose = () => {
    setCartOpen(false);
  };

  return (
    <div className="card">
      <img className="card-img" src={product.image} alt="product" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-dark" onClick={openCart}>
          View Detail
        </button>
      </div>
      {cartOpen && <Cart product={product} cartClose={cartClose} />}
    </div>

  )
}
