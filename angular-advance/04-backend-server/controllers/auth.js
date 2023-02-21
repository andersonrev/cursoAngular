const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

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

    const token = await generarJWT( usuarioDB.id );


    res.json({
      ok: false,
      token
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
