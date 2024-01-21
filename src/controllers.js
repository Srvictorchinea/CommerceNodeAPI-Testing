//data/users
const { 
    getUsers, 
    addUsers, 
    findUserByUid, 
    updateUserByUid, 
    removeUserByUid
} = require('./data/user')

module.exports.addUserController = (req, res) => {
    const {name, address, age, uid} = req.body
    addUsers({name, address, age, uid})
    return res.status(201).send({ message: 'success' })
}

module.exports.getUsersController = (req, res) =>
    res.status(200).send(getUsers())

module.exports.findUserByUidController = (req, res) => {
    const { uid } = req.params
    const user = findUserByUid({ uid })

    return res.status(200).send(user)
}

module.exports.updateUserByUidController = (req, res) => {
    const { name, address, age } = req.body
    const { uid } = req.params

    const usersUpdate = updateUserByUid({ uid, name, address, age})

    return res.status(200).send(usersUpdate)
}

module.exports.removeUserByUidController = (req, res) => {
    const { uid } = req.params
    const usersUpdate = removeUserByUid({ uid })

    return res.status(200).send(usersUpdate)
}