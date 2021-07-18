
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('poacher').del()
    .then(function () {
      // Inserts seed entries
      return knex('poacher').insert([
        {id: 1, name: 'yousuf', email: 'test@gmail.com', phone: '00240096460678', description: 'Saw some illigal activities'}
      ]);
    });
};
