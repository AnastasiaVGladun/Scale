
exports.up = function(knex) {
    return knex.schema.createTable('rules', table => {
      table.increments('id')
      table.string('region')
      table.string('link')

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('rules')
  };