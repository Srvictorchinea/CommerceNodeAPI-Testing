const request = require('supertest')
const app = require('./app')

describe('users', () => {
    it('should store a user', async () => {
        const result = await request(app)
          .post('/users')
          .send({ name: 'john', address: '101 street', age: '21', uid: 'abc' })
          .set('Aceot', 'application/json')
          .expect(201)
    
        expect(result.body).toEqual({ message: 'success' })
    })   

    it('should get all users', async () => {
        const result = await request(app)
          .get('/users')
          .expect(200)
    
        expect(result.body).toEqual([])
    }) 
})

