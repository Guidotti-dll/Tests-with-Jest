const { User } = require('../../src/app/models')
const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')


describe('Authentication', () => {
  beforeEach( async () => {
    await truncate()
  })
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Lucas',
      email: 'lucass@contato.com',
      password: '123123'
    })

    console.log(user.email)

      const response = await request(app)
        .post('/sessions')
        .send({
          email: user.email,
          password: '123123'
        })

    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    const user = await User.create({
      name: 'Lucas',
      email: 'lucasss@contato.com',
      password: '123123'
    })

      const response = await request(app)
        .post('/sessions')
        .send({
          email: user.email,
          password: '123456'
        })

    expect(response.status).toBe(401)
  })
})
