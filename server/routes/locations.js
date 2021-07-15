const express = require('express')

const db = require('../db/locations')

const router = express.Router()

router.get('/', (req,res) =>{
   return db.getLocations()
    .then(locations => {
        return res.json(locations)
    })
})

module.exports = router