const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

const obrasController = require('../controller/obrasController');


router.get('/', obrasController.getObras);
router.get('/:idObra', obrasController.getObra);
router.post('/', obrasController.postObras);
router.put('/:idObra', obrasController.putObra);
router.delete('/:idObra');

module.exports = router;