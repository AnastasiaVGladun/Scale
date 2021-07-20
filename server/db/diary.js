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
  // const newFishcatch = {	
    
  //   user_id: userId,
  //   quantity: fishcatch.quantity,
  //   fish_id: fishcatch.fish_id,
  //   region_id: fishcatch.region_id,
  //   method_id: fishcatch.method_id,
  //   photo: fishcatch.photo,
  //   weight: fishcatch.weight,
  //   time: fishcatch.time

  // }
  
  
  return db('catch')
    .insert(fishcatch )
}


module.exports = {
  addCatch,
  getAllCatchById
}
