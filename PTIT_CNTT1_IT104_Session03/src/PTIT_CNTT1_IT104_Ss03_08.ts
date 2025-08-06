const number = (value : number | string): number | null => {
    if (typeof value === "number"){
        return value;
    } else {
        const num = Number(value);
        if (isNaN(num)){
            return null;
        } else {
            return num;
        }
    }
};

const cong = (a: number | string, b: number | string): number | string => {
    const num1 = number(a);
    const num2 = number(b);

    if (num1 === null || num2 === null) {
        return "Khong hop le";
    }

    return num1 + num2;
};

const tru = (a: number | string, b: number | string): number | string => {
    const num1 = number(a);
    const num2 = number(b);

    if (num1 === null || num2 === null) {
        return "Khong hop le";
    }

    return num1 - num2;
};

const nhan = (a: number | string, b: number | string): number | string => {
    const num1 = number(a);
    const num2 = number(b);

    if (num1 === null || num2 === null) {
        return "Khong hop le";
    }

    return num1 * num2;
};

const chia = (a: number | string, b: number | string): number | string => {
    const num1 = number(a);
    const num2 = number(b);

    if (num1 === null || num2 === null) {
        return "Khong hop le";
    }

    if (num2 === 0) {
        return "khong chi duoc cho 0";
    }

    return num1 / num2;
};
console.log(cong(1, "3"));
console.log(tru(10,8));

