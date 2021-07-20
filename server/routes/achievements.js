const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/achievements')

const router = express.Router()


// Get achievements badges
// router.get('/', (req, res) => {

//   return db.getAllAchievements()
//   .then((response) => {
//     res.json(response)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })
// })

// Get all users achievements
router.get('/', getTokenDecoder(),(req, res) => {
  const userId = (req.user.id)

  return db.getAllUsersAchievementsById(userId)
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})




module.exports = router



  