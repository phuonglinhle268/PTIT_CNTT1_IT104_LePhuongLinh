abstract class Shape {
    name : string;

    constructor(name:string){
        this.name = name;
    }
    
    getName(): string {
        return this.name;
    }

    abstract getSize(): void;
}
class Rectangle extends Shape {
    height : number;
    width : number;

    constructor(name:string, height:number, width:number){
        super(name);
        //phai goi constructor cua abstract class
        //khoi tao cac thuoc tinh cua lop cha
        this.height = height;
        this.width = width;
    }
    getSize(): void {
        console.log(`Chieu dai: ${this.width} | Chieu rong: ${this.height}`);
    }
}

const shapeInfo = new Rectangle("Hinh chu nhat", 10, 3);
console.log("Ten hinh: ", shapeInfo.getName());
shapeInfo.getSize();
