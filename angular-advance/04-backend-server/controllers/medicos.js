const Medico = require('../models/medico')
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const getMedicos = async (req, res = response) => {

  res.json({
    ok: true,
    mensaje: 'getMedicos'
  });

}


const crearMedico = async (req, res= response) => {

  res.json({
    ok: true,
    mensaje: 'crearMedico'
  });

}


const actualizarMedico = async (req, res=response) => {

  res.json({
    ok: true,
    mensaje: 'actualizarMedico'
  });

}


const borrarMedico = async (req, res=response) => {

  res.json({
    ok: true,
    mensaje: 'borrarMedico'
  });

}

module.exports = {
  getMedicos,
  crearMedico,
  actualizarMedico,
  borrarMedico
}
