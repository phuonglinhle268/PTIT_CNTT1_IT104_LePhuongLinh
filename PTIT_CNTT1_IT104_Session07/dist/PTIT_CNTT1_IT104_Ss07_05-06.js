"use strict";
class Acccount {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login(userName, password) {
        console.log("Dang nhap thanh cong");
    }
    logout() {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        }
        else {
            console.log("Chua dang nhap");
        }
    }
    getId() {
        return this.id;
    }
}
class userAcc extends Acccount {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(userName, password) {
        if (this.status === "banned") {
            console.log("Tai khoan da bi khoa");
            return;
        }
        if (this.userName === userName && this.password === password) {
            console.log("Dang nhap thanh cong");
            this.isLogin = true;
        }
        else {
            console.log("Dang nhap that bai");
        }
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
    getStatus() {
        return this.status;
    }
}
class adminAcc extends Acccount {
    banUser(user) {
        user.setStatus("banned");
        console.log("Da khoa tai khoan");
    }
}
const acc1 = new userAcc(1, "Nguyen Van A", "123456", "student", "active");
console.log("Tai khoan 1");
console.log("Trang thai luc dau: ", acc1.getStatus());
acc1.login("Nguyen Van A", "123456");
const acc2 = new userAcc(2, "Nguyen Van B", "678910", "teacher", "banned");
console.log("\nTai khoan 2");
console.log("Trang thai luc dau: ", acc2.getStatus());
acc2.login("Nguyen Van B", "678910");
const admin = new adminAcc(1, "admin", "123", "admin");
admin.banUser(acc2);
