"use strict";
class EmployeeInfo {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `Ten: ${this.name}, Cong ty: ${this.company}, So dien thoai: ${this.phone}`;
    }
}
const nhanvien = new EmployeeInfo("Nguyen Van A", "ABC", "1234567");
console.log(nhanvien.printInfo());
