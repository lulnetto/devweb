const express = require("express");

const server = express();

server.use(express.json());

const todo = ['Projeto devweb'];

server.get('/tarefas', (req, res) => {
    return res.json(todo);
})

server.post('/tarefas', (req, res) => {
    const { name } = req.body;
    todo.push(name);

    return res.json(todo)
})




server.listen(3000)