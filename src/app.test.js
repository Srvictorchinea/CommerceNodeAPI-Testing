const request = require('supertest')
const app = require('./app')
const { 
    getUsers, 
    addUsers, 
    findUserByUid, 
    updateUserByUid, 
    removeUserByUid
} = require('./data/user')

jest.mock('./data/user')

beforeEach(() => {
    addUsers.mockReset()
    getUsers.mockReset()
})

describe('users', () => {
    test('should store a user', async () => {
        const result = await request(app)
          .post('/users')
          .send({ name: 'john', address: '101 street', age: '21', uid: 'abc' })
          .set('Aceot', 'application/json')
          .expect(201)
    
        expect(result.body).toEqual({ message: 'success' })
    })   

    test('should get all users', async () => {
        getUsers.mockReturnValue([])
        const result = await request(app)
          .get('/users')
          .expect(200)
    
        expect(result.body).toEqual([])
    }) 
})

