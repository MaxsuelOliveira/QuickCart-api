const express = require("express");
const router = express.Router();
const CestaController = require("../controllers/cesta.controller");

router.post("/:uuid/adicionar", CestaController.adicionar);
router.get("/:uuid", CestaController.listar);
router.put("/:uuid/:id", CestaController.atualizar);
router.delete("/:uuid/:id", CestaController.remover);
router.delete("/:uuid", CestaController.limpar);

module.exports = router;