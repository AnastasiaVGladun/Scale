const connection = require('./connection') 

// Get all boat listings by Id
function getAllBoatListingsById (userId, db = connection) {
  return db('boat')
    .where('user_id', userId)
    .select()
    .first()
}

// Add a boat listing by Id
function addBoatListing(listing, userId, db = connection) {
  return db('boat')
    .insert(listing,userId)
    .then( ()=> { // returning new boat Id
      return  getAllBoatListingsById(userId) 
    })
}

// Update a boat listing
function updateBoatListing(listing, userId, db = connection) {
  return db('boat')
    .update(listing)
    .where ('user_id', userId)
    .then( ()=> { 
      return  getAllBoatListingsById(userId) 
    })
}

module.exports = {
  getAllBoatListingsById,
  addBoatListing,
  updateBoatListing
}