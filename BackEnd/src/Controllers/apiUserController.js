// Requiero base de datos
const { User } = require("../../database/models");

const userController = {
  profile: (req, res) => {
    console.log("Hola");
  },
  createUser: async (req, res) => {
    let userData = req.body;
    // console.log("USER DATA EN 10", req.body);
    try {
      let isUserInDB = await User.findOne({
        where: {
            email: req.body.email
        }
    });
  
    if (isUserInDB) {
      return res.status(403).json({
        msg: "Email already exist in database"
      })
    }

      const userToCreate = await User.create({ ...userData });
      console.log("usuario creado: ", userData);
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
          email: req.body.email
        },
      });
      if (userToLogin === null){
        return res.status(404).json({
          msg: 'USER NOT FOUND'
        })
      } else if (!req.body.password || !req.body.email ) {
        return res.status(400).json({
          msg: 'BAD REQUEST - COMPLETE ALL FIELDS'
        })
      } else if (userToLogin.password === req.body.password) {
        return res.status(200).json({
          user: userToLogin,
          msg: "USER LOGGED SUCCESFULLY"
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
