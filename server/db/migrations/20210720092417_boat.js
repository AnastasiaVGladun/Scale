
exports.up = function(knex) {
    return knex.schema.createTable('boat', table => {
        table.increments('id')
        table.integer('user_id')
        table.string('boat_name')
        table.string('boat_licence')
        table.date('boat_licence_expiry')        
        table.string('Fish_licence')
        table.date('Fish_licence_expiry')
        table.string('Boat_WOF_licence')
        table.date('Boat_WOF_licence_expiry')  
      })
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTable('boat')
    };
  
