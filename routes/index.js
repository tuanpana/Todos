var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Todos App' });
});
router.get('/todos',function(req, res){
	Todo.find(function(err,todos){
		res.json(todos);
	});
});
router.delete('/todos/:todo_id',function(req,res){
	Todo.remove({
		_id:req.params.todo_id
	},function(err,todo){
		Todo.find(function(err,todos){
			res.json(todos);
		});
	});
});
router.post('/todos/add',function(req,res){
	Todo.create({
		text:req.body.text,
		done:false
	},function(err,todo){
		Todo.find(function(err,todos){
			res.json(todos);
		});
	});
});

module.exports = router;
