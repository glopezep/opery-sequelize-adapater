'use strict'

const setupSequelize = require('./lib/sequelize')
const getModels = require('./lib/getModels')

module.exports = {
  name: 'operySequelizeAdapater',
  setupOrm: setupSequelize,
  getModels,
}