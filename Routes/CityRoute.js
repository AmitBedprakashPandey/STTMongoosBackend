const express = require('express')
const CityController = require('../Controllers/CityController');
const Router = express.Router();

Router.post('/',CityController.create);
Router.get('/', CityController.findAll);
Router.post('/:active',CityController.findActiveCities);
Router.put('/:id',CityController.update);
Router.delete('/:id',CityController.delete);
Router.get('/:id',CityController.getById);

module.exports = Router