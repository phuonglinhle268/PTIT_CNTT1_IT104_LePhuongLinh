const flattern = <T>(obj1: T[][]): T[] => {
    const newArr = obj1.reduce((acc, cur) => {
        return [...acc,...cur];
        //acc ban chat la mang cuoi cung
        //cur: array tai vi tri i
    },[]);
    console.log(newArr);
    return newArr;
}
const listNum = [
    [1, 2], 
    [3, 4], 
    [5, 6],
];
flattern(listNum);

//cach 2
// function flattern<T>(obj1: T[][]): T[]{
//     let result: T[] = [];
//     for (const newArr of obj1) {
//         result = result.concat(newArr);
//     }
//     return result;
// }
// console.log(flattern([
//     [1, 2], 
//     [3, 4], 
//     [5, 6],
// ]));