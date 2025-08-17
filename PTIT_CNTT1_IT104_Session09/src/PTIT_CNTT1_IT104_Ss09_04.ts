const withDefault = <T>(value ?: T): T | string => {
    return value !== undefined ? value : "default";
}
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));