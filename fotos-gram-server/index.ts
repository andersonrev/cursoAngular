import Server from "./clases/server";
import userRoutes from "./routes/usuario";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import postRoutes from "./routes/post";

import fileUpload from 'express-fileupload'



const server = new Server();

// midleware // Body parser
server.app.use(bodyParser.urlencoded({extended: true})); // para recibir inf de formato xwww urlencoded
server.app.use( bodyParser.json())


// rutas de mi app
server.app.use('/user', userRoutes)
server.app.use('/posts', postRoutes)

// FileUpload
server.app.use(fileUpload());


// Conexion a bdd


mongoose.connect('mongodb://localhost:49153/fotosgram',
{ useNewUrlParser: true, useCreateIndex: true}, (err)=> {
    if(err) throw err;
    console.log('Base de datos ONLINE')
})



// Levantar express
server.start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port}`)
})