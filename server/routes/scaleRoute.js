const express = require('express')

const db = require('../db/dbFuncs')

const router = express.Router()


// Add a Post
router.post('/', (req, res) => {
  return db.addCatch(req.body)
  .then((catch) => {
    res.json(catch)
  })
  .catch(err => {
    console.log(err.message)
  })
})