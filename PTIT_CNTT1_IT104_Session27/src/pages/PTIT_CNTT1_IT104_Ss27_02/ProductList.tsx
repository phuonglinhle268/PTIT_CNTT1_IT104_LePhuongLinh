import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: "35,000,000 VND",
  },
  {
    id: 2,
    name: "Iphone 14 Pro",
    price: "30,000,000 VND",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: "25,000,000 VND",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM4",
    price: "7,000,000 VND",
  },
  {
    id: 5,
    name: "Apple watch Series 8",
    price: "12,000,000 VND",
  },
];
export default function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Trang san pham</h2>
      <div style={{display:"flex"}}>
        {products.map((product) => (
          <div key={product.id} style={{border:"1px solid grey", margin:"20px", padding:"10px", borderRadius:"5px"}}>
            <b>{product.name}</b>
            <p>Gia: {product.price}</p>
            <button style={{backgroundColor:"skyblue"}} onClick={() => navigate(`/products/${product.id}`)}>
              Xem chi tiet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
