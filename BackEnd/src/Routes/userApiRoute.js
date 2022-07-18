const express = require ("express");
const router = express.Router();

// Requiero el controller
const userController = require("../Controllers/apiUserController")

// Rutas
router.get("/user/:id", userController.userDetail)

module.exports = router;