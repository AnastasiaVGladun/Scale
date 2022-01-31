const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/bird_form')

const router = express.Router()

// Get all bird_form listings
router.get('/', getTokenDecoder(), (req, res) => {
  return db.getAllBird_formListings()
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})


// Add a bird_form listing
router.post('/', getTokenDecoder(), (req, res) => {
  return db.addBird_formListing(req.body)
  .then((listing) => {
    res.json(listing)
  })
  .catch(err => {
    console.log(err.message)
  })
})

module.exports = router