const express = require('express')

const db = require('../db/diary')

const router = express.Router()


// Get catch by ID
router.get('/:id', (req, res) => {
  const id = req.params.id 

  return db.getCatchById(id)
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})

// Add a Catch
router.post('/', (req, res) => {
  return db.addCatch(req.body)
  .then((fishcatch) => {
    res.json(fishcatch)
  })
  .catch(err => {
    console.log(err.message)
  })
})



module.exports = router