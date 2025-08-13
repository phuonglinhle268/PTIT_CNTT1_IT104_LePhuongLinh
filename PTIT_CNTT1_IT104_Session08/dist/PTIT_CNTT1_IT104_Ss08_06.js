"use strict";
const findElement = (arr, value) => {
    return arr.find(element => element === value);
};
console.log(findElement([1, 2, 3], 3));
console.log(findElement(['a', 'b', 'c'], 'd'));
