import express from "express";
import { User, users } from "../models/user";
import { v4 } from "uuid";

export const createUser = (req: express.Request, res: express.Response) => {
  const { name, email, password }: User = req.body;

  const user: User = {
    id: v4(),
    name,
    email,
    password
  };

  users.push(user);
  res.status(201).json(user);
};