class VehicleÌnformation {
    public name : string;
    protected year : number;
    private company : string;
    public readonly id : number;

    constructor(id:number, name:string, year:number, company:string){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() : void {
        console.log(`ID: ${this.id}, Ten: ${this.name}, Nam: ${this.year}, Cong ty: ${this.company}`);
    }
}

const vehicle = new VehicleÌnformation(1, "xe dap", 10, "Mini");
console.log(vehicle.printInfo());