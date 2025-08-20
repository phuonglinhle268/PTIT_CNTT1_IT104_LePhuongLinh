import React from 'react'

type ProductInfo = {
    id:number;
    name:string;
    price:string;
    quantity:number;
};

type Product = {
    product:ProductInfo;
}
const Children = ({product}:Product) => {
  return (
    <div>
      <h3>Du lieu trong component con</h3>
      <p>ID: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}

export default Children
