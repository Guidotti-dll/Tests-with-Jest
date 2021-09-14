const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send({message : 'Hello World'})
})

module.exports = routes