const Usuario = require('../models/usuario')
const { response } = require('express');
const bcrypt = require('bcryptjs');

const getUsuarios = async (req, res) => {

  const usuarios = await Usuario.find();
  res.json({
    ok: true,
    usuarios,
  });

}


const crearUsuario = async (req, res = response) => {

  const { email, password } = req.body;


  try {

    const existeEmail = await Usuario.findOne({ email });

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        mensaje: 'El correo ya esta registrado'
      })
    }

    const usuario = new Usuario(req.body);

    // Encriptar contrasenia
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);


    await usuario.save();

    res.json({
      ok: true,
      usuario
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({
      ok: false,
      mensaje: 'Error inesperado... revisar logs'
    });

  }



}

const actualizarUsuario = async (req, res = response) => {

  const uid = req.params.id;

  try {

    const usuarioDB = await Usuario.findById(uid);

    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        mensaje: 'No existe un usuario con ese iD'
      });
    }

    //Actualizacion

    const { password, google, email, ...campos } = req.body;

    if (usuarioDB.email !== email) {

      const existeEmail = await Usuario.findOne({ email });
      if (existeEmail) {
        return res.status(400).json({
          ok: false,
          mensaje: 'Ya existe un usuario con ese email'
        })
      }

    }

    campos.email = email;
    const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });


    res.json({
      ok: true,
      usuario: usuarioActualizado
    })

  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      ok: false,
      mensaje: 'Error inesperado'

    });
  }


}

const deleteUsuario = async (req, res = response) => {

  const uid = req.params.id;

  try {

    const usuarioDB = await Usuario.findById(uid);

    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        mensaje: 'No existe un usuario con ese iD'
      });
    }

    await Usuario.findByIdAndDelete(uid);

    res.json(
      {
        ok: true,
        mensaje:'Usuario eliminado'
      }
    )

  } catch (error) {
    console.log('errorsito', error);
    res.status(500).json({
      ok: false,
      mensaje: 'Hable con el admin'
    })
  }

}

module.exports = {
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
  deleteUsuario
}
