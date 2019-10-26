const express = require('express');
const router = express.Router();

const livrosController = require('./src/controllers/livrosController');

router.get('/livros', livrosController.get);
router.get('/livros/:id', livrosController.getBookById);
router.get('/livros/autores', livrosController.getAuthors);
router.get('/livros/generos', livrosController.getGenders);
router.get('/autores/ativos', livrosController.getActiveAuthors);
router.get('/autores/:ano/nascimento', livrosController.getAuthorsByDateOfBirth);
router.get('/autores/:id/livros', livrosController.getBooksByAuthor);
router.get('/autores/:id/ativos/livros', livrosController.getBooksFromActiveAuthor);
router.get('/generos/buscar/:nome/livros', livrosController.getBooksByGender);


module.exports = router;