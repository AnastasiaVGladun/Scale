const connection = require('./connection') 

const getAllAchievements =  (db = connection) => {
   return db('achievements')
    .select()   
    
}

const getAllUsersAchievementsById =  (id, db = connection) => {
    return db('usersAchievements')
     .select()
     .where ('user_id', id)   
     .join ('users','usersAchievements.user_id', 'users.id')  
     .join ('achievements','usersAchievements.achievement_id', 'achievements.id')
 }

 //add achievements to usersAchievements
 const AddAchi

module.exports = {
    getAllAchievements,
    getAllUsersAchievementsById
}