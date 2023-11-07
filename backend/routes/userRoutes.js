import express from "express";
const router = express.Router();

import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
