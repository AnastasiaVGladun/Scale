
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bird_form').del()
    .then(function () {
      // Inserts seed entries
      return knex('bird_form').insert([
        { id: 1, 
          title:"Found dead bird",
          date:'2021-06-30', 
          name: 'ally', 
          description: 'I have found a dead bird on the little island ',
          image: '/images/Bird/1birdinj.jpeg'},


          { id: 2, 
            title:"Found penguin",
            date: '2021-04-16', 
            name: 'ally', 
            description: 'I have found an injured penguin and i took it home ',
            image: '/images/Bird/2birdinj.jpeg'},


            { id: 3, 
              title:"Trapped seagul",
              date: '2021-02-09', 
              name: 'ally', 
              description: 'I have found a trapped seagul and untangled a fishing line ',
              image: '/images/Bird/3birdinj.jpeg'}
        ]);
    });
};





