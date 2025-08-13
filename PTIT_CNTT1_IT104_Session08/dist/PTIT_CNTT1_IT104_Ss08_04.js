"use strict";
const merge = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const user1 = { name: "Nguyen Van A", age: 20 };
const user2 = { email: "nguyenvana@gmail.com" };
console.log(merge(user1, user2));
