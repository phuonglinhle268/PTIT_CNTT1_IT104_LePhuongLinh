"use strict";
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 duoc thuc thi");
        callback(); //goi ham tiep theo
    }, 1000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 duoc thuc thi");
        callback();
    }, 1500);
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 duoc thuc thi");
        callback();
    }, 2000);
}
task1(() => {
    task2(() => {
        task3(() => {
            console.log("Hoan thanh!");
        });
    });
});
