import React, { Component } from 'react'
import Children_Comp from './Children_Comp'


export default class Parent_Comp extends Component {
    state = {
        name: "Nguyen Van Nam",
    }
  render() {
    return (
      <div>
        <h3>Ho va ten ben component cha: {this.state.name}</h3>
        <Children_Comp name = {this.state.name}/>
      </div>
    )
  }
}
