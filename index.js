'use strict'

const setupSequelize = require('./lib/sequelize')
const getModels = require('./lib/getModels')
const baseService = require('./lib/baseService')

module.exports = {
  name: 'operySequelizeAdapater',
  setupOrm: setupSequelize,
  getModels,
  baseService
}