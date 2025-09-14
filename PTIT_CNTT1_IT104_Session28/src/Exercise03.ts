type callBack = (value:number) => void;

function processArray(arr:number[], callback:callBack) {
    arr.forEach((value, index) => {
        setTimeout(() => {callback(value)}, index*1000);
    });
}

const numbers:number[] = [1,2,3,4,5];
processArray(numbers, (value) => {
    console.log("Phan tu thu: ", value);
})