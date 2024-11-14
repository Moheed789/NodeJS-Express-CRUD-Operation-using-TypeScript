import express from "express";
import { users } from "../models/user";

export const deleteUser = (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
  
    if (userIndex === -1) {
      res.status(404).json({ message: "User not found" });
    }
  
    users.splice(userIndex, 1);
    res.status(204).end();
  };
  