exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('achievements').del()
    .then(function () {
      // Inserts seed entries
      return knex('achievements').insert([
        {id: 1, name: 'First-timer', badge_image:'/images/badges/firsttimer.png', description:'Logged your first catch!'},
        {id: 2, name: 'Budding Fisherman', badge_image:'/images/badges/3fish.png', description:'Nice! Caught more than three fish.'},
        {id: 3, name: 'Super Fisher', badge_image:'/images/badges/3diff.png', description:'Caught three different fish species!'}
      ])
    })
  }
