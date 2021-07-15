const express = require('express')

const db = require('../db/fish')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getFishAll()
    .then(fish => {
      return res.json(fish)
    })
})

module.exports = router

