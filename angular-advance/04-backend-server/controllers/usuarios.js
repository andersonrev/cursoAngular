const Usuario = require('../models/usuario')
const { response } = require('express');
const { validationResult } = require('express-validator')

const getUsuarios = async(req,res) => {

  const usuarios = await Usuario.find();
  res.json({
    ok: true,
    usuarios,
  });

}


const crearUsuario = async(req,res = response) => {

  const { email, password, nombre } = req.body;

  const errores = validationResult( req );

  if( !errores.isEmpty() ){
    return res.status(400).json({
      ok: false,
      errores: errores.mapped()
    })
  }

  try {

    const existeEmail = await Usuario.findOne({email});

    if( existeEmail ){
      return res.status(400).json({
        ok: false,
        mensaje: 'El correo ya esta registrado'
      })
    }

    const usuario = new Usuario(req.body);
    await usuario.save();

    res.json({
      ok: true,
      usuario
    });

  }catch(error){

    console.log(error);
    res.status(500).json({
      ok: false,
      mensaje: 'Error inesperado... revisar logs'
    });

  }



}

module.exports = {
  getUsuarios,
  crearUsuario
}
