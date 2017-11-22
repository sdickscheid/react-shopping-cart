import React from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItem from './AddItem';

const ShoppingCart = (props) => {

    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItems={props.cartItems}/>
        <AddItem
          products={props.products}
          updateShoppingCart={props.updateShoppingCart}
        />
        <CartFooter copyright={props.copyright}/>
      </div>
    )
  }

export default ShoppingCart;
