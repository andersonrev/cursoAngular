const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

const login = async ( req, res = response ) => {

  const { email, password } = req.body;

  try {

    // verificar email
    const usuarioDB = await Usuario.findOne({email});

    if( !usuarioDB ){
      return res.status(404).json(
        {
          ok: false,
          mensaje: 'Email no encontrado'
        }
      )
    }

    // Verificar contrasenia
    //
    
    const validPassword = bcrypt.compareSync( password, usuarioDB.password );

    if( !validPassword ){
      return res.status(400).json({
        ok: false,
        mensaje: 'Contrasenia no valida'
      })
    }

    // Generar el JWT


    res.json({
      ok: false,
      mensaje: 'Hola mundo'
    })

  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      mensaje: 'Hable con el admin'
    })
  }
}

module.exports = {
  login
}
