import React, { Component } from 'react'

type StateTypes = {
    company:string;
}
export default class Exercise03 extends Component<object, StateTypes> {
    constructor(props:object){
        super(props);

        this.state = {
            company: "Rikkei Academy",
        }
    }
    changeState = () => {
        this.setState({company: "Rikkei Soft"});
    }
  render() {
    return (
      <div style={{border: "1px solid black", padding:"20px"}}>
        <h3>Company: {this.state.company}</h3>
        <button style={{border: "1px solid black", borderRadius:"3px"}} onClick={this.changeState}>Change state</button>
      </div>
    )
  }
}
