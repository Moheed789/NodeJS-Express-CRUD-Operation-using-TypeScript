"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const user_1 = require("../models/user");
const deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = user_1.users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        res.status(404).json({ message: "User not found" });
    }
    user_1.users.splice(userIndex, 1);
    res.status(204).end();
};
exports.deleteUser = deleteUser;
