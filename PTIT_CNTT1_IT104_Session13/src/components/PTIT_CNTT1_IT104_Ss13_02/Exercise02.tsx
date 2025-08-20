import React, { Component } from 'react'

export default class Exercise02 extends Component {
    state = {
        id: 1,
        name: "Nguyen Van Son",
        date: "20/12/2023",
        address: "Thanh Xuan, Ha Noi",
    }
  render() {
    return (
      <div>
        <h3>Thong tin ca nhan</h3>
        <p>ID: {this.state.id}</p>
        <p>Ho ten: {this.state.name}</p>
        <p>Ngay sinh: {this.state.date}</p>
        <p>Dia chi: {this.state.address}</p>
      </div>
    )
  }
}
