const routes = require('express').Router();
const {User} = require('./app/models')

// User.create({
//   name: 'Lucas',
//   email: 'lucas@contato.com',
//   password_hash: '1das32d4as3d4aw4ad3w'
// })

routes.get('/', (req, res) => {
  res.send({message : 'Hello World'})
})

module.exports = routes