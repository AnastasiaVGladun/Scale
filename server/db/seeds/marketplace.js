
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marketplace').del()
    .then(function () {
      // Inserts seed entries
      return knex('marketplace').insert([
        {id: 1, 
          date: '2021-07-21', 
          name: 'ally', 
          email: 'ally@yahoo.co.nz', 
          phone: '0210976876', 
          description: 'Taking my boat out this sunday, if anyone is looking to go out let me know. thanks',
          image: '/images/Boat/boat.jpeg'
        }
      ]);
    });
};
