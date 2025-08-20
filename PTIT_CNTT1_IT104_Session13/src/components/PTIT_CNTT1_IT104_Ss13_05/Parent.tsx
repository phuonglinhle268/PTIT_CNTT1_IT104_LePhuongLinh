import React, { Component } from 'react'
import Children from './Children'

type ProductInfo = {
    id:number;
    name:string;
    price:string;
    quantity:number;
}
export default class Parent extends Component {
    state: ProductInfo = {
        id:1,
        name: "Buoi ba roi",
        price: "12.000",
        quantity: 6,
    }
  render() {
    return (
      <div>
        <Children product={this.state}/>
      </div>
    )
  }
}
