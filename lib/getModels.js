'use strict'

const path = require('path')
const sequelizeImport = require('sequelize-import')

module.exports = function getModels (sequelize, modelsDir) {
  const url = path.resolve(modelsDir)
  const models = sequelizeImport(url, sequelize, { exclude: ['index.js'] })

  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  })

  return models
}