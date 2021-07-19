const connection = require('./connection') 

// Get all boat listings
function getAllBoatListings (db = connection) {
  return db('boat')
    .select()
}

// Add a boat listing
function addBoatListing(listing, db = connection) {
  return db('boat')
    .insert(listing)
    .then( ()=> { // returning new poacher Id
      return  getAllBoatListings() 
    })
}


module.exports = {
  getAllBoatListings,
  addBoatListing
}