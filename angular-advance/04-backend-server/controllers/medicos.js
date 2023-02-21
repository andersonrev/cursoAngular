const Medico = require('../models/medico')
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const getMedicos = async (req, res = response) => {

  const medicos = await Medico.find().populate('usuario', 'nombre img')
  .populate('hospital','nombre img');

  res.json({
    ok: true,
    medicos
  });

}


const crearMedico = async (req, res= response) => {

  const uid = req.uid;

  console.log('xd', uid);

  const medico = new Medico({
    usuario: uid,
    ...req.body
  });

  try {

    const medicoDB = await medico.save();

    res.json({
      ok: true,
      medico: medicoDB
    });

  }catch(err){
    console.log(err);
    res.status(500).json({
      ok: false,
      mensaje:'Hable con el admin'
    });
  }

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
