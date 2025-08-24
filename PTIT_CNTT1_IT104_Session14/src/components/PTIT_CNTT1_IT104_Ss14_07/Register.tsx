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
//focus vao o ten sinh vien sau khi dc render
    componentDidMount() {
        const studentNameInput = document.querySelector('input[name="studentName"]') as HTMLInputElement;
        //Tìm phần tử input có thuộc tính name="studentName" trong DOM và ép kiểu thành HTMLInputElement.
        if (studentNameInput) studentNameInput.focus();
        //Nếu tìm thấy phần tử input, tự động đặt con trỏ (focus) vào ô nhập tên sinh viên khi component được tải.
    }
//kiểu generic: event là 1 sự kiện that đổi trên 1 ptu input
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target; //lấy từ ptu input gây ra sự kiện
        this.setState((prevState) => ({
            //sao chép fformData cũ và cập nhật gtri t.ung name=value
            formData: { ...prevState.formData, [name]: value },  //dang sai
        }));
    };

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { studentName, email } = this.state.formData;

        if (!studentName.trim() || !email.trim()) {
            //loại bỏ khoảng trắng ở đầu và cuối 1 chuỗi
            alert('Ten sinh vien va email khong de trong');
            return;
        }

        // Luu vào localStorage
        const userData = { ...this.state.formData, timestamp: new Date().toISOString() };
        // Date.toISOString: chuyen 1 doi tuong tgian thanh 1 chuoi theo tieu chuan ISO(y/m/d)
        const existingData = JSON.parse(localStorage.getItem('users') || '[]');
        localStorage.setItem('users', JSON.stringify([...existingData, userData]));
        //stringify: chuyển đổi 1 gtri thành 1 chuỗi
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