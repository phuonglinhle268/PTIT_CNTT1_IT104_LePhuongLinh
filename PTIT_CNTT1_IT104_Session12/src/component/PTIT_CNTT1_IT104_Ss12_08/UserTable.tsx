//bai 8

import React from 'react'
import UserHeader from './UserHeader'
import UserRow from './UserRow'

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
       <table style={{ width: "100%", padding: "20px", margin: "10px"}}>
      <UserHeader />
      <tbody>
        {users.map((user, index) => (
          <UserRow key={user.id} index={index + 1} user={user} />
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default UserTable
