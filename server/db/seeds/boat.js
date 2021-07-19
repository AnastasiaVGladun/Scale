exports.seed = function(knex) {
  return knex('boat').del()
  .then(function () {
    return knex('boat').insert([
      { id: 1, 
        user_id: '1',
        boat_name: 'Fred Early Riser',
        boat_licence: 'AP9876',
        boat_licence_expiry: '21 Mar 2022',
        Fish_licence: '5463892',
        Fish_licence_expiry: '09 June 2022',
        Boat_WOF_licence: 'NZ89761123',
        Boat_WOF_licence_expiry: '21 November 2022',
      },
      { id: 2, 
        user_id: '2',
        boat_name: 'Sam Heroine',
        boat_licence: 'QT7658',
        boat_licence_expiry: '14 October 2021',
        Fish_licence: '9753484',
        Fish_licence_expiry: '09 June 2022',
        Boat_WOF_licence: 'NZ89762234',
        Boat_WOF_licence_expiry: '04 March 2024',
      },
      { id: 3, 
        user_id: '3',
        boat_name: 'Starlight',
        boat_licence: 'TR09847',
        boat_licence_expiry: '09 January 2022',
        Fish_licence: '8925346',
        Fish_licence_expiry: '09 June 2022',
        Boat_WOF_licence: 'NZ89767765',
        Boat_WOF_licence_expiry: '09 September 2023',
      }
      ])
    })
  }  