const express = require('express');

const app = express();

app.get("/message/:id/:user", (req, res) => {
    const { id, name } = req.params;

    res.send(`
    Mensagem ID: ${id},
    Nome do usuário: ${name}
    `)
})

app.get("/users", (req, res) => {
    const { page, limit } = req.query

    res.send(`Página: ${page} Mostrar: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));