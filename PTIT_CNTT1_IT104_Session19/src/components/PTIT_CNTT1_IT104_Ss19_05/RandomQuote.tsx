import React, { useState } from "react";


const quotes = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
];

export default function RandomQuote() {
  const [quote, setQuote] = useState<string>("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{backgroundColor:"whitesmoke", padding:"20px", borderRadius:"5px", marginTop:"50px"}}>
      <h2>Cau noi truyen cam hung hom nay</h2>
      <p>“{quote}”</p>
      <button style={{backgroundColor:"skyblue", color:"white", marginTop:"10px"}} onClick={getRandomQuote}>
        Lay cau hoi moi
      </button>
    </div>
  );
}
