const express = require('express');
const path = require('path');

const app = express();

app.listen(3030, () => {
    console.log('Servidor corriendo correctamente')
});

//requiero el req.body//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Utilizamos PUT y PATCH y DELETE
app.use(methodOverride('_method'));

// Rutas de APIs
const userApiRoute = require("./src/Routes/userApiRoute");
app.use("/api", userApiRoute);
