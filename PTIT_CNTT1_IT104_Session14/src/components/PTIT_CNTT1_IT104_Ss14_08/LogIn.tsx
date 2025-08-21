import React, { Component } from 'react';
import './LogIn.css';

type FormData = {
    email: string;
    password: string;
};

export default class LogIn extends Component {
    state: { formData: FormData; message: string } = {
        formData: { email: '', password: '' },
        message: '',
    };

    componentDidMount() {
        const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
        if (emailInput) emailInput.focus();
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: { ...prevState.formData, [name]: value },
        }));
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { email, password } = this.state.formData;

        if (!email.trim() || !password.trim()) {
            this.setState({ message: 'Email va mat khau khong duoc de trong' });
            return;
        }

        const userData = { email, password };
        const existingData = JSON.parse(localStorage.getItem('users') || '[]');
        localStorage.setItem('users', JSON.stringify([...existingData, userData]));

        this.setState({
            formData: { email: '', password: '' },
            message: 'Dang nhap thanh cong',
        });
    };

    render() {
        const { formData, message } = this.state;

        return (
            <div className="container">
                <h3>Dang nhap tai khoan</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="info">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="info">
                        <label>Mat khau</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn">Dang nhap</button>
                </form>
                {message && <div className="message">{message}</div>}
            </div>
        );
    }
}