// Requiero base de datos
const {User} = require('../../database/models')

const userController = {
    userDetail: (req, res) => {
        console.log("Hola");
    },
    createUser: async (req, res) => {
        let userData = req.body
        console.log("USER DATA EN 10", req.body)
        // {...req.body}
       try{
        await User.create(...userData)
        console.log("usuario creado: ", userData)
    }
    catch(err){
    console.log("error", err)
    }
}
}

module.exports = userController;