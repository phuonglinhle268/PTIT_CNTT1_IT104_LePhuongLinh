const firstMatch = <T>(array : T[], predicate:(item: T) => boolean): T | undefined => {
    return array.find(predicate);
}
const num = [1,2,4,6];
console.log(firstMatch(num, (n) => n%2 === 0));
const word = ["cat", "house", "car"];
console.log(firstMatch(word, (w) => w.length > 4));