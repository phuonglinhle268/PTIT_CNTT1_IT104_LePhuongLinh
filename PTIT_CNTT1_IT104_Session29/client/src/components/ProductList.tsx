// src/components/ProductList.js
import React, { useEffect } from "react";
import { getAllProduct } from "../pages/HomePage";

const ProductList = () => {
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <h2>Danh sach san pham</h2>
    </div>
  );
};

export default ProductList;
