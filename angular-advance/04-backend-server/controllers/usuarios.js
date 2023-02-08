const Usuario = require('../models/usuario')

const getUsuarios = async(req,res) => {
  const usuarios = await Usuario.find();
  res.json({
    ok: true,
    usuarios,
  });
}


const crearUsuario = async(req,res) => {


  const usuario = new Usuario(req.body);

  await usuario.save();
  
  res.json({
    ok: true,
    usuario
  });
}

module.exports = {
  getUsuarios,
  crearUsuario
}
