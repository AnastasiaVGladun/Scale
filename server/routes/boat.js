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
  const listing = req.body
  const newListing = {
        user_id:userId,
        boat_name: listing.boat_name,
        boat_licence:listing.boat_licence,
        boat_licence_expiry: listing.boat_licence_expiry,
        Fish_licence: listing.Fish_licence,
        Fish_licence_expiry: listing.Fish_licence_expiry,
        Boat_WOF_licence: listing.Boat_WOF_licence,
        Boat_WOF_licence_expiry:listing.Boat_WOF_licence_expiry
  }
  return db.addBoatListing(newListing, userId)
  .then((newlisting) => {
    res.json(newlisting)
  })
  .catch(err => {
    console.log(err.message)
  })
})

// // Update a boat listing by id
// router.patch('/', getTokenDecoder(), (req, res) => {
//   const userId = (req.user.id)
//   const listing = (req.body)
//   return db.updateBoatListing(listing, userId)
//   .then((newlisting) => {
//     res.json(newlisting)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })
// })


module.exports = router