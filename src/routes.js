const routes = require('express').Router();
const env = require('env-var')
const pg = env.get('PG_HOST').required().asString()

routes.get('/', (req, res) => {
  res.send({message : pg})
})

module.exports = routes