import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default class ParentComponent extends Component {
  render() {
    const userName: string = "Nguyễn Văn A";
    return (
      <div>
        <h1>ParentComponent username: {userName}</h1>
        <ChildrenComponent age={30} userName={userName} />
      </div>
    );
  }
}