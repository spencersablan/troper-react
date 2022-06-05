const express = require("express");
const userCtrl = require("../controllers/user");
const router = new express.Router();

router.get("/user", userCtrl.getUserData);

module.exports = router;
