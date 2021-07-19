
exports.up = function(knex) {
  return knex.schema.createTable('poacher', table => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('description')
    table.string('image')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('poacher')
};
