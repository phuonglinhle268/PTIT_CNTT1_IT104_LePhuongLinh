import React, {useMemo} from 'react'

type User = {
    id:number;
    name:string;
    age:number;
}
export default function UserList() {
    const users : User[] = [
        {id:1, name:"nguyen van a", age: 18},
        {id:2, name:"nguyen thi b", age: 19},
        {id:3, name:"tran van c", age: 11},
        {id:4, name:"le van d", age: 29},
    ];
    const userAge = useMemo(() => {
        return users.filter((user) => user.age > 18);
    }, [users]);
  return (
    <div style={{padding:"20px", backgroundColor:"pink", marginTop:"30px"}}>
      <ul>
        {userAge.map((user) => (
            <li key={user.id}>{user.name}: {user.age} tuoi</li>
        ))}
      </ul>
    </div>
  )
}
