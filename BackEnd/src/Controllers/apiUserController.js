// Requiero base de datos
const { User, PokeFavorite } = require("../../database/models");

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
      // console.log("REQBODY",req.body)
      console.log("REQFILE", req.file);

      if (!req.body.email || !req.body.userName) {
        return res.status(400).json({
          msg: "BAD REQUEST - COMPLETE USERNAME and EMAIL FIELDS",
        });
      } else {
        userToUpdate.userName = req.body.userName
          ? req.body.userName
          : userToUpdate.userName;
        userToUpdate.email = req.body.email
          ? req.body.email
          : userToUpdate.email;
        userToUpdate.password = req.body.password
          ? bcrypt.hashSync(req.body.password, 10)
          : userToUpdate.password;
        userToUpdate.file = req.file?.filename
          ? req.file.filename
          : userToUpdate.file;

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
  delete: async (req, res) => {
    try {
      await User.destroy({
        where: { id: req.params.id },
      });
    } catch (error) {
      console.log(error);
    }
  },
  pokeUserFavs: async (req, res) => {
    try {
      const allPokeFav = await PokeFavorite.findAll({include: ['users']});
      const filtered = allPokeFav.filter((onePokeFav) => {
        return onePokeFav.users[0].dataValues.id == req.params.id
      })
      res.status(200).json(filtered)
    } catch (error) {
      console.log(error)
    }
  },
  saveUserFavs: async (req, res) => {
    try {
      console.log("req body favs", req.body.id)
      const pokemonToSave = await PokeFavorite.create({
        pokemon: req.body.id
      })
       await pokemonToSave.addUser(req.params.id)
    } catch (error) {
      console.log(error)
    }
  }
};

module.exports = userController;
