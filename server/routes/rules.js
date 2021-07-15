const express = require('express')

const db = require('../db/rules')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getRulesAll()
    .then(rules => {
      return res.json(rules)
    })
})

module.exports = router