const express = require('express');
const router = express.Router();

const obrasController = require('../controller/obrasController');


router.get('/', obrasController.getObras);
router.post('/');
router.put('/:id');
router.delete('/:id');

module.exports = router;