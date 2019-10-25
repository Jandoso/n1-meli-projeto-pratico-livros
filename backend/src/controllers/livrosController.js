const livros = require('../models/livros.json');

exports.get = (req, res) => {
    res.status(200).send(livros);
};

exports.getBookById = (req, res) => {
    const id = req.params.id;
    const livroId = livros.find(livro => livro.id == id);
    res.status(200).send(livroId);
};

exports.getAuthors = (req, res) => {
    const autores = livros.map(livro => livro.autor);
    res.status(200).send(autores);
};

exports.getGenders = (req, res) => {
    const generos = livros.map(livro => livro.genero);
    res.status(200).send(generos);
};