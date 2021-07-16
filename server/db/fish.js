const connection = require('./connection')

const getFishAll = (db = connection) => {
  return db('fish')
  .select()
}

module.exports = {
  getFishAll,
  
}