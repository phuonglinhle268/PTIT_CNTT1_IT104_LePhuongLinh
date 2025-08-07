"use strict";
const input = "banana";
const duplicate = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
};
console.log(duplicate(input));
