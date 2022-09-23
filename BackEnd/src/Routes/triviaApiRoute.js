const express = require("express");
const router = express.Router();
const upload = require("../../multer/triviaMulter")

// Requiero el controller
const triviaController = require("../Controllers/apiTriviaController");

// Rutas
// Get question
router.get("/random", triviaController.getQuestion);

// Register
// router.post("/create", upload.single("file"), triviaController.createQuestion);

// Update
// router.put("/update/:id", upload.single("file"), triviaController.updateQuestion)

// Delete
// router.delete("/delete/:id", triviaController.deleteQuestion)

module.exports = router;
