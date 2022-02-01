exports.seed = function(knex) {
  return knex('boat').del()
  .then(function () {
    return knex('boat').insert([
      { id: 1, 
        user_id: '1',
        boat_name: 'Fred Early Riser',
        boat_licence: 'AP9876',
        boat_licence_expiry: '2022-03-21',
        Fish_licence: '5463892',
        Fish_licence_expiry: '2022-07-02',
        Boat_WOF_licence: 'NZ89761123',
        Boat_WOF_licence_expiry: '2022-11-21',
      },
      { id: 2, 
        user_id: '2',
        boat_name: 'Sam Heroine',
        boat_licence: 'QT7658',
        boat_licence_expiry: '2021-10-14',
        Fish_licence: '9753484',
        Fish_licence_expiry: '2022-07-09',
        Boat_WOF_licence: 'NZ89762234',
        Boat_WOF_licence_expiry: '2024-03-04',
      },
      { id: 3, 
        user_id: '3',
        boat_name: 'Starlight',
        boat_licence: 'TR09847',
        boat_licence_expiry: '2022-01-09',
        Fish_licence: '8925346',
        Fish_licence_expiry: '2022-06-09',
        Boat_WOF_licence: 'NZ89767765',
        Boat_WOF_licence_expiry: '2023-09-09',
      }
      ])
    })
  }  