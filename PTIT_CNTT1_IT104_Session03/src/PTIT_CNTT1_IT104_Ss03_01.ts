const userName : string = "Nguyen Van A";
const age: number = 25;
const job : string = "student";

const info = (name: string, age : number, job : string) : void => {
    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Job: ", job);
};
info(userName, age, job);