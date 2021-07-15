const connection = require('./connection') 

// Get all catch 
function getCatchById(id, db = connection) {
  return db('catch')
    .select()
    .join('fish','catch.fish_id', 'fish.id')
}


// Add a catch 
function addCatch(fishcatch, db = connection) {
  return db('catch')
    .insert(fishcatch)
}


module.exports ={
  addCatch,
  getCatchById
}