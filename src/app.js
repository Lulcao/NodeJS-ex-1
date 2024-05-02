const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let livros = [];

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
