import React from 'react'
import ActionButton from './ActionButton'

type User = {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
};
const UserRow = ({ index, user }: { index: number; user: User }) => {
  return (
    <div>
      <tr style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user.dob}</td>
      <td>{user.gender}</td>
      <td>{user.address}</td>
      <td>
        <ActionButton />
      </td>
    </tr>
    </div>
  )
}

export default UserRow
