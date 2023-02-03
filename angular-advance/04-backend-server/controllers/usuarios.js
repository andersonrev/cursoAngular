
const getUsuarios = (req,res) => {
  res.json({
    ok: true,
    usuarios: [
      {
        id: 123,
        nombre: 'Anderson'
      }
    ]
  });
}

module.exports = {
  getUsuarios
}
