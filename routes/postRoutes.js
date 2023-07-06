const express = require('express');
const postRouter = express.Router();
const { postCreate, postGetById, postDelete, postUpdate } = require('../controllers/postControls');

// post routes
postRouter.post('', postCreate);

postRouter.get('/:id', postGetById);

postRouter.delete('/:id', postDelete);

postRouter.put('/:id', postUpdate);

module.exports = postRouter;