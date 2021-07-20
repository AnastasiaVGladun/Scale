const express = require('express')

const db = require('../db/methods')

const router = express.Router()

router.get('/', (req,res) =>{
   return db.getAllMethods()
    .then(methods => { 
        return res.json(methods)
    })
})

module.exports = router