"use strict";
let firstName = "john";
let lastName = "doe";

const inHoa = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
firstName = inHoa(firstName);
lastName = inHoa(lastName);

let fullName = `${firstName} ${lastName}`;
console.log(fullName);
