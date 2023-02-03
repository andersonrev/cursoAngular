const mongoose = require('mongoose');

const dbConnection = async () => {
  try {

    await mongoose.connect(process.env.DB_CNN);
    console.log('DB Online');

  }catch(error){
    console.log(error);
    throw new Error('Erro al ahora de iniciar la bDD');
  }
}

module.exports = {
 dbConnection
}
