const { generateHash } = require('authenticare/server')


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1,
            username: 'Fred',
            password: 'Krang',
            email_address: 'hello@devacademy.co.nz',
            contact_details: 'Christchurch'
          },
          {
            id: 2,
            username: 'Sam',
            password: '123',
            email_address: 'hello1@devacademy.co.nz',
            contact_details: 'Wellington'
          },
          {
            id: 3,
            username: 'John',
            password: '1234',
            email_address: 'hello2@devacademy.co.nz',
            contact_details: 'Wanaka'
          },
          {
            id: 4,
            username: 'Tom',
            password: '12345',
            email_address: 'hello3@devacademy.co.nz',
            contact_details: 'Nelson'
          }       
        ].map(user => {
          return generateHash(user.password)
            .then(hash => {
              user.hash = hash
              delete user.password
              return user
            })
        }))
        .then(users => {
          return knex('users').insert(users)
        })
    })
}
