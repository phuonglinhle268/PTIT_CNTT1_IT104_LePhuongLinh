const findElement = <T>(arr : T[], value: T): T | undefined => {
    return arr.find(element => element === value);
}
console.log(findElement([1,2,3], 3));
console.log(findElement(['a', 'b', 'c'], 'd'));