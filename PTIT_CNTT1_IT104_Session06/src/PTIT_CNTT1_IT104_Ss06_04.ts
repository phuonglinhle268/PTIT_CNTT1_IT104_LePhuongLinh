interface Geometry {
    calculateArea() : number;
    calculatePerimeter() : number;
}

class Circle implements Geometry {
    private radius:number;
    constructor( radius:number){
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number{
        return 2 * Math.PI * this.radius;
    }
}
class RectangleCalcu implements Geometry{
    private width:number;
    private height:number;
    constructor(width:number, height:number){
        this.height = height;
        this.width = width;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(10);
console.log("Dien tich hinh tron: ", circle.calculateArea());
console.log("Chu vi hinh tron: ", circle.calculatePerimeter());
const rectangle = new RectangleCalcu(10,3);
console.log("Dien tich hinh chu nhat: ", rectangle.calculateArea());
console.log("Chu vi hinh chu nhat: ", rectangle.calculatePerimeter());