import express from "express";
import { users } from "../models/user";

export const getUsers = (req: express.Request, res: express.Response) => {
  res.status(200).json(users);
};