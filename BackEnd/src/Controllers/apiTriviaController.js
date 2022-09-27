// Requiero base de datos
const { PokeTrivia } = require("../../database/models");

// console.log("poketrivia", PokeTrivia)
const triviaController = {
  getQuestion: async (req, res) => {
    const randomNumber = Math.ceil(Math.random() * 20);
    try {
      const oneQuestion = await PokeTrivia.findByPk(randomNumber);
      return res.status(200).json(oneQuestion);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = triviaController;
