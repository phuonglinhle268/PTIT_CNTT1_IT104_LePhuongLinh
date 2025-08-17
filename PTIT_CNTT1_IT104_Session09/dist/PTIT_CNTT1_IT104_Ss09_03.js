"use strict";
const mergeObjects = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const person = { name: "Join" };
const job = { role: "Developer" };
console.log(mergeObjects(person, job));
