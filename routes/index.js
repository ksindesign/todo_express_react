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

module.exports = router;
