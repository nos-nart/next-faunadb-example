const express = require('express');
const { request, response } = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', async (request, response) => {
  const todos = await controller.listTodo();

  return response.status(todos.status).json(todos);
});

router.post('/new', async (request, response) => {
  const newTodo = request.body.title;

  const createResult = await controller.createTodo(newTodo);

  return response.status(createResult.status).json(createResult)
});

router.patch('/edit/:id', async (request, response) => {
  const updateTodo = request.body;
  const ref = request.params.id;

  const updateResult = await controller.editTodo(updateTodo, ref);

  return response.status(updateResult.status).json(updateResult);
})

router.delete('/delete/:id', async (request, response) => {
  const ref = request.params.id;

  const deleteResult = await controller.deleteTodo(ref);
  return response.status(deleteResult.status).json(deleteResult);
})

module.exports = router;
