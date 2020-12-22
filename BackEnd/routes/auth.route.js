const router = require('express').Router();
const userController = require('../controllers/auth.controller.js');

module.exports = function(app, passport) {
    router.get('/',userController.getUser);
}

