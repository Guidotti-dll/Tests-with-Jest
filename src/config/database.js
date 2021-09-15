require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? ".env.test" : '.env'
})
const env = require('env-var')

module.exports = {
  host: env.get('PG_HOST').required().asString(),
  username: env.get('PG_USER').required().asString(),
  password: env.get('PG_PASSWORD').required().asString(),
  database:  env.get('PG_DB_NAME').required().asString(),
  dialect:  env.get('DB_DIALECT').asString() || 'postgres',
  storage: './__tests__/database.sqlite',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
}