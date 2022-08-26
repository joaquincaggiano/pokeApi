// Requiero base de datos
const { User } = require("../../database/models");

const userController = {
  profile: (req, res) => {
    console.log("Hola");
  },
  createUser: async (req, res) => {
    let userData = req.body;
    console.log("USER DATA EN 10", req.body);
    try {
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
    let userToLogin = await User.findOne({
      where: {
        email: req.body.email,
        // password: req.body.password
      },
    });

    if (userToLogin.password === req.body.password) {
      return res.status(200).json({
        user: userToLogin
      });
    } else {
      return res.status(400).json({
        msg: "NO SE PUDO LOGEAR",
      });
    }
  },
};

module.exports = userController;
