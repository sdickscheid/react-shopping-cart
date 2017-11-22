import React from 'react';
import CartItem from './CartItem';

const CartItems = ({cartItems}) => {

  let productArray = cartItems.map((product, index)=>(
    <CartItem key={product.id} fullProduct={product}/>
  ));
  return (
    <div className="container">
      <h1>Items</h1>
      <div className="collection">
        <div className="collection-item row grey lighten-3">
          <div className="col s8">Product</div>
          <div className="col s2">Price</div>
          <div className="col s2">Quantity</div>
        </div>

        {productArray}

      </div>
    </div>
  )
}

export default CartItems;
