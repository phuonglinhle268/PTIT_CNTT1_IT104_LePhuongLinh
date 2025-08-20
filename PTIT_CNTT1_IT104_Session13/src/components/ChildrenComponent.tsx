import React, { Component } from "react";

type PropTypes = {
  userName?: string;
  age?: number;
};

export default class ChildrenComponent extends Component<PropTypes> {
  render() {
    return (
      <div>
        ChildrenComponent
        <h2>UserName: {this.props.userName}</h2>
        <h2>Age: {this.props.age}</h2>
      </div>
    );
  }
}