"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const post_1 = __importDefault(require("./routes/post"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
// const fileUpload = require('express-fileupload');
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
// midleware // Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true })); // para recibir inf de formato xwww urlencoded
server.app.use(body_parser_1.default.json());
// FileUpload
server.app.use(express_fileupload_1.default({
    useTempFiles: true
}));
// rutas de mi app
server.app.use('/user', usuario_1.default);
server.app.use('/posts', post_1.default);
// server.app.post('/', (req, res)=>{
//     if(req.files){
//       console.log('vea files', req.files)
//       let file = req.files.file;
//       let filename = file.name;
//       console.log(filename)
//       file.mv('./uploads/'+ filename, function(err){
//         if (err){
//       res.send(err)
//         }else {
//       res.send('File Uploaded')
//         }
//       })
//     }
//   })
// Configurar CORS
server.app.use(cors_1.default({ origin: true, credential: true }));
// Conexion a bdd
mongoose_1.default.connect('mongodb://localhost:49153/fotosgram', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err)
        throw err;
    console.log('Base de datos ONLINE');
});
// Levantar express
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});
