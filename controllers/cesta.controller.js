const Usuario = require("../models/usuario.model");
const Cesta = require("../models/cesta.model");

module.exports = {
  adicionar: (req, res) => {
    const { uuid } = req.params;
    const { produto, quantidade, valor_unitario , produto_imagem } = req.body;

    Usuario.criarSeNaoExistir(uuid, (err) => {
      if (err) return res.status(500).json({ erro: err.message });

      Cesta.adicionarItem(uuid, produto, quantidade, valor_unitario, produto_imagem , (err, id) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json({ id, mensagem: "Item adicionado à cesta." });
      });
    });
  },

  listar: (req, res) => {
    const { uuid } = req.params;
    Cesta.listarItens(uuid, (err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    });
  },

  atualizar: (req, res) => {
    const { uuid, id } = req.params;
    const { produto, quantidade, valor_unitario } = req.body;

    Cesta.atualizarItem(uuid, id, produto, quantidade, valor_unitario, (err) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json({ mensagem: "Item atualizado." });
    });
  },

  remover: (req, res) => {
    const { uuid, id } = req.params;
    Cesta.removerItem(uuid, id, (err) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json({ mensagem: "Item removido." });
    });
  },

  limpar: (req, res) => {
    const { uuid } = req.params;
    Cesta.limparCesta(uuid, (err) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json({ mensagem: "Cesta esvaziada." });
    });
  }
};
