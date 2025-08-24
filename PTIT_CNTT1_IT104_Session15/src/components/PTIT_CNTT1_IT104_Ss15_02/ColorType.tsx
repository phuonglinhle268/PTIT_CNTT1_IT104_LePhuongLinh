import React, { Component } from 'react'

type Form = {
    color: string;
    isSubmit: boolean;
}
export default class ColorType extends Component<object, Form> {
    constructor(props:object){
        super(props);

        this.state = {
            color: "",
            isSubmit: false,
        }
    }
    handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({color: event.target.value});
    }
    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.setState({isSubmit: true});
    }
  render() {
    return (
      <div>
        <h3>Form</h3>
        <form>
            <label>Color   </label>
            <input type='text' onChange={this.handleClick}/>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.isSubmit && (
            <div style={{backgroundColor: this.state.color}}>Color: {this.state.color}</div>
        )}
      </div>
    )
  }
}
