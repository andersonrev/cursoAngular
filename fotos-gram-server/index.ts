import Server from "./clases/server";
import userRoutes from "./routes/usuario";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import postRoutes from "./routes/post";

// import fileUpload from "express-fileupload";
const fileUpload = require('express-fileupload');
import cors from 'cors';



const server = new Server();

// midleware // Body parser
server.app.use(bodyParser.urlencoded({extended: true})); // para recibir inf de formato xwww urlencoded
server.app.use( bodyParser.json())

// FileUpload
server.app.use(fileUpload({
    useTempFiles: true
}));


// rutas de mi app
server.app.use('/user', userRoutes)
server.app.use('/posts', postRoutes)





server.app.post('/', (req, res)=>{
    if(req.files){
      console.log('vea files', req.files)
  
      let file = req.files.file;
      let filename = file.name;
  
      console.log(filename)
  
  
      file.mv('./uploads/'+ filename, function(err){
        if (err){
      res.send(err)
        }else {
      res.send('File Uploaded')
        }
      })
    }
  })
  

// Configurar CORS

server.app.use(cors({origin:true, credential: true}));

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
