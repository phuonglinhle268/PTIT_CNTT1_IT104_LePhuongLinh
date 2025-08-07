"use strict";
const handleUnionType = (input) => {
    if (typeof input === "string") {
        console.log(`${input.length}`);
    }
    else if (typeof input === "number") {
        if (input % 2 === 0) {
            console.log("Day la so chan");
        }
        else {
            console.log("Day la so le");
        }
    }
    else {
        console.log("Khong hop le");
    }
};
handleUnionType("demo123");
handleUnionType(10);
