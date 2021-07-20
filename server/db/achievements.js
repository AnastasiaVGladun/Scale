const connection = require('./connection')


const getAllUsersAchievementsById = (userId, db = connection) => {
    return db('usersAchievements')
        .select('achievements.*')
        .where('user_id', userId)
        .join('users', 'usersAchievements.user_id', 'users.id')
        .join('achievements', 'usersAchievements.achievement_id', 'achievements.id')
}


//add achievement to usersAchievements
//calculate and add achievement
//called in the diary route when a catch is added
const addAchievement = (userId, db = connection) => {
    return getAllCatchById(userId)
        .then((response) => {
            //work out the quantity of fish caught
            let quanArr = response.map(entry => {
                return entry.quantity
            })
            let totalQuan = quanArr.reduce((a, b) => {
                return a + b;
            }, 0)

            //work out the quantity of unique species
            let fishType = response.map(entry => {
                return entry.fish_id
            })
            let uniqueSpecies = [...new Set(fishType)]

            //work out the conditions and assign Id
            if (response.length > 0) {
                return 1
            } else if (totalQuan >= 3) {
                return 2
            } else if (uniqueSpecies.length >= 3) {
                return 3
            }
        })
        .then((achievementId) => {

            return getAllUsersAchievementsById(userId)
            .then((achievement => {
                const hasAchievment = achievement.some(a => a.id == achievementId)
                // console.log("has achievement", hasAchievment)
                if(!hasAchievment){
                    return db('usersAchievements')
                    .insert({'user_id': userId, 'achievement_id': achievementId})
                }
            }))
            .then(() => {
                return getAllUsersAchievementsById(userId)
            })
            
        })
}


function getAllCatchById(id, db = connection) {
    return db('catch')
        .select()
        .where('user_id', id)
        .join('fish', 'catch.fish_id', 'fish.id')
        .join('location', 'catch.region_id', 'location.id')
        .join('method', 'catch.method_id', 'method.id')
}


module.exports = {
    getAllUsersAchievementsById,
    addAchievement
}

