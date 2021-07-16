const connection = require('./connection') 

// Get all catch 
function getAllCatchById(id, db = connection) {
  return db('catch')
    .select()
    .where('user_id', id)
    .join('fish','catch.fish_id', 'fish.id')
    .join('location', 'catch.region_id', 'location.id')
}


// Add a catch 
function addCatch(fishcatch, db = connection) {
  return db('catch')
    .insert(fishcatch)
    .then(id => {
      return getCatchById(id[0])
    })
}


module.exports = {
  addCatch,
  getAllCatchById
}
