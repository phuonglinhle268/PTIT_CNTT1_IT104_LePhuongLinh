import React, { Component } from 'react'
import "./Click.css"
type StateType = {
    count:number;
}
export default class ClickCounter extends Component<object, StateType> {
    constructor(props:object){
        super(props);

        this.state = {
            count:0,
        }
    }
    handleClick = () => {
        this.setState((prevState) => (
            {count : prevState.count + 1}
        ));
    }
  render() {
    const {count} = this.state;
    return (
      <div className='click'>
        <h3>So lan click: {count}</h3>
        <button className='click-btn' onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
