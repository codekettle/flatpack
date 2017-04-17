var express = require('express');

module.exports = function (app) {
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        userRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
    authRoutes.post('/register', function (req, res) {
        res.send({message: "Here shoud be AuthenticationController.register function"})
    });
    authRoutes.post('/login', function  (req, res) {
        res.send({message: "Here shoud be AuthenticationController.login function"})
    });

    // User Routes
    apiRoutes.use('/user', userRoutes);
    userRoutes.get('/:user_id/projects', function (req, res) {
        res.send({message: "Here shoud be controller to get all the projects associated to the user"})
    });
    userRoutes.post('/:user_id/projects', function (req, res) {
        res.send({message: "Here shoud be controller to post the project and return some data (the particular project or all projects?)"})
    });
    userRoutes.get('/:user_id/projects/:project_id', function (req, res) {
        res.send({message: "Here shoud be controller to get particular project and return its data"})
    });
    userRoutes.put('/:user_id/projects/:project_id', function (req, res) {
        res.send({message: "Here shoud be controller to update particular project nad return data about updated project"})
    });
    userRoutes.delete('/:user_id/projects/:project_id', function (req, res) {
        res.send({message: "Here shoud be controller to delete particular project and return data about all the projects of particular user"})
    });
 
    // Set up routes
    app.use('/api', apiRoutes);  
}