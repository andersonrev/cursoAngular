const Hospital = require('../models/hospital')
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const getHospitales = async (req, res = response) => {

  res.json({
    ok: true,
    mensaje: 'getHospitales'
  });

}


const crearHospitales = async (req, res= response) => {

  res.json({
    ok: true,
    mensaje: 'crearHospitales'
  });

}


const actualizarHospitales = async (req, res=response) => {

  res.json({
    ok: true,
    mensaje: 'actualizarHospitales'
  });

}


const borrarHospitales = async (req, res=response) => {

  res.json({
    ok: true,
    mensaje: 'borrarHospitales'
  });

}


module.exports = {
  getHospitales,
  crearHospitales,
  actualizarHospitales,
  borrarHospitales
}
