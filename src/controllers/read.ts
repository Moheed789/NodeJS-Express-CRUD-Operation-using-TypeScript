import express from "express";
import { users } from "../models/user";

export const getUser = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const user = users.find(p => p.id === id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};