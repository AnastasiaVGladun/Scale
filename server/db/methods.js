const connection = require('./connection')

const getAllMethods = (db = connection) => {
  return db('method')
  .select()
}

module.exports = {
  getAllMethods,
  
}