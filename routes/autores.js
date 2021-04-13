const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

const autoresController = require('../controller/autoresController');

router.get('/', autoresController.getAutores);
router.get('/:idObra', autoresController.getAutor);
router.post('/', autoresController.postAutor);
router.put('/:idAutor', autoresController.putAutor);
router.delete('/:idAutor', autoresController.delAutor);

module.exports = router;