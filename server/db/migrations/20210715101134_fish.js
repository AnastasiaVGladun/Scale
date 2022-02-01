
exports.up = function(knex) {
    return knex.schema.createTable('fish', table => {
      table.increments('id')
      table.string('name')
      table.string('image')
      table.string('description', 1000)
    })
  };
  exports.down = function(knex) {
    return knex.schema.dropTable('fish')
  };
  


  