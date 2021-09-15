const { User } = require('../../src/app/models')


describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Lucas',
      email: 'lucas@contato.com',
      password_hash: '1das32d4as3d4aw4ad3w'
    })

    console.log(user)
    expect(user.email).toBe('lucas@contato.com')
  })
})
