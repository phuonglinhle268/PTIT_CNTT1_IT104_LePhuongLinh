"use strict";
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        this.age = newAge;
    }
    speak() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    // Ghi đè phương thức (Override)
    speak() {
        console.log("Gau gau");
    }
}
class Cat extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    // Ghi đè phương thức (Override)
    speak() {
        console.log("Meo meo");
    }
}
class Rabbit extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    // Ghi đè phương thức (Override)
    speak() {
        console.log("Kho kho");
    }
}
// Triển khai
const dog = new Dog("Micky", 10, "Dog", "Husky");
dog.setName = "Lu lu";
console.log("Dog: ", dog);
