const livros = require('../models/livros.json');
const autores = require('../models/autores.json');
const generos = require('../models/generos.json');

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

exports.getBooksByAuthor = (req, res) => {
    const autorId = req.params.id;
    const nomeAutor = autores.find(autor => autor.idAutor == autorId);
    const livrosAutor = livros.filter(livro => livro.autor == nomeAutor.nome);
    res.status(200).send(livrosAutor);
};

exports.getBooksByGender = (req, res) => {
    const genero = req.params.nome;
    const livrosGenero = livros.filter(livro => livro.genero.indexOf(genero) > -1);
    res.status(200).send(livrosGenero);
};

exports.getActiveAuthors = (req, res) => {
    const autoresAtivos = autores.filter(autor => autor.ativo == true);
    res.status(200).send(autoresAtivos);
};

exports.getBooksFromActiveAuthor = (req, res) => {
    const autorId = req.params.id;
    const nomeAutor = autores.find(autor => autor.idAutor == autorId);
    if(nomeAutor.ativo == true){
        const livrosAutorAtivo = livros.filter(livro => livro.autor == nomeAutor.nome);
        res.status(200).send(livrosAutorAtivo);
    }else{
        res.status(404).send("Autor não ativo");
    }; 
};

exports.getAuthorsByDateOfBirth = (req, res) => {
    const ano = req.params.ano;
    const autoresMaisNovos = autores.filter(autor => autor.dataNascimento > ano);
    res.status(200).send(autoresMaisNovos);
};