const connection = require('./connection') 

const getAllAchievements =  (db = connection) => {
   return db('achievements')
    .select()   
    
}

module.exports = {
    getAllAchievements
}