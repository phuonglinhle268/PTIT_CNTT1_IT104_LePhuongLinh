import React, { Component } from 'react'
import "./Exercise03.css"

export default class Exercise03 extends Component {
    state = {
        user : [
            {id: 1, name: "John", age:30},
            {id: 2, name: "Mary", age: 25},
            {id: 3, name: "Jane", age: 20},
        ]
    }
  render() {
    return (
      <div>
        <table border={1} cellPadding={10}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {this.state.user.map((users) => (
                <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.age}</td>
                </tr>
            ))}
        </table>
      </div>
    )
  }
}
