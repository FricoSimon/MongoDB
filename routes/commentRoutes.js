const express = require('express');
const commentRouter = express.Router();
const { commentCreate, commentDelete, commentUpdate } = require('../controllers/commentControls');

// comment routes
commentRouter.post('', commentCreate);

commentRouter.delete('/:id', commentDelete);

commentRouter.put('/:id', commentUpdate);

module.exports = commentRouter;