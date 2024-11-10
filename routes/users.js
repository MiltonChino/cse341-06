const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router.get("/", usersController.getAll);

router.get("/:id", usersController.getOne);

router.post("/", usersController.insertUser);

// router.put('/:id', contactsController.updateContact);

// router.delete('/:id', contactsController.deleteContact);

module.exports = router;
