"use strict";
const soNguyenTo = (n) => {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
};
const processInput = (input) => {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) { //ktra input co khop voi bthuc regrex phia trc
            const checkNumber = Number(input); //chuyen chuoi thanh so
            console.log(Math.pow(checkNumber, 2)); //in ra binh phuong
        }
        else {
            const letter = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letter} ki tu chu cai`);
        }
    }
    else if (typeof input === "number") {
        if (soNguyenTo(input)) {
            console.log("Day la so nguyen to");
        }
        else {
            console.log("Day khong phai so nguyen to");
        }
    }
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
    else {
        console.log("Du lieu khong hop le");
    }
};
processInput("ab123");
processInput(9);
processInput(true);
processInput(false);
