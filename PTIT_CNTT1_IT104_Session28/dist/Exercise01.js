"use strict";
function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum);
}
calculate(1, 2, (result) => {
    console.log(result);
});
