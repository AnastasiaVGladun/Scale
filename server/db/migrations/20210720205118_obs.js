
exports.up = function(knex) {
    return knex.schema.createTable('obs', table => {
      table.increments('id')
      table.date('date')
      table.string('title')
      table.string('user_id')
      table.string('image')
      table.string('description')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('obs')
  };
  