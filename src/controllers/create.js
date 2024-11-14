"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_1 = require("../models/user");
const uuid_1 = require("uuid");
const createUser = (req, res) => {
    const { name, email, password } = req.body;
    const user = {
        id: (0, uuid_1.v4)(),
        name,
        email,
        password
    };
    user_1.users.push(user);
    res.status(201).json(user);
};
exports.createUser = createUser;
