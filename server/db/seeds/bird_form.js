
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bird_form').del()
    .then(function () {
      // Inserts seed entries
      return knex('bird_form').insert([
        { id: 1, 
          title:"Found dead bird",
          date:'30-06-2021', 
          name: 'ally', 
          description: 'I have found a dead bird on the little island ',
          image: ''},


          { id: 2, 
            title:"Found penguin",
            date: '16-04-2021', 
            name: 'ally', 
            description: 'I have found an injured penguin and i took it home ',
            image: ''},


            { id: 3, 
              title:"Trapped seagul",
              date: '09-02-2021', 
              name: 'ally', 
              description: 'I have found a trapped seagul and untangled a fishing line ',
              image: ''}
        ]);
    });
};





