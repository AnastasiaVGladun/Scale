const connection = require('./connection') 

// // Get all catch 
// function getCatch() {

// }
const getCatchAll = (db = connection) => {
  return db('catch')
}

const getCatchById = (id, db = connection) => {
  return db('catch')
    .where('id', id)
    .first()
}



const addCatch = (catch, db = connection) => {
  return db('catch')
    .insert(catch)
    .then(ids => {
      return getCatchById(ids[0])
    })
}


module.exports ={
  addCatch,
  getCatchAll,
  getCatchById
}