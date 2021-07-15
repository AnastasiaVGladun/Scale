const connection = require('./connection') 

const getStatsByLocation = () => {
    return db('catch')
    .join('location', 'catch.region_id', 'location.id')
    .select()
}

export 
