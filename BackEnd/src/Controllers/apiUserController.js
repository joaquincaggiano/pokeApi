// Requiero base de datos
const { User } = require("../../database/models");

// bcrypt
const bcrypt = require('bcryptjs');

const userController = {
  profile: (req, res) => {
    console.log("Hola");
  },
  createUser: async (req, res) => {
    let hashPassword = bcrypt.hashSync(req.body.password, 10);

    try {
      let isUserInDB = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (isUserInDB) {
        return res.status(403).json({
          msg: "Email already exist in database",
        });
      }

      const userToCreate = await User.create({ ...req.body, password: hashPassword });
      console.log("usuario creado: ", userToCreate);
      if (userToCreate === null) {
        return res.json({
          status: 400,
          msg: "USUARIO NO CREADO",
        });
      } else {
        return res.json({
          status: 200,
          msg: "USUARIO CREADO",
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  },
  processLogin: async (req, res) => {
    try {
      let userToLogin = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      let passwordCorrect = bcrypt.compareSync(req.body?.password, userToLogin.password);

      if (!req.body.password || !req.body.email) {
        return res.status(400).json({
          msg: "BAD REQUEST - COMPLETE ALL FIELDS",
        });
      } else if (userToLogin === null) {
        return res.status(404).json({
          msg: "USER NOT FOUND",
        });
      } else if (passwordCorrect) {
        return res.status(200).json({
          user: userToLogin,
          msg: "USER LOGGED SUCCESFULLY",
        });
      } else {
        return res.status(401).json({
          msg: "CREDENTIALS DO NOT MATCH",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = userController;
