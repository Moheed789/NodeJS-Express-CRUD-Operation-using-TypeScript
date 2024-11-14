"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const user_1 = require("../models/user");
const getUser = (req, res) => {
    const { id } = req.params;
    const user = user_1.users.find(p => p.id === id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
};
exports.getUser = getUser;
