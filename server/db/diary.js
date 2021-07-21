const connection = require('./connection') 

// Get all catch 
function getAllCatchById(id, db = connection) {
  return db('catch')
    .select()
    .where('user_id', id)
    .join('fish','catch.fish_id', 'fish.id')
    .join('location', 'catch.region_id', 'location.id')
    .join('method', 'catch.method_id', 'method.id')
    .join('users','catch.user_id', 'users.id')
}

// Add a catch 
function addCatch(fishcatch, userId, db = connection) {
  const newFishcatch = {	
    quantity: fishcatch.quantity,
    user_id: userId
  }

// console.log(newFishcatch)
  
  return db('catch')
    .insert(newFishcatch )
    .then( ()=> { // returning new catch Id
      return  getAllCatchById(userId) //This needs the user catch_id
    })
}


module.exports = {
  addCatch,
  getAllCatchById
}
