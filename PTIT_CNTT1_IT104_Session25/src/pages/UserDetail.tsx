import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" }
  ];

  const userInfo = users.find((user) => user.id === Number(id));


  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin chi tiết</h2>
      <div style={{ border: "1px solid grey", padding: "10px", width: "200px" }}>
        <p>Id: {userInfo.id}</p>
        <p>UserName: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Address: {userInfo.address}</p>
      </div>
    </div>
  );
}
