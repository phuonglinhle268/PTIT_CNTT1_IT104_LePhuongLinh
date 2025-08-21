import React, { Component } from 'react'
import "./AddProduct.css"

type Product = {
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
}
export default class AddProduct extends Component {
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const product : Product = {
            productCode: (form.productCode as HTMLInputElement).value,
            productName: (form.productName as HTMLInputElement).value,
            price: Number((form.price as HTMLInputElement).value),
            quantity: Number((form.quantity as HTMLInputElement).value),
        };
        console.log(product);
    }
  render() {
    return (
      <div className='container'>
        <h3>Them moi san pham</h3>
        <form onSubmit={this.handleSubmit}>
            <div className='info'> 
                <label>Ma san pham</label>
                <input type='text' name="productCode"/>
            </div>
            <div className='info'>
                <label>Ten san pham</label>
                <input type='text' name="productName"/>
            </div>
            <div className='info'>
                <label>Gia</label>
                <input type='number' name="price"/>
            </div>
            <div className='info'>
                <label>So luong</label>
                <select name='quantity'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <button type='submit' className='btn'>Dang ki</button>
        </form>
      </div>
    )
  }
}
