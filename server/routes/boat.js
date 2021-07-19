const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/boat')

const router = express.Router()

// Get all boat listings
router.get('/', getTokenDecoder(), (req, res) => {
  return db.getAllBoatListings()
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})


// Add a boat listing
router.post('/', getTokenDecoder(), (req, res) => {
  return db.addBoatListing(req.body)
  .then((listing) => {
    res.json(listing)
  })
  .catch(err => {
    console.log(err.message)
  })
})

module.exports = router