const connection = require('./connection') 

// Get all marketplace listings
function getAllMarketplaceListings (db = connection) {
  return db('marketplace')
    .select()
}

// Add a marketplace listing
function addMarketplaceListing(listing, db = connection) {
  return db('marketplace')
    .insert(listing)
    .then( ()=> { // returning new poacher Id
      return  getAllMarketplaceListings() 
    })
}


module.exports = {
  getAllMarketplaceListings,
  addMarketplaceListing
}