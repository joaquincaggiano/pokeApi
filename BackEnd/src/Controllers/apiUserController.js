// Requiero base de datos
const { User } = require("../../database/models");

// bcrypt
const bcrypt = require("bcryptjs");

const userController = {
  profile: async (req, res) => {
    let isUserInDB = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
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

      // if(req.file?.detectedFileExtension !== ".jpg") {
      //   next(new Error("Invalid file type"));
      // }

      const userToCreate = await User.create({
        ...req.body,
        password: hashPassword,
        file: req.file ? req.file.filename : "default_image.jpeg",
      });
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
      let passwordCorrect;

      let userToLogin = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userToLogin) {
        passwordCorrect = bcrypt.compareSync(
          req.body?.password,
          userToLogin?.password
        );
      }

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
  updateUser: async (req, res) => {
    try {
      let userToUpdate = await User.findByPk(req.params.id);
      console.log("USUARIO A ACTUALIZAR BACK", userToUpdate);

      if (!req.body.email || !req.body.userName) {
        return res.status(400).json({
          msg: "BAD REQUEST - COMPLETE USERNAME and EMAIL FIELDS",
        });
      } else {
        userToUpdate.dataValues.userName = req.body.userName
          ? req.body.userName
          : userToUpdate.dataValues.userName;
        userToUpdate.dataValues.email = req.body.email
          ? req.body.email
          : userToUpdate.dataValues.email;
        userToUpdate.dataValues.password = req.body.password
          ? bcrypt.hashSync(req.body.password, 10)
          : userToUpdate.dataValues.password;
        userToUpdate.dataValues.file = req.file?.file
          ? req.file.file
          : userToUpdate.dataValues.file;

        userToUpdate.save();

        return res.status(200).json({
          user: userToUpdate,
          msg: "USER UPDATED SUCCESFULLY",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
