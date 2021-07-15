const connection = require('./connection') 

const getStatsByLocation = (db = connection) => {
    return db('catch')
    .join('location', 'catch.region_id', 'location.id')
    // .join('fish', 'catch.fish_id', 'fish.id')
    // .join('method', 'catch.method_id', 'method_id')
    .select()

}

const getFishTotalByLoc = (f_id, r_id, db = connection) => {
    return db('catch')
    .where ('fish_id', f_id)
    .where ('region_id', r_id)
    .sum ('quantity')
}
module.exports = {
    getStatsByLocation,
    getFishTotalByLoc
  }
