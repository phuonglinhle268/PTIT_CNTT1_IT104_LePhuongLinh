"use strict";
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //getter: lay gtri 1 thuoc tinh trong class
    //co gtri tra ve
    //setter: gan/ cap nhat gtri thuoc tinh
    //nhan dung 1 tham so
    //ko co gtri tra ve
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.height + this.width);
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        if (height < 0) {
            console.log("Chieu dai khong hop le");
        }
        else {
            this.height = height;
        }
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        if (width < 0) {
            console.log("Chieu rong khong hop le");
        }
        else {
            this.width = width;
        }
    }
}
const useRectangle = new Rectangle(20, 10);
console.log(`Chieu dai: ${useRectangle.getHeight()}`);
console.log(`Chieu rong: ${useRectangle.getWidth()}`);
console.log(`Chu vi: ${useRectangle.getPerimeter()}`);
console.log(`Dien tich: ${useRectangle.getArea()}`);
//cap nhat kich thuoc
useRectangle.setHeight(30);
useRectangle.setWidth(9);
console.log(`Chieu dai moi: ${useRectangle.getHeight()}`);
console.log(`Chieu rong moi: ${useRectangle.getWidth()}`);
console.log(`Chu vi: ${useRectangle.getPerimeter()}`);
console.log(`Dien tich: ${useRectangle.getArea()}`);
