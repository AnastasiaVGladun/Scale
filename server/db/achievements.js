const connection = require('./connection') 

const getAchievements = (id, db=connection) =>{
   return db('achievements')
    .select()
    .where('id', id)
}

module.exports = {
    getAchievements
}