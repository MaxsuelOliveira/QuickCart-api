const db = require("../db/database");

const UsuarioModel = {
  criarSeNaoExistir: (uuid, cb) => {
    db.get(`SELECT * FROM usuarios WHERE uuid = ?`, [uuid], (err, row) => {
      if (err) return cb(err);
      if (row) return cb(null); // já existe

      db.run(`INSERT INTO usuarios (uuid) VALUES (?)`, [uuid], cb);
    });
  }
};

module.exports = UsuarioModel;
