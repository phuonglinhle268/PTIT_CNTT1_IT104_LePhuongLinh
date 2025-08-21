import React from "react";

let company = "Rikkei Academy";

const UpdateState = () => {
  const handleChange = () => {
    company = "Rikkei Soft";
    console.log(company);
  };

  return (
    <div style={{ textAlign: "center", border: "1px solid black" }}>
      <h3>Tên công ty: {company}</h3>
      <button
        style={{ border: "1px solid black", borderRadius: "5px" }}
        onClick={handleChange}
      >
        Change
      </button>
    </div>
  );
};

export default UpdateState;
