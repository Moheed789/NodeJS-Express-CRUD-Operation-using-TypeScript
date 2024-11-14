"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = require("../controllers/create");
const gets_1 = require("../controllers/gets");
const read_1 = require("../controllers/read");
const update_1 = require("../controllers/update");
const delete_1 = require("../controllers/delete");
const router = express_1.default.Router();
router.post("/users", create_1.createUser);
router.get("/users", gets_1.getUsers);
router.get("/user/:id", read_1.getUser);
router.put("/user/:id", update_1.updateUser);
router.delete("/user/:id", delete_1.deleteUser);
exports.default = router;
