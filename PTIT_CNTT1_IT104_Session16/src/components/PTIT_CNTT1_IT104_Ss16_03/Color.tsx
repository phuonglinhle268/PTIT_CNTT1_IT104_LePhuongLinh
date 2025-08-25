import React, { Component } from 'react'
import "./Color.css"

type BaseButtonPropTypes = {
  htmlType?: "button" | "reset" | "submit";
  id?: string;
  className?: string;
  type?: "primary" | "secondary" | "success" | "danger";
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
  quyClick?: () => void;
};

export default class Color extends Component<BaseButtonPropTypes> {
    render() {
    return (
      <button
        onClick={this.props.quyClick}
        className={`base-button ${
          this.props.type === "primary"
            ? "button-primary"
            : this.props.type === "secondary"
            ? "button-secondary"
            : this.props.type === "danger"
            ? "button-danger"
            : "button-primary"
        } ${
          this.props.size === "large"
            ? "button-large"
            : this.props.size === "medium"
            ? "button-medium"
            : this.props.size === "small"
            ? "button-small"
            : "button-medium"
        }`}
        type={this.props.htmlType}
      >
        {this.props.children}
      </button>
    );
  }
}
