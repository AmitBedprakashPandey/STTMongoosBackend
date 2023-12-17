const express = require('express')
const Controller = require('../Controllers/FinancialYearController');
const Router = express.Router();

Router.post('/',Controller.create);
Router.get('/', Controller.findAll);
Router.post('/:active',Controller.findActiveCities);
Router.put('/:id',Controller.update);
Router.delete('/:id',Controller.delete);
Router.get('/:id',Controller.getById);

module.exports = Router