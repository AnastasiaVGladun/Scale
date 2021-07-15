
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {id: 1, location: 'Northland'},
        {id: 2, location: 'Auckland'},
        {id: 3, location: 'Coromandel'},
        {id: 4, location: 'Bay of Plenty'},
        {id: 5, location: 'East Coast'},
        {id: 6, location: 'Hawkes Bay'},
        {id: 7, location: 'Wellington'},
        {id: 8, location: 'Otago'},
        {id: 9, location: 'Canterbury'},
        {id: 10, location: 'Southland'},
        {id: 11, location: 'Fiordland'},
        {id: 12, location: 'Westland'},
        {id: 13, location: 'Kaikoura'},
        {id: 14, location: 'Nelson'},
        {id: 15, location: 'Marlborough Sounds'}

      ]);
    });
};
