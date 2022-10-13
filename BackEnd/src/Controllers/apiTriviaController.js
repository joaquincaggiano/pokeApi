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
  seeAllQuestions: async (req, res) => {
    try {
      const allQuestions = await PokeTrivia.findAll();
      return res.status(200).json(allQuestions);
    } catch (error) {
      console.error(error);
    }
  },
  createQuestion: async (req, res) => {
      const createTrivia = await PokeTrivia.create(
       { ...req.body,
      image: req.file?.filename}
      );
      console.log('req file', req.file)
      if (createTrivia === null){
        return res.json({
          status: 400,
          msg: 'trivia not created'
        })
      }else{
        return res.json({
          status: 200,
          msg: 'trivia created succesfully'
        })
      }
  },
};

module.exports = triviaController;
