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

const updateUser = async (req, res) => {
  const data = req.body.user;
  try {
    const newInfo = {
      user: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        level: data.level,
      },
    };
    console.log(newInfo);
    const result = await User.findById(req.params.id);
    // console.log("user found");
    // console.log(result.user.firstName);
    result.user.firstName = newInfo.user.firstName;
    result.user.lastName = newInfo.user.lastName;
    result.user.email = newInfo.user.email;
    result.user.level = newInfo.user.level;
    await result.save();
    res.status(201).json(`User ${result._id} updated`);
  } catch (error) {
    res.status(500);
    res.send(error || "Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const response = await mongo;
};

module.exports = {
  getAll,
  getOne,
  insertUser,
  updateUser,
  deleteUser,
};
