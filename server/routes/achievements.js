const express = require('express')

const db = require('../db/achievements')

const router = express.Router()

// Achievements
router.get('/:id', (req, res) => {
  const id = req.params.id 

  return db.getAchievements(id)
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})

module.exports = router
