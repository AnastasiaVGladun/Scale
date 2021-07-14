const connection = require('./connection') 

// // Get all catch 
// function getCatch() {

// }


// Add a catch 
function addCatch(catch, db = connection) {
  return db('catch')
    .insert()
}


