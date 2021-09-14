const app = require('./app')
const env = require('env-var')
const port =  env.get('PORT').required().asString() || 3000

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
})