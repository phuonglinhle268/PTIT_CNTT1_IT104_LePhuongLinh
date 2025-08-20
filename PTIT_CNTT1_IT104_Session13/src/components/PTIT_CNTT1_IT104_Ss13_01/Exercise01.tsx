import React, { Component } from 'react'

export default class Exercise01 extends Component {
    state = {
        name : "Nguyen Van A",
    }
  render() {
    return (
      <div>
        <h3>Ho ten: {this.state.name}</h3>
      </div>
    )
  }
}
