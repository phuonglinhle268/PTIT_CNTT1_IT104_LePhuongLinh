"use strict";
function processArray(arr, callback) {
    arr.forEach((value, index) => {
        setTimeout(() => { callback(value); }, index * 1000);
    });
}
const numbers = [1, 2, 3, 4, 5];
processArray(numbers, (value) => {
    console.log("Phan tu thu: ", value);
});
