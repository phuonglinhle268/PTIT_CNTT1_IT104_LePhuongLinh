import React, { Component } from "react";

export default class DemoEvent extends Component {
  render() {
    const handleClick = (id: number) => {
      console.log("Clicked: ", id);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Value: ", event.target.value);
    };
    return (
      <div>
        <h1>DemoEvent</h1>
        <button onClick={() => handleClick(1)}>Click me</button>
        <input type="text" onChange={handleChange} />
      </div>
    );
  }
}