const express = require('express')
const Controller = require('../Controllers/UserController');
const Router = express.Router();

Router.post('/register',Controller.register);
Router.post('/login',Controller.login);
Router.post('/forgetpassword',Controller.update);


module.exports = Router