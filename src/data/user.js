const users = []

module.exports.getUsers = () => {
    return users
}

module.exports.addUsers = ({ name, address, age, uid }) => {
    users.push({ name, address, age, uid })
}

module.exports.findUserByUid = ({ uid }) => 
    users.find(({uid: userUid}) => userUid === uid)

module.exports.updateUserByUid = ({ uid, name, address, age }) => {
    const usersUpdate = users.map((user) => {
        if (user.uid === uid) {
            return { ...user, name, address, age }
        }

        return user
    })
    return usersUpdate
}

module.exports.removeUserByUid = ({ uid }) => 
    users.filter(({uid: userUid}) => userUid !== uid)