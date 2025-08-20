import React, { Component } from "react";

type PropTypes = {
  username?: string;
};

type StateTypes = {
  count: number;
};

export default class DemoState extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    // Định nghĩa danh sách các state của component
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("Re-render");

    // Cập nhật lại giá trị của State
    const handleIncrease = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
      this.setState((prevState) => ({
        count: prevState.count + 2,
      }));
      this.setState((prevState) => ({
        count: prevState.count + 3,
      }));
    };
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    );
  }
}