import React, { Component } from 'react'
import "./LoginStatus.css"

type StateType = {
    isLoggedIn: boolean;
}
export default class LoginStatus extends Component<object, StateType> {
    constructor(props: object){
        super(props);

        this.state = {
            isLoggedIn: false,
        }
    }
    handleToggle= ()=> {
        this.setState((prevState) => (
            {isLoggedIn : !prevState.isLoggedIn}
        ));
    }
  render() {
    const {isLoggedIn} = this.state;
    return (
      <div className='login'>
        {isLoggedIn ? (<b>Xin chao, User</b>) : (<b>Vui long dang nhap de tiep tuc</b>)}
        <br/>
        <button className='btn' onClick={this.handleToggle}>
            {isLoggedIn ? "Dang xuat" : "Dang nhap"}
        </button>
      </div>
    )
  }
}
