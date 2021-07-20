exports.up = function(knex) {
    return knex.schema.createTable('usersAchievements', table => {
      table.increments('id')
      table.integer('user_id')
      table.string('achievement_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usersAchievements')
  };
  