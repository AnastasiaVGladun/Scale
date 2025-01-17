const connection = require('./connection') 

const getStatsByLocation = (location_id, start_time, end_time, db = connection) => {

    //return db.raw()
if (location_id === 'All'){
    return db('catch')
    .join('location', 'catch.region_id', 'location.id')
    .join('fish', 'catch.fish_id', 'fish.id')
    .join('method', 'catch.method_id', 'method.id')
    .whereBetween('catch.created_at', [start_time, end_time])
    
    .sum('catch.quantity as quantity')
    .groupBy('fish.name')
    .select('fish.name', 'fish.image')
}

else{
    return db('catch')
    .join('location', 'catch.region_id', 'location.id')
    .join('fish', 'catch.fish_id', 'fish.id')
    .join('method', 'catch.method_id', 'method.id')
    .where('catch.region_id', location_id)
    .whereBetween('catch.created_at', [start_time, end_time])
    
    .sum('catch.quantity as quantity')
    .groupBy('fish.name')
    .select('fish.name', 'fish.image')
    //.select();
    // .select('catch.id', 'catch.region_id', 'catch.fish_id', 'catch.quantity', 
    // 'location.location as location_name', 'fish.name as fish_name', 'method.method as method_type')
    }
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
