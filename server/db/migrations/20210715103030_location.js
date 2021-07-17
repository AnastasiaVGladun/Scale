
exports.up = function(knex) {
    return knex.schema.createTable('location', table => {
      table.increments('id')
      table.string('location')
      table.string('latitude')
      table.string('longitude')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('location')
  };
