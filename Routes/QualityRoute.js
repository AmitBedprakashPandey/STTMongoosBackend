const express = require('express')
const Controller = require('../Controllers/QualityController');
const Router = express.Router();

Router.post('/',Controller.create);
Router.get('/', Controller.findAll);
Router.put('/:id',Controller.update);
Router.delete('/:id',Controller.delete);

module.exports = Router