"use strict";
function myFilter(arr, value, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], value, i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
const numbers = [1, 2, 2, 3, 4, 5];
const num1 = myFilter(numbers, 2, (element, value) => element === value);
console.log(num1);
const num2 = myFilter(numbers, 10, (element, value) => element === value);
console.log(num2);
