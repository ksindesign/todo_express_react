const express = require('express');
const router = express.Router();

let todos = [
  {
    id: '123',
    text: 'これはTODOです',
  },
  {
    id: '234',
    text: 'これもTODOです',
  },
];

// 既存TODOを取得
router.get('/todos', (req, res) => {
  res.send(todos);
});

// TODOを追加
router.post('/todos', (req, res) => {
  const todo = req.body;

  if (!todo.text) {
    return res.status(400).send('テキストは必須です');
  }

  todo.id = Date.now().toString();
  todos.push(todo);
  res.send(todo);
});

// TODOを削除
router.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});

// TODOを更新
router.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos[index].text = text;
    res.send(todos[index]);
  } else {
    res.status(404).send('Todo not found');
  }
});

module.exports = router;
