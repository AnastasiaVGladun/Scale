
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('obs').del()
    .then(function () {
      // Inserts seed entries
      return knex('obs').insert([
        { id: 1, 
          date: '18 July 2021', 
          title: 'Pile of rubbish', 
          user_id: 2, 
          image:'/images/obs/pollution2.jpeg',
          description:'Lyall Bay, Wellington after the storm.'
        },
        { id: 2, 
          date: '21 Apr 2021', 
          title: 'Sediment', 
          user_id: 1, 
          image:'/images/obs/pollution3.jpeg',
          description:'Whangaroa Harbour, Northland where is all this run off coming from? Is there a logging event happening upstream'
        },
        { id: 3, 
          date: '15 Feb 2021', 
          title: 'Oil Spill', 
          user_id: 3, 
          image:'/images/obs/pollution4.jpeg',
          description:'Napier port nearby must have had a spill from one of the cargo ships.'
        }
        ]);
      });
  };
  


