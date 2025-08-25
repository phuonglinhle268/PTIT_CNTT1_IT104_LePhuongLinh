import React, { Component } from 'react'

type StateType = {
    time:Date;
}
export default class Clock extends Component<object, StateType> {
    intervalId : any;
    constructor(props:object){
        super(props);
        this.state = {
            time: new Date(),
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            //moi lan chay cap nhat state.time thanh tgian moi
            this.setState({time: new Date()});
        }, 1000);  //1000ms = 1s
    }
    componentWillUnmount(){
        if(this.intervalId){
            clearInterval(this.intervalId);
        }
    }
  render() {
    const {time} = this.state;
    return (
      <div>
        <h3>Thoi gian hien tai: {time.toLocaleTimeString()}</h3>
      </div>
    )
  }
}
