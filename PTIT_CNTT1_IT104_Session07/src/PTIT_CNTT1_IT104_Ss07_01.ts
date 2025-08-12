class Employee {
    public name : string;
    protected company : string;
    private phone : string;

    constructor(name:string, company:string, phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Ten: ${this.name}`);
        console.log(`Cong ty: ${this.company}`);
        console.log(`So dien thoai: ${this.phone}`);
    }
}
class Manager extends Employee{
    teamSize : number;
    constructor(name:string, company:string, phone:string, teamSize:number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Team size: ${this.teamSize}`);
    }
}

