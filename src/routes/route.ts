import express from "express";
import { createUser } from "../controllers/create";
import { getUsers } from "../controllers/gets";
import { getUser } from "../controllers/read";
import { updateUser } from "../controllers/update"; 
import { deleteUser } from "../controllers/delete";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
