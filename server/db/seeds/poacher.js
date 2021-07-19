
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('poacher').del()
    .then(function () {
      // Inserts seed entries
      return knex('poacher').insert([
        {id: 1, name: 'Joe', email: 'joe@gmail.com', phone: '0205468778', description: 'spoted someone taking more than the limit', image: '/images/#.png'},
      ]);
    });
};
