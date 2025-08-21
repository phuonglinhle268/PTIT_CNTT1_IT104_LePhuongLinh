import React, { Component } from 'react'

type StateTypes = {
    slogan: string;
}
export default class Exercise04 extends Component<object, StateTypes> {
    constructor(props:object){
        super(props);

        this.state = {
            slogan: "Hoc code de di lam",
        }
    }
    shouldComponentUpdate(){
        return false;
    }
    changeState = () => {
        this.setState({slogan: "Hoc code se thanh cong."});
    }
  render() {
    return (
      <div style={{border: "1px solid black", padding:"20px", marginTop:"20px"}}>
        <h3>Slogan: {this.state.slogan}</h3>
        <button style={{border: "1px solid black", borderRadius:"3px"}} onClick={this.changeState} >Change state</button>
      </div>
    )
  }
}
