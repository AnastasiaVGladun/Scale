const connection = require('./connection') 

// // Get all catch 
// function getCatch() {

// }


// Add a catch 
function addCatch(fishcatch, db = connection) {
  return db('catch')
    .insert(fishcatch)
}


module.exports ={
  addCatch
}