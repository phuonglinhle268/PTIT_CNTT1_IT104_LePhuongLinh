import React, { Component } from 'react'

type StateType = {
    count:number;
}
export default class Counter extends Component<object, StateType> {
    constructor(props:object){
        super(props);

        this.state = {
            count: 0,
        }
    }
    componentDidMount(): void {
        setTimeout(() => {
            setInterval(() => {
                this.setState((prevState) => {
                    const newCount = prevState.count + 1;
                    return {count:newCount >= 10 ? 0 : newCount};
                });
            }, 1000);
        }, 1000);
    }
  render() {
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
      </div>
    )
  }
}
