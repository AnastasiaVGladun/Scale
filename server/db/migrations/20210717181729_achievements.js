
exports.up = function(knex) {
    return knex.schema.createTable('achievements', table => {
      table.increments('id')
      table.string('name')
      table.string('badge_image')
      table.string('description')

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('achievements')
  };