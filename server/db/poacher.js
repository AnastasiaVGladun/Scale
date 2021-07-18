const connection = require('./connection') 

// Get all poachers info
function getAllPoachers (db = connection) {
  return db('poacher')
    .select()
}

// Add a poacher info
function addPoacher(poacherInfo, db = connection) {
  return db('catch')
    .insert(poacherInfo)
    .then( ()=> { // returning new poacher Id
      return  getAllPoachers() 
    })
}


module.exports = {
  addPoacher,
  getAllPoachers
}