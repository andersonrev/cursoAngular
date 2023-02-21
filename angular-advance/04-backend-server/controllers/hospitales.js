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


const crearHospitales = async (req, res = response) => {

  const uid = req.uid;
  const hospital = new Hospital({
    usuario: uid,
    ...req.body
  });

  console.log(uid);

  try {

    const hospitalDB = await hospital.save();

    res.json({
      ok: true,
      hospital: hospitalDB
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      mensaje: 'Hable con el admin'
    })
  }

}


const actualizarHospitales = async (req, res = response) => {

  res.json({
    ok: true,
    mensaje: 'actualizarHospitales'
  });

}


const borrarHospitales = async (req, res = response) => {

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
