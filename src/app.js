//app
const express = require('express')
const pino = require("pino-http")()
const app = express()
app.use(pino)
app.use(express.json())
//endpoints
const router = express.Router()
const users = []

router.post('/users', (req, res) => {
    const {name, address, age, uid} = req.body
    users.push({name, address, age, uid})
    return res.status(201).send(users)
})

router.get('/users', (req, res) => {
    return res.status(200).send(users)
})

router.get('/users/:uid', (req, res) => {
    const {uid} = req.params
    const user = users.find(({uid: userUid}) => userUid === uid)

    return res.status(200).send(user)
})

router.put('/users/:uid', (req, res) => {
    const {name, address, age} = req.body
    const {uid} = req.params

    const usersUpdate = users.map((user) => {
        if (user.uid === uid) {
            return { ...user, name, address, age }
        }

        return user
    })
    return res.status(200).send(usersUpdate)
})


router.delete('/users/:uid', (req, res) => {
    const {uid} = req.params
    const user = users.filter(({uid: userUid}) => userUid === uid)

    return res.status(200).send(user)
})


app.use(router)

module.exports = app