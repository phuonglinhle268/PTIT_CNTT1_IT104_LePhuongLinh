type callBack<T> = (element:T, index:number, array: T[]) => void;

function myForEach<T>(arr:T[], callback:callBack<T>){
    for(let i=0; i< arr.length; i++){
        callback(arr[i], i ,arr);
    }
}
const numbers: number[] = [1,2,3,4,5];
myForEach(numbers, (element, index, array) => {
    console.log(`Vi tri: ${index} | Phan tu: ${element} | Mang: ${array}`);
})