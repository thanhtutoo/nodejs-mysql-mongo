const express = require('express');

const routes = express.Router();

const TaskController = require('../controllers/todoListController');
// const LikeController = require('./controllers/LikeController');

routes.get('/tasks', TaskController.list_all_tasks);
// routes.post('/tasks', TweetController.store);

// routes.post('/likes/:id', LikeController.store);


module.exports = routes;