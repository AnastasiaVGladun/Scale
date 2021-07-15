const connection = require('./connection') 

const getStatsByLocation = (db = connection) => {
    return db('catch')
    .join('location', 'catch.region_id', 'location.id')
    .join('fish', 'catch.fish_id', 'fish.id')
    .select()
}
module.exports = {
    getStatsByLocation
  }
