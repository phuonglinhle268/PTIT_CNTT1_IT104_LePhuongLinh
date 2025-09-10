import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [inputValue, setInputValue] = useState("");


  const handleSearch = () => {
     if (inputValue) {
      setSearchParam({ studentName: inputValue });
    } else {
      setSearchParam({});
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nhap tu khoa tim kiem"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        style={{padding:"10px", borderRadius:"6px", border:"1px solid grey"}}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "8px",
          backgroundColor: "blue",
          color: "white",
          marginLeft:"10px"
        }}
      >
        Tim kiem
      </button>
       {searchParam.get("studentName") && (   
        <div style={{ marginTop: "20px" }}>
          <p>Student Name: {searchParam.get("studentName")}</p>
        </div>
      )}
    </div>
  );
}
