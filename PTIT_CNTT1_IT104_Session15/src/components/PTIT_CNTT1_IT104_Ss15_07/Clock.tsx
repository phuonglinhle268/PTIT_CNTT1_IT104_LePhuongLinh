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
            this.setState({time: new Date()});
        }, 1000);
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
