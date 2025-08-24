import React, { Component } from "react";

type Form = {
  email: string;
  isSubmit: boolean;
};
export default class InputType extends Component<object, Form> {
  constructor(props: object) {
    super(props);

    this.state = {
      email: "",
      isSubmit: false,
    };
  }
  handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.state.email);
    this.setState({ isSubmit: true });
  };
  render() {
    return (
      <div>
        <h3>Form</h3>
        <form>
          <div>
            <label>Email </label>
            <input type="email" value={this.state.email} onChange={this.handleClick} />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
