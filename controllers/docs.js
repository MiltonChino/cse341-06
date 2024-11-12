const Doc = require("../models/Docs");

const getAll = async (req, res) => {
  try {
    const result = await Doc.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    res.status(404);
    return res.send("No document found");
  }
};

const getOne = async (req, res) => {
  try {
    const result = await Doc.findById(req.params.id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    res.status(404);
    return res.send("Document not found");
  }
};

const insertDoc = async (req, res) => {
  const data = req.body.doc;
  try {
    const newDoc = new Doc({
      doc: {
        title: data.title,
        description: data.description,
        sentBy: data.sentBy,
        updatedBy: data.updatedBy,
        source: data.source,
        approval: data.approval,
      },
    });
    console.log(newDoc);

    await newDoc.save();
    if (newDoc._id) {
      res.status(201).json(`User ${newDoc._id} created`);
    } else {
      res
        .status(500)
        .json(newDoc.error || "An error occurred while creating the contact.");
    }
  } catch (error) {
    res.status(500);
    res.send(error || "Internal Server Error");
  }
};

const updateDoc = async (req, res) => {
  const data = req.body;
  try {
    const updatedDoc = {
      doc: {
        title: data.title,
        description: data.description,
        sentBy: data.sentBy,
        updatedBy: data.updatedBy,
        source: data.source,
        approval: data.approval,
      },
    };
    console.log(updatedDoc);
    const result = await Doc.findById(req.params._id);
    console.log(result);
    // .save();
    res.status(201).json(`User ${updatedDoc._id} updated`);
  } catch (error) {
    res.status(500);
    res.send(error || "Internal Server Error");
  }
};

const deleteDoc = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const response = await mongo;
};

module.exports = {
  getAll,
  getOne,
  insertDoc,
  updateDoc,
  deleteDoc,
};
