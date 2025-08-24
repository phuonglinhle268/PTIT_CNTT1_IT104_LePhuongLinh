import React, { Component } from 'react'

type Form = {
    date: string;
    isSubmit: boolean;
}
export default class DateOfBirth extends Component<object, Form> {
    constructor(props:object){
        super(props);

        this.state = {
            date: "",
            isSubmit: false,
        }
    }
    handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({date: event.target.value});
    }
    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.setState({isSubmit: true});
    }
  render() {
    return (
      <div>
        <form style={{marginTop: "30px"}}>
            <label>Ngay sinh: </label>
            <input type='date' onChange={this.handleClick}/>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.isSubmit && <div>Ngay sinh: {this.state.date}</div>}
      </div>
    )
  }
}
