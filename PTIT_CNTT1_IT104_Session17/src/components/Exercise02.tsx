import React, {useState} from 'react'

export default function Exercise02() {
    const [product, setProduct] = useState({
        id: 1,
        name: "Coca Cola",
        price: "1000$",
        quantity: 10,
    });
  return (
    <div>
      <h3>Thông tin san phẩm</h3>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}
