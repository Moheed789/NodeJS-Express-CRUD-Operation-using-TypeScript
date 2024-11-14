"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const user_1 = require("../models/user");
const updateUser = (req, res) => {
    const { id } = req.params;
    console.log("Id", id);
    const { name, email, password } = req.body;
    console.log("Received PUT request for user ID:", id);
    console.log("Request body:", req.body);
    let user = user_1.users.find(u => u.id === id);
    if (!user) {
        const newUser = { id, name, email, password };
        user_1.users.push(newUser);
        console.log("New user created:", newUser);
        return res.status(201).json(newUser);
    }
    user.name = name;
    user.email = email;
    user.password = password;
    console.log("User updated:", user);
    return res.status(200).json(user);
};
exports.updateUser = updateUser;
