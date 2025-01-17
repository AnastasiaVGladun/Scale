
exports.up = function(knex) {
  return knex.schema.createTable('marketplace', table => {
    table.increments('id')
    table.date('date')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('marketplace')
};
