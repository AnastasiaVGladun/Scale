
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {id: 1, region: 'Northland'},
        {id: 2, region: 'Auckland'},
        {id: 3, region: 'Coromandel'},
        {id: 4, region: 'Bay of Plenty'},
        {id: 5, region: 'East Coast'},
        {id: 6, region: 'Hawkes Bay'},
        {id: 7, region: 'Wellington'},
        {id: 8, region: 'Otago'},
        {id: 9, region: 'Canterbury'},
        {id: 10, region: 'Southland'},
        {id: 11, region: 'Fiordland'},
        {id: 12, region: 'Westland'},
        {id: 13, region: 'Kaikoura'},
        {id: 14, region: 'Nelson'},
        {id: 15, region: 'Marlborough Sounds'}

      ]);
    });
};
