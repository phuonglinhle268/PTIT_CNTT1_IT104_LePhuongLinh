"use strict";
class BankAccount {
    // Constructor khởi tạo số dư tài khoản
    constructor(initialBalance) {
        // Chỉ cho phép số dư tài khoản lớn hơn hoặc bằng 0
        if (initialBalance < 0) {
            console.log("Số dư tài khoản không hợp lệ.");
            this.balance = 0;
        }
        else {
            this.balance = initialBalance;
        }
    }
    // Phương thức public để gửi tiền vào tài khoản
    deposit(amount) {
        if (amount <= 0) {
            console.log("Số tiền gửi phải lớn hơn 0.");
            return;
        }
        this.balance += amount;
        console.log(`Đã gửi ${amount}. Số dư hiện tại: ${this.balance}`);
    }
    // Phương thức public để rút tiền từ tài khoản
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0.");
            return;
        }
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Đã rút ${amount}. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Không đủ tiền để rút.");
        }
    }
    // Phương thức public để kiểm tra số dư tài khoản
    checkBalance() {
        console.log(`Số dư tài khoản hiện tại là: ${this.balance}`);
    }
}
// Tạo đối tượng tài khoản ngân hàng với số dư ban đầu là 1000
const myAccount = new BankAccount(1000);
// Sử dụng các phương thức công khai để tương tác với tài khoản
myAccount.deposit(500); // Gửi 500 vào tài khoản
myAccount.withdraw(200); // Rút 200 từ tài khoản
myAccount.checkBalance(); // Kiểm tra số dư tài khoản
// Cố gắng truy cập trực tiếp thuộc tính balance (sẽ bị lỗi vì balance là private)
// console.log(myAccount.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
