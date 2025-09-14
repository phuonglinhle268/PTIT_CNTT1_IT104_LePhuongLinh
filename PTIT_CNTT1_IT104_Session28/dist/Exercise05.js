"use strict";
function checkCondition(condition, callback) {
    let count = 1;
    setInterval(() => {
        callback(condition);
    }, 1000);
}
function display(result) {
    console.log("Dieu kien tra ve: ", result);
}
checkCondition(true, display);
checkCondition(false, display);
