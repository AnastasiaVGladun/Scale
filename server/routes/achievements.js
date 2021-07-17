const express = require('express')


const db = require('../db/achievements')

const router = express.Router()


// Get achievements by ID
router.get('/', (req, res) => {

  return db.getAllAchievements()
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})





module.exports = router