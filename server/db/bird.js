const connection = require('./connection')

const getBirdAll = (db = connection) => {
  return db('bird')
  .select()
}

module.exports = {
  getBirdAll,
  
}