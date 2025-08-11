"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loai cong viec: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
//ke thua hoan toan thuoc tinh cua Job
//can ca cac class con ben trong va cac constructor
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const part = new ParttimeJob("Viec part-time", 30);
const full = new FulltimeJob("Viec fulltime");
part.printType();
console.log(`Luong con viec partTime: ${part.calculateSalary()}`);
full.printType();
console.log(`Luong cong viec fullTime: ${full.calculateSalary()} `);
