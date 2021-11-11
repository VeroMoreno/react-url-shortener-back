require('dotenv').config()
require('./util/mongo')

const helmet = require("helmet");
const express = require('express')
const app = express()
const cors = require('cors')
const urlRouter = require('./app/router/url.router')

app.use(cors())
app.use(helmet())
app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({ extended: false}));

app.use(urlRouter)

app.disable('x-powered-by')

// Leer localhost de variables y puerto
// Heroku 0.0.0.0 no es una URL valida pero Heroku lo va a detectar.
// const HOST = process.env.HOST || '0.0.0.0'; // Lo lee de dotenv // caso contrario se encarga Heroku
// Lo va a inyectar Heroku automaticamente
const PORT = process.env.PORT || 3000; // vamos a leer lo que tenga heroku // caso contrario nosotros lo asignamos

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = {app, server}