const express = require("express");
const router = express.Router();

const docsController = require("../controllers/docs");

router.get("/", docsController.getAll);

router.get("/:id", docsController.getOne);

router.post("/", docsController.insertDoc);

// router.put('/:id', contactsController.updateContact);

// router.delete('/:id', contactsController.deleteContact);

module.exports = router;
