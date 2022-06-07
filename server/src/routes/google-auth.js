const express = require("express");
const googleAuthCtrl = require("../controllers/google-auth");
const router = new express.Router();

router.post("/google/login", googleAuthCtrl.googleLogin);
