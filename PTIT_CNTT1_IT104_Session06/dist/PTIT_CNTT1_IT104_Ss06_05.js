"use strict";
//can nhap vao gtri de in trang thai toc do nhung ko can tra ve gtri do
class Vehicle {
    constructor(speed = 0) {
        this.speed = speed;
    }
    speedUp(value) {
        this.speed += value;
        console.log(`Tang toc do: ${value} km/h`);
    }
    slowDown(value) {
        this.speed -= value;
        console.log(`Giam toc do: ${value} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log("xe dung");
    }
}
const speedCar = new Vehicle();
speedCar.speedUp(50);
speedCar.slowDown(25);
speedCar.stop();
