type callBack<T> = (element: T, value: T, index: number, array: T[]) => boolean;

function myFilter<T>(arr: T[], value: T, callback: callBack<T>): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], value, i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers: number[] = [1, 2, 2, 3, 4, 5];

const num1 = myFilter(numbers, 2, (element, value) => element === value);
console.log(num1);

const num2 = myFilter(numbers, 10, (element, value) => element === value);
console.log(num2); 
