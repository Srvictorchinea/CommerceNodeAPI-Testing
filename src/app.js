//app
const express = require('express')
const pino = require("pino-http")()
const app = express()
app.use(pino)
app.use(express.json())
//data/users
const {getUsers, addUsers, findUserByUid, updateUserByUid, removeUserByUid} = require('./data/user')
//endpoints
const router = express.Router()
const users = []

router.post('/users', (req, res) => {
    const {name, address, age, uid} = req.body
    addUsers({name, address, age, uid})
    return res.status(201).send({ message: 'success' })
})

router.get('/users', (req, res) => {
    return res.status(200).send(getUsers)
})

router.get('/users/:uid', (req, res) => {
    const { uid } = req.params
    const user = findUserByUid({ uid })

    return res.status(200).send(user)
})

router.put('/users/:uid', (req, res) => {
    const { name, address, age } = req.body
    const { uid } = req.params

    const usersUpdate = updateUserByUid({ uid, name, address, age})

    return res.status(200).send(usersUpdate)
})


router.delete('/users/:uid', (req, res) => {
    const { uid } = req.params
    const usersUpdate = removeUserByUid({ uid })

    return res.status(200).send(usersUpdate)
})


app.use(router)

module.exports = app