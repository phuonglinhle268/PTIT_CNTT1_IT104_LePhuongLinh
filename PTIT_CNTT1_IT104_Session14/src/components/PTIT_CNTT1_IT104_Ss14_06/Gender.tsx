import React, { Component } from 'react'

type StateTypes = {
    gender: string;
};
export default class Gender extends Component<object, StateTypes> {
    constructor(props:object){
        super(props);
    }
    state: StateTypes = {
        gender: "",
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const gender = (form.gender as RadioNodeList).value;
        this.setState({gender});
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h3>Gioi tinh</h3>
            <label><input type='radio' name='gender' value="Nam"/>Nam</label>
            <br/>
             <label><input type='radio' name='gender' value="Nu"/>Nu</label>
            <br/>
             <label><input type='radio' name='gender' value="Khac"/>Khac</label>
            <br/>
            <button type='submit' style={{backgroundColor:'pink', marginTop:"10px"}}>Submit</button>
        </form>
        {this.state.gender && (
            <h3>Gioi tinh: {this.state.gender}</h3>
        )}
      </div>
    );
  }
}
