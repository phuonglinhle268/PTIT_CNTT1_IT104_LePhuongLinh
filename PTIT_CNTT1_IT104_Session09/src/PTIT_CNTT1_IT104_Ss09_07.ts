const updateUser = <T extends {id:number; name:string; email:string; age?:number}>(
    user: T,
    updates: Partial<Pick<T, 'name'|'email'|'age'>>
): T => {
    const updateUser = {...user};
    if (updates.name){
        updateUser.name = updates.name;
    }
    if (updates.email){
        updateUser.email = updates.email;
    }
    if (updates.age !== undefined){
        updateUser.age = updates.age;
    }
    return updateUser;
}

const user = {id: 1, name: "Alice", email:"alice@example.com"};
const updates = {
    name: "Johnson"
};
updateUser(user, updates);