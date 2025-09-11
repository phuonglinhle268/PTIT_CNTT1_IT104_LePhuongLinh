import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: "35,000,000 VND",
    description: "laptop de su dung",
  },
  {
    id: 2,
    name: "Iphone 14 Pro",
    price: "30,000,000 VND",
    description: "dien thoai iphone",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: "25,000,000 VND",
    description: "dien thoai samsung",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM4",
    price: "7,000,000 VND",
    description: "Tai nghe da tai",
  },
  {
    id: 5,
    name: "Apple watch Series 8",
    price: "12,000,000 VND",
    description: "dong ho deo tay thong minh",
  },
];
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>San pham khong ton tai</h2>;
  }

  return (
    <div>
        <h2>Trang chi tiet san pham</h2>
     <div style={{border:"1px solid grey", margin:"20px", padding:"20px", borderRadius:"5px"}}>
         <b>{product.name}</b>
      <p>Gia: {product.price}</p>
      <p>Mo ta: {product.description}</p>
      <button style={{backgroundColor:"skyblue"}} onClick={() => navigate("/products")}>
        Quay lai danh sach
      </button>
     </div>
    </div>
  );
}
