const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/poacher')

const router = express.Router()

// Add a Catch
router.post('/', getTokenDecoder(), (req, res) => {
  return db.addPoacher(req.body)
  .then((newPoacherInfo) => {
    res.json(newPoacherInfo)
  })
  .catch(err => {
    console.log(err.message)
  })
})

module.exports = router