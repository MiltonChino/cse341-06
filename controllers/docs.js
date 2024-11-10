const docs = require("../models/Docs");

const getAll = async (req, res) => {
  try {
    const result = await docs.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    handleError(error);
  }
};

const getOne = async (req, res) => {
  try {
    const result = await docs.findById(req.params.id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    // console.log(error);
    handleError(error);
  }
};

const insertDoc = async (req, res) => {
  const newDoc = {
    title: req.body.title,
    description: req.body.description,
  };
  const response = await docs.create(newDoc);
  res.setHeader("Content-Type", "application/json");
  res.status(201).json(response);
  return res;
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
  insertDoc,
  updateContact,
  deleteContact,
};
