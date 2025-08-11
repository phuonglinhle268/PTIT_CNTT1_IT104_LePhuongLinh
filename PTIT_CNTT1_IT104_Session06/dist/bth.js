"use strict";
// Abstract class Animal
class Animal {
    constructor(name, age, category, foodType) {
        this.name = name;
        this.age = age;
        this.category = category;
        this.foodType = foodType;
    }
    getDetails() {
        return `Name: ${this.name} - Age: ${this.age} - Category: ${this.category} - FoodType: ${this.foodType}`;
    }
}
// Mammal class (subclass of Animal)
class Mammal extends Animal {
    constructor(name, age, furColor) {
        super(name, age, "Mammal", "Carnivore");
        this.furColor = furColor;
    }
    get getFurColor() {
        return this.furColor;
    }
    set setFurColor(furColor) {
        this.furColor = furColor;
    }
    sound() {
        return "Roar!";
    }
    move() {
        console.log("Running...");
    }
    feed() {
        console.log("Feeding on meat...");
    }
}
// Bird class (subclass of Animal)
class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age, "Bird", "Omnivore");
        this.wingSpan = wingSpan;
    }
    sound() {
        return "Chirp!";
    }
    move() {
        console.log("Flying...");
    }
    feed() {
        console.log("Eating seeds...");
    }
}
// Reptile class (subclass of Animal)
class Reptile extends Animal {
    constructor(name, age, venomous) {
        super(name, age, "Reptile", "Carnivore");
        this.venomous = venomous;
    }
    sound() {
        return "Hiss!";
    }
    move() {
        console.log("Slithering...");
    }
    feed() {
        console.log("Feeding on small animals...");
    }
}
// Zookeeper class
class Zookeeper {
    careForAnimal(animal) {
        console.log(`Caring for the animal: ${animal.name}`);
        animal.move();
        animal.feed();
    }
    report(animal) {
        console.log(`Report for ${animal.name}: ${animal.getDetails()}`);
        console.log(`Sound: ${animal.sound()}`);
        console.log(`Last fed: ${animal.feed()}`);
    }
}
// Tạo danh sách các loài động vật
const animals = [
    new Mammal("Lion", 10, "Golden"),
    new Bird("Eagle", 5, 2.5),
    new Reptile("Cobra", 2, true),
];
// Hiển thị danh sách các loài động vật
animals.forEach((animal) => {
    console.log(animal.getDetails());
    animal.move();
    console.log(animal.sound());
    animal.feed();
});
// Zookeeper actions
const zookeeper = new Zookeeper();
animals.forEach((animal) => {
    zookeeper.careForAnimal(animal);
    zookeeper.report(animal);
});
