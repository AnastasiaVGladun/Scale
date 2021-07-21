exports.up = function(knex) {
    return knex.schema.createTable('bird_form', table => {
      table.increments('id')
      table.string ('title')
      table.date('date')
      table.string('name')
      table.string('description')
      table.string('image')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('bird_form')
  };
  