abstract class Animal {
    name : string;
    constructor(name : string){
        this.name = name;
    }
    abstract makeNoise():void;

    printName():void{
        console.log(`Ten dong vat: ${this.name}`);
    }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log("meo meo");
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log("gau gau");
    }
}
const cat = new Cat("Meo");
const dog = new Dog("Cho");

cat.printName();
cat.makeNoise();

dog.printName();
dog.makeNoise();