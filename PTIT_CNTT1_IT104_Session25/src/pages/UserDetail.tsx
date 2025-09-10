import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();  //lay tham so id, mac dinh la string trong useParam

  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" }
  ];

  const user = users.find((user) => user.id === Number(id)); // ép về số trước khi so sánh.

  // URL bản chất chỉ là chuỗi ký tự.
  // Ví dụ: /userdetail/123 thì "123" chỉ là một đoạn string trong đường dẫn, không phải số thật
  // react router:
  // -> không tự đoán kiểu dữ liệu
  // -> dam bao tính đồng nhất


  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin chi tiết</h2>
      <div style={{ border: "1px solid grey", padding: "10px", width: "200px" }}>
        <p>Id: {user.id}</p>
        <p>UserName: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
      </div>
    </div>
  );
}
