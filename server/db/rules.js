const connection = require('./connection')

const getRulesAll = (db = connection) => {
  return db('rules')
  .select()
}

module.exports = {
  getRulesAll,
  
}

