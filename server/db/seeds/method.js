
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('method').del()
    .then(function () {
      // Inserts seed entries
      return knex('method').insert([
        {id: 1, method: 'on the water'},
        {id: 2, method: 'on the shore'},
        {id: 3, method: 'diving'},
        {id: 4, method: 'by hand'}
      ]);
    });
};
