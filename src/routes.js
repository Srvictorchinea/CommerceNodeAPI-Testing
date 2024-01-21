const express = require('express')
const routes = express.Router()
const { 
    addUserController, 
    getUsersController,
    findUserByUidController,
    updateUserByUidController,
    removeUserByUidController
} = require('./controllers')

//routes

routes.post('/users', addUserController)

routes.get('/users', getUsersController)

routes.get('/users/:uid', findUserByUidController)

routes.put('/users/:uid', updateUserByUidController)

routes.delete('/users/:uid', removeUserByUidController)

module.exports = routes