const express = require('express');
const {config} = require('dotenv')

class AppController {
  constructor() {
    this.express = express();
    this.routes()
    this.middlewares()
    config()
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'))
  }
}

module.exports = new AppController().express