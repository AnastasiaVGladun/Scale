const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const db = require('knex')(configuration)

// module.exports = db
module.exports = connection
