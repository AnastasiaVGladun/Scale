const express = require('express')

const db = require('../db/catch')

const router = express.Router()


// Add a Post
router.post('/', (req, res) => {
  return db.addCatch(req.body)
  .then((fishcatch) => {
    res.json(fishcatch)
  })
  .catch(err => {
    console.log(err.message)
  })
})