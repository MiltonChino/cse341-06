const User = require("../models/Users");

const getAll = async (req, res) => {
  try {
    const result = await User.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    res.status(404);
    return res.send("No users found");
  }
};

const getOne = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    // console.log(error);
    res.status(404);
    return res.send("User not found");
  }
};

const insertUser = async (req, res) => {
  const data = req.body.user;
  try {
    const newUser = new User({
      user: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        level: data.level,
      },
    });
    console.log(newUser);

    await newUser.save();
    if (newUser._id) {
      res.status(201).json(`User ${newUser._id} created`);
    } else {
      res
        .status(500)
        .json(newUser.error || "An error occurred while creating the contact.");
    }
  } catch (error) {
    res.status(500);
    res.send(error || "Internal Server Error");
  }
};

const updateContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongo;
};

const deleteContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const response = await mongo;
};

module.exports = {
  getAll,
  getOne,
  insertUser,
  updateContact,
  deleteContact,
};
