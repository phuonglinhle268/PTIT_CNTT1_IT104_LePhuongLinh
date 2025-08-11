abstract class Job {
    type : string;

    constructor(type:string){
        this.type = type;
    }

    printType(): void {
        console.log(`Loai cong viec: ${this.type}`);
    }
    
    abstract calculateSalary() : number;
}

class ParttimeJob extends Job {
    workingHour : number;
    constructor(type:string, workingHour:number){
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return  30000 * this.workingHour;
    }
}

//ke thua hoan toan thuoc tinh cua Job
//can ca cac class con ben trong va cac constructor
class FulltimeJob extends Job {
    constructor(type:string){
        super(type);
    }
    calculateSalary(): number {
        return 10000000;
    }
}

const part = new ParttimeJob("Viec part-time", 30);
const full = new FulltimeJob("Viec fulltime");

part.printType();
console.log(`Luong con viec partTime: ${part.calculateSalary()}`);
full.printType();
console.log(`Luong cong viec fullTime: ${full.calculateSalary()} `);
