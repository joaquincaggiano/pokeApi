// Requiero base de datos
const { PokeTrivia } = require("../../database/models");

// console.log("poketrivia", PokeTrivia)
const triviaController = {
  getQuestion: async (req, res) => {
    const allTrivias = await PokeTrivia.findAll(); 
    const randomNumber = Math.ceil(Math.random() * allTrivias.length);
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
      // console.log('req file', req.file)
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
  updateQuestion: async (req, res) => {
    try {
      let triviaToUpdate = await PokeTrivia.findByPk(req.params.id);
      console.log("TRIVIA A ACTUALIZAR",triviaToUpdate);

      if (!req.body) {
        return res.status(400).json({
          msg: "BAD REQUEST - COMPLETE ALL FIELDS",
        });
      } else {
        triviaToUpdate.question = req.body.question
          ? req.body.question
          : triviaToUpdate.question;
        triviaToUpdate.answer1 = req.body.answer1
          ? req.body.answer1
          : triviaToUpdate.answer1;
        triviaToUpdate.answer2 = req.body.answer2
          ? req.body.answer2
          : triviaToUpdate.answer2;
        triviaToUpdate.answer3 = req.body.answer3
          ? req.body.answer3
          : triviaToUpdate.answer3;
        triviaToUpdate.answer4 = req.body.answer4
          ? req.body.answer4
          : triviaToUpdate.answer4;
        triviaToUpdate.correctAnswer = req.body.correctAnswer
          ? req.body.correctAnswer
          : triviaToUpdate.correctAnswer;
        triviaToUpdate.file = req.file?.filename
          ? req.file.filename
          : triviaToUpdate.file;

        triviaToUpdate.save();

        return res.status(200).json({
          trivia: triviaToUpdate,
          msg: "TRIVIA UPDATED SUCCESFULLY",
        });
      }

    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = triviaController;
