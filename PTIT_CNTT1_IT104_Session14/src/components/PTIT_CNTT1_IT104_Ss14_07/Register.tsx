import React, { Component } from 'react';
import './Register.css';

type FormData = {
    studentName: string;
    email: string;
    password: string;
    phone: string;
};

export default class Register extends Component {
    state: { formData: FormData; success: boolean } = {
        formData:{ studentName: '', email: '', password: '', phone: '' },
        success: false,
    };

    componentDidMount() {
        const studentNameInput = document.querySelector('input[name="studentName"]') as HTMLInputElement;
        if (studentNameInput) studentNameInput.focus();
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: { ...prevState.formData, [name]: value },  //dang sai
        }));
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { studentName, email } = this.state.formData;

        if (!studentName.trim() || !email.trim()) {
            alert('Ten sinh vien va email khong de trong');
            return;
        }

        // Luu vào localStorage
        const userData = { ...this.state.formData, timestamp: new Date().toISOString() };
        const existingData = JSON.parse(localStorage.getItem('users') || '[]');
        localStorage.setItem('users', JSON.stringify([...existingData, userData]));
        this.setState({
            formData: { studentName: '', email: '', password: '', phone: '' },
            success: true,
        });
    };
    render() {
        const { formData, success } = this.state;

        return (
            <div className="container">
                <h3>Dang ki tai khoan</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="info">
                        <label>Ten sinh vien</label>
                        <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="info">
                        <label>Email</label>
                        <input
                            type="email"
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
                    <div className="info">
                        <label>So dien thoai</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn">Dang ki</button>
                </form>
                {success && <div className="success">Dang ki thanh cong</div>}
            </div>
        );
    }
}