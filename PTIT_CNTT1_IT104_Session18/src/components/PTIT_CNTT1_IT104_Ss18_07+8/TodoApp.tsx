import React, { useReducer, useEffect, useState } from "react";

type Action =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: number }
  | { type: "INIT"; payload: string[] };

const reducer = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((_, index) => index !== action.payload);
    case "INIT":
      return action.payload;
    default:
      return state;
  }
};

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      dispatch({ type: "INIT", payload: JSON.parse(data) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch({ type: "ADD", payload: input.trim() });
      setInput("");
    }
  };

  const handleRemove = (index: number) => {
    const confirmDelete = window.confirm("Ban muon xoa cong viec nay?");
    if (confirmDelete) {
      dispatch({ type: "REMOVE", payload: index });
    }
  };

  return (
    <div style={{ margin: "40px auto" }}>
      <div style={{display: "flex", gap:"10px"}}>
        <input
        type="text"
        placeholder="Nhap ten cong viec"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "13px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "3px",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "8px 12px",
          marginBottom: "10px",
          background: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "3px"
        }}
      >
        Them
      </button>

      </div>
      {todos.map((todo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            border: "1px solid grey",
            borderRadius: "3px",
            marginBottom: "10px",
          }}
        >
          <span>{todo}</span>
          <button
            onClick={() => handleRemove(index)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "3px",
              padding: "6px"
            }}
          >
            Xoa
          </button>
        </div>
      ))}
    </div>
  );
}
