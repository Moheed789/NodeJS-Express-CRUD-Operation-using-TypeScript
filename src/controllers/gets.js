"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const user_1 = require("../models/user");
const getUsers = (req, res) => {
    res.status(200).json(user_1.users);
};
exports.getUsers = getUsers;
