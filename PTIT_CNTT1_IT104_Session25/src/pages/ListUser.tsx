import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" }
  ];

  const handleClick = (id) => {
    navigate(`/userdetail/${id}`);
  };

  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid grey",
            padding: "10px",
            width: "200px"
          }}
        >
          <p>ID: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button onClick={() => handleClick(user.id)} style={{backgroundColor:"skyblue"}}>Xem chi tiết</button>
        </div>
      ))}
    </div>
  );
}
