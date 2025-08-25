import React, { Component } from 'react';
import "./UserForm.css"

type StateType = {
  name: string;
  email: string;
  age: string;
  isSubmit: { name: string; email: string; age: number } | null;
  mistake: string | null;
};

export default class UserForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      isSubmit: null,
      mistake: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<StateType, 'name' | 'email' | 'age'>);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { name, email, age } = this.state;
    const userAge = parseInt(age); 
    
    if (!email.includes('@')) {
      this.setState({ mistake: 'Email khong hop le' });
    } else if (isNaN(userAge) || userAge < 0) {
      this.setState({ mistake: 'Tuoi khong duoc am' });
    } else {
      this.setState({
        isSubmit: { name, email, age: userAge },
        mistake: null,
      });
    }
  }

  handleReset() {
    this.setState({
      name: '',
      email: '',
      age: '',
      isSubmit: null,
      mistake: null,
    });
  }

  render() {
    const { name, email, age, isSubmit, mistake } = this.state;

    return (
      <div className='info'>
        <h3>Nhap thong tin nguoi dung</h3>
        <form onSubmit={this.handleSubmit}>
          <div > 
            <input  className='user' type="text" name="name" value={name} onChange={this.handleChange} placeholder="Ho ten"/>
          </div>
          <div>
            <input  className='user' type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email"/>
          </div>
          <div>
            <input  className='user' type="number" name="age" value={age} onChange={this.handleChange} placeholder="Tuoi"/>
          </div>
          {mistake && <p style={{ color: 'red' }}>{mistake}</p>}
          <button type="submit" className='btn'>Gui</button>
          <button type="button" className='btn'onClick={this.handleReset}>Xoa tat ca </button>
        </form>
        {isSubmit && (
          <div>
            <h4>Thong tin da nhap</h4>
            <p>Ho ten: {isSubmit.name}</p>
            <p>Email: {isSubmit.email}</p>
            <p>Tuoi: {isSubmit.age}</p>
          </div>
        )}
      </div>
    );
  }
}