const express = require('express');
const router = express.Router();

const livrosController = require('./src/controllers/livrosController');

router.get('/livros', livrosController.get);
router.get('/livros/:id', livrosController.getBookById);
router.get('/livros/autores', livrosController.getAuthors);
router.get('/livros/generos', livrosController.getGenders);



module.exports = router;