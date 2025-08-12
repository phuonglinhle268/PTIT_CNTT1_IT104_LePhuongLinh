class Vehicle {
    protected name : string;
    protected speed : number;
    protected id : number;

    constructor(name:string, speed:number, id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp(value:number) : void {
        this.speed += value;
        console.log("Tang toc");
    }
    slowSpeed(value:number) : void {
        this.speed -= value;
        console.log("Giam toc");
    }
    showSpeed() : void {
        console.log(`Toc do xe: ${this.speed}`);
    }
}
class Bicycle extends Vehicle{
    private gear : number;
    constructor(name: string, speed:number, id:number, gear:number){
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() : void {
        console.log(`ID: ${this.id} | Ten xe: ${this.name} | So banh xe: ${this.gear}`);
        this.showSpeed();
    }
}

const bicycle = new Bicycle("Xe dap", 1, 30, 4);
bicycle.speedUp(50);
bicycle.slowSpeed(25);
bicycle.showInfo();