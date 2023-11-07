import asyncHandler from "express-async-handler";
import UserModel from "../models/UserModel.js";

// @desc
// route http://localhost:5000/api/user
// type  post
const createUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  if (!name && !email) {
    res.status(404);
    throw new Error("Fill all field");
  }

  const user = {
    name,
    email,
  };

  const newuser = await UserModel.create(user);

  if (newuser) {
    res.status(201).json(newuser);
  } else {
    res.status(400).json({ message: "user not created try again" });
  }
});

// @desc
// route http://localhost:5000/api/user/:id
// type  get
const getUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc
// route http://localhost:5000/api/users
// type  get
const getUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find();

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json({ message: "Users not founded " });
  }
});

// @desc
// route http://localhost:5000/api/user/:id
// type  update
const updateUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  //    find user
  const user = await UserModel.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found !");
  }

  const newUser = {
    name: name || user.name,
    email: email || user.email,
  };

  const updatedUser = await UserModel.findByIdAndUpdate(
    req.params.id,
    newUser,
    { new: true }
  );
  res.status(202).json(updatedUser);
});

// @desc
// route http://localhost:5000/api/user/:id
// type  delete
const deleteUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findByIdAndDelete(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found !");
  }

  res.status(202).json(user._id);
});

export { createUser, getUser, getUsers, deleteUser, updateUser };
