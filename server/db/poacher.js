const connection = require('./connection') 

// Add a poacher info
function addPoacher(poacherInfo, db = connection) {
  return db('poacher')
    .insert(poacherInfo)
}

module.exports = {
  addPoacher
}