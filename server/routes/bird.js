const express = require('express')

const db = require('../db/bird')

const router = express.Router()

router.get('/',(req, res) => {
  return db.getBirdAll()
    .then(bird => {
      return res.json(bird)
    })
})

module.exports = router
