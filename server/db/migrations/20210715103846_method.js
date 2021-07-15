
exports.up = function(knex) {
    return knex.schema.createTable('method', table => {
      table.increments('id')
      table.string('method')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('method')
  };