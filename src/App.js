import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
class App extends Component {

  // vvv state is a class property
  state = {
    // vvv items & products are properties of the state
    items: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      { id: 4, product: { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 }, quantity: 4 },
      { id: 5, product: { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 }, quantity: 1 },
      { id: 6, product: { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 }, quantity: 3 },
      { id: 7, product: { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 }, quantity: 1 },
      { id: 8, product: { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 }, quantity: 6 },
      { id: 9, product: { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }, quantity: 1 },
    ],

    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
  }
  // vvv updateShoppingCart is a class method
  updateShoppingCart = (singleProduct) => {
    // this.setState({item: this.state.items.concat(product)})
    let selectedProduct = this.state.products.filter(product => singleProduct.newProductID == product.id)[0]
    let itemIdCounter = 0;
    let newItem = {}
    newItem.product = selectedProduct;
    this.state.items.map(item => {
      if(itemIdCounter < item.id){
        itemIdCounter = item.id
      }
    })
    newItem.id = itemIdCounter;
    newItem.quantity = singleProduct.quantity
    this.setState({items: this.state.items.concat(newItem)})
  }

  // vvv class method
  render() {
    let currentYear = new Date();
    let copyright = {
      currentYear: currentYear.getFullYear(),
      legalLine: "All Rights Reserved"
    }

    return (
      <div className="App">
        <ShoppingCart
          copyright={copyright}
          cartItems={this.state.items}
          products={this.state.products}
          updateShoppingCart={this.updateShoppingCart}
        />
      </div>
    );
  }
}

export default App;
