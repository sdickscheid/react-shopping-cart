import React, { Component } from 'react';
import { Input } from 'react-materialize'

class AddItem extends Component {
  state = {
    newProductID: 0,
    quantity: 1
  }

  handleProductChange = (e) => {
    this.setState({ newProductID: e.target.value })
  }

  handleQuantity = (e) => {
    this.setState({ quantity: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateShoppingCart(this.state)
  }

  render(){
    let addNewProduct = this.props.products.map((product) => <option
    key={product.id}
    value={product.id + ""}
    >{product.name}</option>)
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
              <div className="col s6 offset-s2">
                <select
                  className="browser-default"
                  value={this.state.newProductID}
                  onChange={this.handleProductChange}
                >
                  <option value="0" disabled>Choose Product</option>
                  {addNewProduct}
                </select>
              </div>

              <div className="input-field col s2">
                <input
                  placeholder="Qty"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleQuantity}
                />
              </div>
          </div>

          <div className="row">
            <button type="submit" className="btn-submit">Add Item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem;
