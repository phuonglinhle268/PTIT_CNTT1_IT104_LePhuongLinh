const mergeObjects = <T, U>(obj1: T, obj2 : U): T & U => {
    return {...obj1, ...obj2};
};

const person = {name: "Join"};
const job = {role: "Developer"};
console.log(mergeObjects(person,job));