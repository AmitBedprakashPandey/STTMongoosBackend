const express = require('express')
const Controller = require('../Controllers/CatagoryController');
const Router = express.Router();

Router.post('/',Controller.create);
Router.get('/', Controller.findAll);
Router.put('/:id',Controller.update);
Router.delete('/:id',Controller.delete);

module.exports = Router