import express from "express";
import { User, users } from "../models/user";

export const updateUser = (req: express.Request, res: express.Response): any => {
  const { id } = req.params;

  console.log("Id", id)
  const { name, email, password }: User = req.body;

  console.log("Received PUT request for user ID:", id);
  console.log("Request body:", req.body);

  let user = users.find(u => u.id === id);

  if (!user) {
    const newUser: User = { id, name, email, password };
    users.push(newUser);
    console.log("New user created:", newUser);
    return res.status(201).json(newUser);
  }

  user.name = name;
  user.email = email;
  user.password = password;

  console.log("User updated:", user);

  return res.status(200).json(user);
};
