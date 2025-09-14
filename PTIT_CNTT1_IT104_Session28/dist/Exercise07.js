"use strict";
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
const numbers = [1, 2, 3, 4, 5];
myForEach(numbers, (element, index, array) => {
    console.log(`Vi tri: ${index} | Phan tu: ${element} | Mang: ${array}`);
});
