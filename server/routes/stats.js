const express = require('express')

const db = require('../db/stats')

const router = express.Router()

router.get('/', (req, res) => {
    return db.getStatsByLocation()
    .then( x => {
        return res.json(x)
    })
})

module.exports = router