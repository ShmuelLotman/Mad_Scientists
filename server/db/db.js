const Sequelize = require('sequelize')

const db = new Sequelize(
  'postgres://localhost:5432/Mad_Scientists', {
    logging: false
  }
)
module.exports = db
