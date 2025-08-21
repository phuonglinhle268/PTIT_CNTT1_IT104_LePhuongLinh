import React, { Component } from 'react'

type StateTypes = {
    username:string;
}
export default class Exercise01 extends Component<object, StateTypes> {
    constructor(props:object){
        super(props);

        this.state = {
            username: "nguyen van a",
        }
    }
  render() {
    return (
      <div>
        <h3>Ho ten: {this.state.username}</h3>
      </div>
    )
  }
}
