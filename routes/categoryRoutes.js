const express = require('express');
const categoryRouter = express.Router();
const { categoryCreate, categoryGetById, categoryDelete, categoryUpdate } = require('../controllers/categoryControls');

// categories routes
categoryRouter.post('', categoryCreate);

categoryRouter.get('/:id', categoryGetById);

categoryRouter.delete('/:id', categoryDelete);

categoryRouter.put('/:id', categoryUpdate);

module.exports = categoryRouter;