class EmployeeInfo {
    public name : string;
    protected company : string;
    private phone : string;

    constructor(name:string, company:string, phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() : string {
        return `Ten: ${this.name}, Cong ty: ${this.company}, So dien thoai: ${this.phone}`;
    }
}
const nhanvien = new EmployeeInfo("Nguyen Van A", "ABC", "1234567");

console.log(nhanvien.printInfo());
