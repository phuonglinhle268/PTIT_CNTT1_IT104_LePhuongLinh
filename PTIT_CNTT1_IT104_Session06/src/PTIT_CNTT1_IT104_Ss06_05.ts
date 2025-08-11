interface changeSpeed {
    speedUp (value:number): void;
    slowDown(value:number):void;
    stop(): void;
}
//can nhap vao gtri de in trang thai toc do nhung ko can tra ve gtri do
class Vehicle implements changeSpeed{
    private speed : number;
    constructor(speed:number = 0){
        this.speed = speed;
    }
    speedUp(value: number): void {
        this.speed += value;
        console.log(`Tang toc do: ${value} km/h`);
    }
    slowDown(value: number): void {
        this.speed -= value;
        console.log(`Giam toc do: ${value} km/h`);
    }
    stop(): void {
        this.speed = 0;
        console.log("xe dung");
    }
}
const speedCar = new Vehicle();
speedCar.speedUp(50);
speedCar.slowDown(25);
speedCar.stop();