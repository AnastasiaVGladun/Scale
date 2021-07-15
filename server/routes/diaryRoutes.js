const express = require('express')

const db = require('../db/diary')

const router = express.Router()



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


module.exports = router