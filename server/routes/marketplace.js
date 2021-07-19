const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/marketplace')

const router = express.Router()

// Get all marketplace listings
router.get('/', getTokenDecoder(), (req, res) => {
  return db.getAllMarketplaceListings()
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})


// Add a marketplace listing
router.post('/', getTokenDecoder(), (req, res) => {
  return db.addMarketplaceListing(req.body)
  .then((listing) => {
    res.json(listing)
  })
  .catch(err => {
    console.log(err.message)
  })
})

module.exports = router