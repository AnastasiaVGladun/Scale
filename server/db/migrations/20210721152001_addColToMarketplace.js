exports.up = function(knex) {
    return knex.schema.alterTable('marketplace', table => {
      table.string('image')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropColumn('marketplace')
  };
  