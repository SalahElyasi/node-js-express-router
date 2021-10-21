import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  userUpdate,
} from "../controlers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.post("/", createUser);

router.patch("/:id", userUpdate);

export default router;
