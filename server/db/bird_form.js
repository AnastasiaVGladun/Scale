const connection = require('./connection') 

// Get all bird_form listings
function getAllBird_formListings (db = connection) {
  return db('bird_form')
    .select()
}

// Add a bird_form listing
function addBird_formListing(listing, db = connection) {
  return db('bird_form')
    .insert(listing)
    .then( ()=> { // returning new poacher Id
      return  getAllBird_formListings() 
    })
}


module.exports = {
  getAllBird_formListings,
  addBird_formListing
}