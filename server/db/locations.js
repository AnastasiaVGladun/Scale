const connection = require('./connection') 

const getLocations = (db=connection) =>{
   return db('location')
    .select()
}

module.exports = {
    getLocations
}