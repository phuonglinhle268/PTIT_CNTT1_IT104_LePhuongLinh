"use strict";
const updateUser = (user, updates) => {
    const updateUser = Object.assign({}, user);
    if (updates.name) {
        updateUser.name = updates.name;
    }
    if (updates.email) {
        updateUser.email = updates.email;
    }
    if (updates.age !== undefined) {
        updateUser.age = updates.age;
    }
    return updateUser;
};
const user = { id: 1, name: "Alice", email: "alice@example.com" };
const updates = {
    name: "Johnson"
};
updateUser(user, updates);
