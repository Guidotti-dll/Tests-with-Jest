const routes = require('express').Router();
const SessionController = require('./app/controllers/SessionController')

routes.get('/', (req, res) => {
  res.send({message : 'Hello World'})
})

routes.post('/sessions', SessionController.store)

module.exports = routes