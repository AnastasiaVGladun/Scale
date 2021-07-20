const connection = require('./connection') 

// Get all obs listings
function getAllObsListings (db = connection) {
  return db('obs')
    .select()
    .join('users','obs.user_id','users.id')
}

// Add a obs listing
function addObsListing(listing, db = connection) {
  return db('obs')
    .insert(listing)
    .then( ()=> { // returning new poacher Id
      return  getAllObsListings() 
    })
}


module.exports = {
  getAllObsListings,
  addObsListing
}