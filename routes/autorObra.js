const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

const autorObraController = require('../controller/autorObraController');

router.get('/', autorObraController.getAutoresObra);
router.get('/:idObra', autorObraController.getAutorObra);
router.post('/', autorObraController.postAutorObra);
router.put('/:idAutor', autorObraController.putAutorObra);
router.delete('/:idAutor', autorObraController.delAutorObra);

module.exports = router;