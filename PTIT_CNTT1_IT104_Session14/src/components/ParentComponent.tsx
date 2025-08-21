import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

type StateTypes = {
  isShow: boolean;
};

export default class ParentComponent extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    // Định nghĩa State
    this.state = {
      isShow: false,
    };
  }
  render() {
    const handleToggle = () => {
      // Cập nhật lại State isShow
      this.setState({
        isShow: !this.state.isShow,
      });
    };
    return (
      <div>
        <h2>ParentComponent</h2>
        <button onClick={handleToggle}>Show</button>

        {this.state.isShow ? <ChildrenComponent /> : <></>}
      </div>
    );
  }
}