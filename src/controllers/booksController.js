let livros = [];  // Simulando uma base de dados em memória

// Adicionar um livro
exports.createBook = (req, res) => {
    const { nome, descricao } = req.body;
    const id = livros.length + 1;
    livros.push({ id, nome, descricao });
    res.status(201).send({ id, nome, descricao });
};

// Listar todos os livros
exports.listBooks = (req, res) => {
    res.status(200).send(livros);
};

// Buscar um livro por ID
exports.getBook = (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (livro) {
        res.status(200).send(livro);
    } else {
        res.status(404).send({ error: 'Livro não encontrado' });
    }
};

// Atualizar um livro inteiro por ID
exports.updateBook = (req, res) => {
    const { nome, descricao } = req.body;
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1) {
        livros[index] = { id: livros[index].id, nome, descricao };
        res.status(200).send(livros[index]);
    } else {
        res.status(404).send({ error: 'Livro não encontrado' });
    }
};

// Atualizar parcialmente um livro por ID
exports.patchBook = (req, res) => {
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1) {
        const updatedBook = { ...livros[index], ...req.body };
        livros[index] = updatedBook;
        res.status(200).send(updatedBook);
    } else {
        res.status(404).send({ error: 'Livro não encontrado' });
    }
};

// Deletar um livro por ID
exports.deleteBook = (req, res) => {
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1) {
        livros.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send({ error: 'Livro não encontrado' });
    }
};
