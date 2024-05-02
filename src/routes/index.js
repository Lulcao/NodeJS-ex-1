const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.post('/livro', booksController.createBook);
router.get('/livros', booksController.listBooks);
router.get('/livro/:id', booksController.getBook);
router.put('/livro/:id', booksController.updateBook);
router.patch('/livro/:id', booksController.patchBook);
router.delete('/livro/:id', booksController.deleteBook);

module.exports = router;

// Cadastrar livro
app.post('/livro', (req, res) => {
    const { nome, descricao } = req.body;
    const id = livros.length + 1;
    livros.push({ id, nome, descricao });
    res.status(201).send({ id, nome, descricao });
  });
  
  // Listar todos os livros
  app.get('/livros', (req, res) => {
    res.status(200).send(livros);
  });
  
  // Visualizar um livro específico
  app.get('/livro/:id', (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (livro) {
      res.status(200).send(livro);
    } else {
      res.status(404).send({ error: 'Livro não encontrado' });
    }
  });
  
  // Editar livro com PUT
  app.put('/livro/:id', (req, res) => {
    const { nome, descricao } = req.body;
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1) {
      livros[index] = { id: livros[index].id, nome, descricao };
      res.status(200).send(livros[index]);
    } else {
      res.status(404).send({ error: 'Livro não encontrado' });
    }
  });
  
  // Editar livro com PATCH
  app.patch('/livro/:id', (req, res) => {
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1) {
      const updatedBook = { ...livros[index], ...req.body };
      livros[index] = updatedBook;
      res.status(200).send(updatedBook);
    } else {
      res.status(404).send({ error: 'Livro não encontrado' });
    }
  });
  
  // Deletar livro
  app.delete('/livro/:id', (req, res) => {
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1) {
      livros.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send({ error: 'Livro não encontrado' });
    }
  });
  