const connection = require('./connection')

const getRulesAll = (db = connection) => {
  return db('rules')
}

module.exports = {
  getRulesAll,
  
}