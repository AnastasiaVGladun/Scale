const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/obs')

const router = express.Router()

// Get all obs listings
router.get('/', getTokenDecoder(), (req, res) => {
  return db.getAllObsListings()
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})


// Add a obs listing
router.post('/', getTokenDecoder(), (req, res) => {
    const userId = (req.user.id)
    const listing = req.body
    const newListing = {
          user_id:userId,
          date: listing.date,
          title:listing.title,
          image: listing.image,
          description: listing.description,
    }
  return db.addObsListing(newListing)
  .then((listing) => {
    res.json(listing)
  })
  .catch(err => {
    console.log(err.message)
  })
})

module.exports = router