const db = require("../db/database");

const CestaModel = {
  adicionarItem: (uuid, produto, quantidade, valor_unitario, produto_imagem ,  cb) => {
    db.run(
      `INSERT INTO itens_cesta (uuid_usuario, produto, quantidade, valor_unitario , produto_imagem) VALUES (?, ?, ?, ? , ?)`,
      [uuid, produto, quantidade, valor_unitario , produto_imagem],
      function (err) {
        cb(err, this?.lastID);
      }
    );
  },

  listarItens: (uuid, cb) => {
    db.all(`SELECT * FROM itens_cesta WHERE uuid_usuario = ?`, [uuid], cb);
  },

  atualizarItem: (uuid, id, produto, quantidade, valor_unitario, cb) => {
    db.run(
      `UPDATE itens_cesta SET produto = ?, quantidade = ?, valor_unitario = ? WHERE id = ? AND uuid_usuario = ?`,
      [produto, quantidade, valor_unitario, id, uuid],
      cb
    );
  },

  removerItem: (uuid, id, cb) => {
    db.run(`DELETE FROM itens_cesta WHERE id = ? AND uuid_usuario = ?`, [id, uuid], cb);
  },

  limparCesta: (uuid, cb) => {
    db.run(`DELETE FROM itens_cesta WHERE uuid_usuario = ?`, [uuid], cb);
  }
};

module.exports = CestaModel;
