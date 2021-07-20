const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/boat')

const router = express.Router()

// Get boat by ID
router.get('/', getTokenDecoder(), (req, res) => {
  const userId = (req.user.id)
  return db.getAllBoatListingsById(userId)
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})


// Add a boat listing by id
router.post('/', getTokenDecoder(), (req, res) => {
  const userId = (req.user.id)
  const listing = (req.body)
  return db.addBoatListing(listing, userId)
  .then((newlisting) => {
    res.json(newlisting)
  })
  .catch(err => {
    console.log(err.message)
  })
})

// Update a boat listing by id
router.patch('/', getTokenDecoder(), (req, res) => {
  const userId = (req.user.id)
  const listing = (req.body)
  return db.updateBoatListing(listing, userId)
  .then((newlisting) => {
    res.json(newlisting)
  })
  .catch(err => {
    console.log(err.message)
  })
})


module.exports = router