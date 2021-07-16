const connection = require('./connection') 

const getAchievements = (db=connection) =>{
   return db('achievements')
    .select()
}

module.exports = {
    getAchievements
}