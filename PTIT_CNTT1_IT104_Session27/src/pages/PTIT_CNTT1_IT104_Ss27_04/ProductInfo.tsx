import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const productInfo = [
  {
    id: 1,
    name: "Iphone 15 Pro",
    price: 29000000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26990000,
    description: "Smartphone flagship của Samsung với camera 200MP",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 28990000,
    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25000000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét",
  },
];

export default function ProductInfo() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const searchValue = searchParam.get("search") || "";
    setInputValue(searchValue);
  }, [searchParam]);

  const handleSearch = () => {
    if (inputValue) {
      setSearchParam({ search: inputValue});
    } else {
      setSearchParam({});
    }
  };

  const keyword = (searchParam.get("search") || "").toLowerCase();
  const showProduct = productInfo.filter((p) =>
    p.name.toLowerCase().includes(keyword)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Tim san pham"
          style={{ padding: "10px", marginRight: "10px", border:"1px solid grey"}}
        />
        <button onClick={handleSearch} style={{backgroundColor:"pink"}}>Search</button>
      </div>

      <div>
        { 
          showProduct.map((p) => (
            <p key={p.id}>
              <h3>{p.name}</h3>
              <p>Gia: {p.price.toLocaleString()} VND</p>
              <p>{p.description}</p>
            </p>
          ))
        }
      </div>
    </div>
  );
}
