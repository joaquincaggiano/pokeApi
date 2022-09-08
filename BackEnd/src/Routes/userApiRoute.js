const express = require("express");
const router = express.Router();
const upload = require("../../multer/multer")

// Requiero el controller
const userController = require("../Controllers/apiUserController");

// Rutas
// Profile
router.get("/user/:id", userController.profile);

// Register
router.post("/user/create", upload.single("file"), userController.createUser);

// Login
router.post("/user/login", userController.processLogin);

module.exports = router;
