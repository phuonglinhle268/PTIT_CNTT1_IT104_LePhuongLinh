"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, height, width) {
        super(name);
        //phai goi constructor cua abstract class
        //khoi tao cac thuoc tinh cua lop cha
        this.height = height;
        this.width = width;
    }
    getSize() {
        console.log(`Chieu dai: ${this.width} | Chieu rong: ${this.height}`);
    }
}
const shapeInfo = new Rectangle("Hinh chu nhat", 10, 3);
console.log("Ten hinh: ", shapeInfo.getName());
shapeInfo.getSize();
