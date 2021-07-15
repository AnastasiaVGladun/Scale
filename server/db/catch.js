const connection = require('./connection') 

const getCatchById = (id, db = connection) => {
  return db('catch')
    .where('id', id)
    .first()
}



const addCatch = (fishcatch, db = connection) => {
  return db('catch')
    .insert(fishcatch)
    .then(ids => {
      return getCatchById(ids[0])
    })
}


module.exports ={
  addCatch
}