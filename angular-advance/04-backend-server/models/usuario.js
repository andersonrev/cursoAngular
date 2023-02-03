import { Schema, model } from 'mongoose';

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: true

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String,

  },
  role: {
    type: String,
    required: true,
    default: 'USER_ROLE'

  },
  google: {

    type: Boolean,
    required: false,

  }
});

module.exports = model('Usuario', UsuarioSchema);
