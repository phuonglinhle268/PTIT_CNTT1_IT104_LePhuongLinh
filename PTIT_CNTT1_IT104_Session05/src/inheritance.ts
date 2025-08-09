class Person {
  name: string;
  dateOfBirth: string;
  email: string;

  constructor(name: string, dateOfBirth: string, email: string) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
  }
}

class Employee extends Person {
  employeeCode: string;
  salary: number;

  constructor(
    name: string,
    dateOfBirth: string,
    email: string,
    employeeCode: string,
    salary: number
  ) {
    // Truy cập vào tất cả các phuwonhg thức và thuộc tính của lớp cha
    super(name, dateOfBirth, email);
    this.employeeCode = employeeCode;
    this.salary = salary;
  }
}

class Manager extends Person {
  department: string;

  constructor(
    name: string,
    dateOfBirth: string,
    email: string,
    department: string
  ) {
    super(name, dateOfBirth, email);
    this.department = department;
  }
}

const employee = new Employee(
  "Nguyễn Văn A",
  "12/12/2025",
  "nva@gmail.com",
  "NV0001",
  2000000
);

const manager = new Manager(
  "Lê Văn B",
  "12/09/2000",
  "lvb@gmail.com",
  "Phòng giám đốc"
);

// Lớp cha (Vehicle)
class Vehicle {
  // Các thuộc tính chung cho tất cả các phương tiện
  protected brand: string;
  protected model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  // Phương thức chung cho tất cả các phương tiện
  startEngine(): void {
    console.log(`${this.brand} ${this.model} engine started!`);
  }

  stopEngine(): void {
    console.log(`${this.brand} ${this.model} engine stopped!`);
  }
}

// Lớp con (Car) kế thừa từ Vehicle
class Car extends Vehicle {
  private numberOfDoors: number;

  constructor(brand: string, model: string, numberOfDoors: number) {
    super(brand, model); // Gọi constructor của lớp cha
    this.numberOfDoors = numberOfDoors;
  }

  // Phương thức riêng cho Car
  openTrunk(): void {
    console.log(`Opening trunk of ${this.brand} ${this.model}`);
  }

  // Ghi đè phương thức startEngine() từ lớp cha
  startEngine(): void {
    console.log(`Starting car engine: ${this.brand} ${this.model}`);
  }
}

// Lớp con (Truck) kế thừa từ Vehicle
class Truck extends Vehicle {
  private payloadCapacity: number;

  constructor(brand: string, model: string, payloadCapacity: number) {
    super(brand, model); // Gọi constructor của lớp cha
    this.payloadCapacity = payloadCapacity;
  }

  // Phương thức riêng cho Truck
  loadCargo(): void {
    console.log(`Loading cargo into ${this.brand} ${this.model}`);
  }

  // Ghi đè phương thức startEngine() từ lớp cha
  startEngine(): void {
    console.log(`Starting truck engine: ${this.brand} ${this.model}`);
  }
}

// Tạo đối tượng từ các lớp con
const myCar = new Car("Toyota", "Corolla", 4);
myCar.startEngine(); // Gọi phương thức startEngine() đã được ghi đè trong Car
myCar.openTrunk(); // Gọi phương thức riêng của Car

const myTruck = new Truck("Ford", "F-150", 5000);
myTruck.startEngine(); // Gọi phương thức startEngine() đã được ghi đè trong Truck
myTruck.loadCargo(); // Gọi phương thức riêng của Truck