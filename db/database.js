const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/cesta.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      uuid TEXT PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        telefone TEXT,
      criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS itens_cesta (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      uuid_usuario TEXT,
      produto TEXT,
      produto_imagem TEXT,
      quantidade INTEGER,
      valor_unitario REAL,
      criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (uuid_usuario) REFERENCES usuarios(uuid)
    )
  `);
});

module.exports = db;
