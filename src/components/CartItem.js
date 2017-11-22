import React from 'react';

const CartItem = ({fullProduct}) => {
  console.log(fullProduct);
  return (
    <div className="collection-item">
      <div className="row">
        <div className="col s8">{fullProduct.product.name}</div>
        <div className="col s2">${(fullProduct.product.priceInCents/100).toFixed(2)}</div>
        <div className="col s2">{fullProduct.quantity}</div>
      </div>
    </div>
  )
}

export default CartItem;
