const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/diary')

const router = express.Router()


// Get catch by ID
router.get('/',getTokenDecoder(), (req, res) => {
  const userId = (req.user.id)

  return db.getAllCatchById(userId)
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})


// Add a Catch
router.post('/', getTokenDecoder(), (req, res) => {
  const userId = (req.user.id)
  return db.addCatch(req.body, userId)
  .then((fishcatch) => {
    res.json(fishcatch)
  })
  .catch(err => {
    console.log(err.message)
  })
})



module.exports = router