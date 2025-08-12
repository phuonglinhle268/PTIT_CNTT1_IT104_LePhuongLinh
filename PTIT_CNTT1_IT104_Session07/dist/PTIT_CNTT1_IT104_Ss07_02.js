"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp(value) {
        this.speed += value;
        console.log("Tang toc");
    }
    slowSpeed(value) {
        this.speed -= value;
        console.log("Giam toc");
    }
    showSpeed() {
        console.log(`Toc do xe: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`ID: ${this.id} | Ten xe: ${this.name} | So banh xe: ${this.gear}`);
        this.showSpeed();
    }
}
const bicycle = new Bicycle("Xe dap", 1, 30, 4);
bicycle.speedUp(50);
bicycle.slowSpeed(25);
bicycle.showInfo();
