import React, { Component } from 'react'

type Form = {
    range: string;
    isSubmit : boolean;
}
export default class RangeType extends Component<object, Form> {
    constructor(props:object){
        super(props);

        this.state = {
            range: "",
            isSubmit: false,
        }
    }
    handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({range:event.target.value});
    }
    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.setState({isSubmit: true});
    }
  render() {
    return (
      <div>
        <form style={{marginTop: "30px"}}>
            <label>Tien do hoan thanh</label>
            <input type='range' onChange={this.handleClick}/>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.isSubmit && <div>Tien do hoan thanh: {this.state.range}%</div>}
      </div>
    )
  }
}
