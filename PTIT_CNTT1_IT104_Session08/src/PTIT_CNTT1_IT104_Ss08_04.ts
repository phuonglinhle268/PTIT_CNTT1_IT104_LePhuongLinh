const merge = <T, U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2};
}
const user1 = {name: "Nguyen Van A", age:20};
const user2 = {email: "nguyenvana@gmail.com"};
console.log(merge(user1, user2));