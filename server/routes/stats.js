const express = require('express')

const db = require('../db/stats')

const router = express.Router()

router.get('/', (req, res) => {
   
    return db.getStatsByLocation()
    .then(everything => {
        let pairsLocCatch = everything.map (item => {
            return item.region_id + "," + item.fish_id  + "," +  item.location
        })
        pairsLocCatch = [...new Set(pairsLocCatch)]
        console.log(pairsLocCatch)
        const stats = pairsLocCatch.map(pair => {
             const splitPair = pair.split(",")
             const r_id = splitPair[0]
             const f_id = splitPair[1]
             const location = splitPair[2]
            return db.getFishTotalByLoc (f_id, r_id)
                .then(quantity => {
                    return {
                        fish_id: Number(f_id),
                        location,
                        quantity: quantity[0]['sum(`quantity`)']
                        
                    }
                })
        })
        Promise.all(stats)
         .then(quantities => {
             const formattedObj = quantities.reduce((obj, entry) => {
                 console.log('acc', obj)
                 if(obj[entry.location]){
                     obj[entry.location][entry.fish_id] = entry.quantity
                 } else {
                    obj[entry.location] = {
                        [entry.fish_id]: entry.quantity
                    }
                 }
                 return obj
             }, {})
             console.log (formattedObj)
             return res.json(formattedObj)
         })
     

    })
})

module.exports = router