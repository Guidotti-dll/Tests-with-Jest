require('dotenv').config();
const env = require('env-var')

module.exports = {
  host: env.get('PG_HOST').required().asString(),
  username: env.get('PG_USER').required().asString(),
  password: env.get('PG_PASSWORD').required().asString(),
  database:  env.get('PG_DB_NAME').required().asString(),
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
}