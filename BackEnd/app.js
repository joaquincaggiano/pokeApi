const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.listen(3030, () => {
    console.log('Servidor corriendo correctamente en puerto 3030')
});

//requiero el req.body//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Utilizamos PUT y PATCH y DELETE
app.use(methodOverride('_method'));

// Rutas de APIs
const userApiRoute = require("./src/Routes/userApiRoute");
app.use("/api", userApiRoute);
