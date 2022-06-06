const express = require("express");
const userCtrl = require("../controllers/user");
const router = new express.Router();

router.get("/:id", userCtrl.getUserData);

router.post("/", userCtrl.createUser);

module.exports = router;
