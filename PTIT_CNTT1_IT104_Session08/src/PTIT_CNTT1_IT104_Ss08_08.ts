const partialUpdate = <T>(obj: T, updates: Partial<T>): T => (
     {...obj, ...updates}
);
const obj1 = {name:"Alice", age:30, job:"Developer"};
console.log(partialUpdate(obj1, {age:31}));
console.log(partialUpdate(obj1, {name:"Bob", job:"Designer"}));
