const { client, q } = require('../db');
const { nanoid } = require('nanoid');

const formatTodos = function(query) {
  return {
    title: query.data.title,
    status: query.data.status,
    id: query.data.id,
  };
}

const listTodo = async function() {
  const queryTodo = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('todos'))),
      q.Lambda(x => q.Get(x))
    )
  );

  const result = queryTodo.data.map(q => formatTodos(q));
  return {
    message: 'Got list todo',
    status: 200,
    data: result
  };
}

const createTodo = async function(newTodo) {
  console.log('newTodo: ', newTodo);
  const todo = { title: newTodo, id: nanoid(), status: false };
  const todoValidation = validateTodo(todo);

  if (!todoValidation.valid) {
    return {
      message: todoValidation.message,
      status: todoValidation.status,
      data: {}
    }
  }

  const createdTodo = await client.query(
    q.Create(
      q.Collection('todos'), { data: todo })
  )
  const result = formatTodos(createdTodo);
  return {
    message: 'Todo was created successfully',
    status: todoValidation.status,
    data: result,
  }
}

const editTodo = async function(updateData, ref) {
  if (ref === undefined || ref === null) {
    return {
      message: 'No id provided',
      status: 400,
      data: {},
    };
  }

  dbTodo = await getTodo(ref);
  if (dbTodo === undefined) {
    return {
      message: 'Todo not found',
      status: 400,
      data: {},
    }
  }

  const updatedTodo = {...dbTodo, ...updateData };
  const validationTodo = validateTodo(updatedTodo);
  if (!validationTodo.valid) {
    return {
      message: validationTodo.message,
      status: validationTodo.status,
      data: {}
    }
  }

  const result = await client.query(
    q.Update(q.Ref(q.Collection('todos'), ref), { data: updatedTodo })
  );
  return {
    message: 'Todo was edited successfully',
    status: 200,
    data: formatTodos(result)
  }
}

const deleteTodo = async function(ref) {
  const deletedTodo = await client.query(
    q.Delete(q.Ref(q.Collection('todos'), ref))
  );
  return {
    message: 'Deleted successfully',
    status: 200,
    data: formatTodos(deletedTodo)
  }
}

const getTodo = async function(ref) {
  const queryTodo = await client.query(
    q.Get(q.Ref(q.Collection('todos'), ref))
  );

  return formatTodos(queryTodo);
}

const validateTodo = function(unvalidateTodo) {
  if (unvalidateTodo.title === undefined || unvalidateTodo.title === null) {
    return {
      message: 'todo is undefined or null',
      valid: false,
      status: 400
    }
  }

  return { valid: true, status: 200 , unvalidateTodo };
}

module.exports = {
  listTodo,
  createTodo,
  editTodo,
  deleteTodo
}
