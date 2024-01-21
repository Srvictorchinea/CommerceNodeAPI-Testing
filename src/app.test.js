const request = require('supertest')
const app = require('./app')
const { 
    getUsers, 
    addUsers, 
    findUserByUid, 
    updateUserByUid, 
    removeUserByUid
} = require('./data/user')
const {buildUser} = require('./__fixtures__/users')

jest.mock('./data/user')

beforeEach(() => {
    addUsers.mockReset()
    getUsers.mockReset()
    updateUserByUid.mockReset()
    findUserByUid.mockReset()
    removeUserByUid.mockReset()
})

describe('users', () => {
    test('should store a user', async () => {
        const result = await request(app)
          .post('/users')
          .send(buildUser())
          .set('Accept', 'application/json')
          .expect(201)
    
        expect(result.body).toEqual({ message: 'success' })
    })   

    test('should get all users', async () => {
        const user = buildUser()
        getUsers.mockReturnValue([user])
        const result = await request(app)
          .get('/users')
          .expect(200)
    
        expect(result.body).toEqual([user])
    }) 

    test('should get empty users when there are not users', async () => {
        getUsers.mockReturnValue([])
        const result = await request(app)
          .get('/users')
          .expect(200)
    
        expect(result.body).toEqual([])
    }) 

    test('should update a user', async () => {
        const user = buildUser()
        updateUserByUid.mockReturnValue(user)
        const result = await request(app)
          .put(`/users/${user.uid}`)
          .send(user)
          .set('Accept', 'application/json')
          .expect(200)
    
        expect(result.body).toEqual(user)
    })
    
    test('should get an user by uid', async () => {
        const user = buildUser()
        findUserByUid.mockReturnValue(user)
        const result = await request(app)
          .get(`/users/${user.uid}`)
          .expect(200)
    
        expect(result.body).toEqual(user)
    }) 

    test('should delete an user by uid', async () => {
        const user = buildUser()
        removeUserByUid.mockReturnValue({})
        const result = await request(app)
          .delete(`/users/${user.uid}`)
          .expect(200)
    
        expect(result.body).toEqual({})
    }) 
})

