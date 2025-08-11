"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class RectangleCalcu {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(10);
console.log("Dien tich hinh tron: ", circle.calculateArea());
console.log("Chu vi hinh tron: ", circle.calculatePerimeter());
const rectangle = new RectangleCalcu(10, 3);
console.log("Dien tich hinh chu nhat: ", rectangle.calculateArea());
console.log("Chu vi hinh chu nhat: ", rectangle.calculatePerimeter());
