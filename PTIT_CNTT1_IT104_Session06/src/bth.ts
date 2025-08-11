// Interface for Animal
interface IAnimal {
  name: string;
  age: number;
  category: string;
  sound(): string;
  getDetails(): string;
  move(): void;
  feed(): void;
}

// Abstract class Animal
abstract class Animal implements IAnimal {
  name: string;
  age: number;
  category: string;
  foodType: string;

  constructor(name: string, age: number, category: string, foodType: string) {
    this.name = name;
    this.age = age;
    this.category = category;
    this.foodType = foodType;
  }

  getDetails(): string {
    return `Name: ${this.name} - Age: ${this.age} - Category: ${this.category} - FoodType: ${this.foodType}`;
  }

  abstract sound(): string;

  abstract move(): void;

  abstract feed(): void;
}

// Mammal class (subclass of Animal)
class Mammal extends Animal {
  private furColor: string;

  constructor(name: string, age: number, furColor: string) {
    super(name, age, "Mammal", "Carnivore");
    this.furColor = furColor;
  }

  get getFurColor() {
    return this.furColor;
  }

  set setFurColor(furColor: string) {
    this.furColor = furColor;
  }

  sound(): string {
    return "Roar!";
  }

  move(): void {
    console.log("Running...");
  }

  feed(): void {
    console.log("Feeding on meat...");
  }
}

// Bird class (subclass of Animal)
class Bird extends Animal {
  wingSpan: number;

  constructor(name: string, age: number, wingSpan: number) {
    super(name, age, "Bird", "Omnivore");
    this.wingSpan = wingSpan;
  }

  sound(): string {
    return "Chirp!";
  }

  move(): void {
    console.log("Flying...");
  }

  feed(): void {
    console.log("Eating seeds...");
  }
}

// Reptile class (subclass of Animal)
class Reptile extends Animal {
  venomous: boolean;

  constructor(name: string, age: number, venomous: boolean) {
    super(name, age, "Reptile", "Carnivore");
    this.venomous = venomous;
  }

  sound(): string {
    return "Hiss!";
  }

  move(): void {
    console.log("Slithering...");
  }

  feed(): void {
    console.log("Feeding on small animals...");
  }
}

// Zookeeper class
class Zookeeper {
  careForAnimal(animal: Animal): void {
    console.log(`Caring for the animal: ${animal.name}`);
    animal.move();
    animal.feed();
  }

  report(animal: Animal): void {
    console.log(`Report for ${animal.name}: ${animal.getDetails()}`);
    console.log(`Sound: ${animal.sound()}`);
    console.log(`Last fed: ${animal.feed()}`);
  }
}

// Interface  FeedingBehavior
interface FeedingBehavior {
  feed(): void;
}

// Tạo danh sách các loài động vật
const animals: Animal[] = [
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