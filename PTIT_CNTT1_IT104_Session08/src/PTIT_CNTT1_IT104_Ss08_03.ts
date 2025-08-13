function reserveArray <T>(arr: T[]): T[]{
    return arr.slice().reverse();
    //slice: tao mang copy ma ko thay doi mang goc
}
console.log(reserveArray([1,2,3]));
console.log(reserveArray(['a', 'b', 'c']));