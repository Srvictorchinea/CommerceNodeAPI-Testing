const { buildUser } = require('../__fixtures__/users')
const { 
    getUsers, 
    addUsers, 
    findUserByUid, 
    updateUserByUid, 
    removeUserByUid
} = require('./user')

test('should add a new user', () => {
    const user = buildUser()
    addUsers(user)
    expect(getUsers()).toEqual([user])
}) 

test('findUnserByUid - should return undefined when there are not users', () => {
    const user = findUserByUid({uid: ''})
    expect(user).toBe(undefined)
}) 

test('findUnserByUid - should return a valid users', () => {
    const user = buildUser()
    const userFound = findUserByUid({uid: user.uid})
    expect(userFound).toEqual(user)
}) 

test('updateUserByUid - should update a valid users', () => {
    const user = buildUser()
    const userUpdated = {...user, name: 'Carl'}
    const usersUpdated = updateUserByUid(userUpdated)
    expect(usersUpdated).toEqual([userUpdated])
}) 

test('removeUserByUid - should remove a valid users', () => {
    const user = buildUser()
    addUsers(user)

    const usersUpdated = removeUserByUid({uid: user.uid})
    expect(usersUpdated).toEqual([])
}) 