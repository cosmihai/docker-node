const ToDo = require('../models/todo');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const toDos = await ToDo.find();
  res.status(200).render('todos', { toDos })
});

router.post('/', async (req, res) => {
  if(req.body.todo.length < 6) return res.status(400).render('todos', {message: 'todo\'s length must be at least 6 characteres long' });
  await ToDo.create({description: req.body.todo})
  res.status(200).redirect('/todos')
});

router.post('/delete/:id', async (req, res) => {
  await ToDo.findByIdAndRemove(req.params.id)
  res.status(200).redirect('/todos')
});

module.exports = router;