"use strict";
class VehicleInfo {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    buy() {
        return `Ten xe: ${this.name}, Nam san xuat: ${this.year}, Hang xe: ${this.company}`;
    }
}
const vehicle1 = new VehicleInfo("xe dap", 10, "Mini");
const vehicle2 = new VehicleInfo("xe may", 3, "Honda");
console.log(vehicle1.buy());
console.log(vehicle2.buy());
