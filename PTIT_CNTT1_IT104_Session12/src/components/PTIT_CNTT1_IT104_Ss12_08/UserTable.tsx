//bai 8

import React from "react";
import UserHeader from "./UserHeader";
import UserRow from "./UserRow";

const users = [
  {
    id: 1,
    name: "Malcolm Lockyer",
    dob: "21/03/1961",
    gender: "Nam",
    address: "New york",
  },
  {
    id: 2,
    name: "Maria",
    dob: "11/02/1990",
    gender: "Nữ",
    address: "London",
  },
];
const UserTable = () => {
  return (
    <div>
      <table style={{ width: "100%", padding: "20px", margin: "10px" }}>
        <UserHeader />
        <tbody>
          {/* user:ptu hien tai trong mang user 

        */}
          {users.map((user, index) => (
            // UserRow la 1 component con nhan thong tin
            //           Nó nhận 3 props:
            // key={user.id} → React yêu cầu mỗi phần tử trong danh sách phải có key duy nhất để giúp React render hiệu quả. Ở đây dùng user.id.
            // index={index + 1} → gửi số thứ tự bắt đầu từ 1 thay vì 0.          
            // user={user} → truyền toàn bộ thông tin của user hiện tại cho component con.
            
            <UserRow key={user.id} index={index + 1} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
