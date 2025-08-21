import React, { Component } from 'react'

export default class Notification extends Component {
    componentDidMount(): void {
        console.log("Component da duoc mount!");
    }
  render() {
    return (
      <div>
        <h3>Thong bao khi mount</h3>
      </div>
    )
  }
}
