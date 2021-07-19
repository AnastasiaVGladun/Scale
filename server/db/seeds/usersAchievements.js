
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usersAchievements').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersAchievements').insert([
        {id: 1, user_id: '2', achievement_id: '1' },
        {id: 2, user_id: '2', achievement_id: '2' },
        {id: 3, user_id: '2', achievement_id: '3' },
        {id: 4, user_id: '1', achievement_id: '1' },
        {id: 5, user_id: '3', achievement_id: '1' },
        {id: 6, user_id: '3', achievement_id: '3' }
      ]);
    });
};
