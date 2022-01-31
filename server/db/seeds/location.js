
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {id: 1, location: 'Northland', latitude: '-34.8598718598378', longitude: '173.40881605233315'},
        {id: 2, location: 'Auckland', latitude: '-36.728392204197746', longitude: '174.8691621528425'},
        {id: 3, location: 'Coromandel', latitude: '-37.13602000007695', longitude: '175.52944175105208'},
        {id: 4, location: 'Bay of Plenty', latitude: '-37.63147615906138', longitude: '176.09368336958647'},
        {id: 5, location: 'East Coast', latitude: '-38.63883803018129', longitude: '178.03189806060806'},
        {id: 6, location: 'Hawkes Bay', latitude: '-39.40710435341335', longitude: '176.82829796289298'},
        {id: 7, location: 'Wellington', latitude: '-41.19531453309516', longitude: '174.65454124261024'}, 
        {id: 8, location: 'Otago', latitude: '-45.80712956356218', longitude: '170.4925836254268'},
        {id: 9, location: 'Canterbury', latitude: '-43.42436698489581', longitude: '172.88996283517125'},
        {id: 10, location: 'Southland', latitude: '-46.30731036528327', longitude: '168.40858418559347'},
        {id: 11, location: 'Fiordland', latitude: '-44.636251762983875', longitude: '167.9140384135001'},
        {id: 12, location: 'Westland', latitude: '-42.455614425880505', longitude: '171.1891324157902'},
        {id: 13, location: 'Kaikoura', latitude: '-42.314314987211525', longitude: '173.66464687956503'}, 
        {id: 14, location: 'Nelson', latitude: '-41.30288929620196', longitude: '173.24903620063515'},
        {id: 15, location: 'Marlborough Sounds', latitude: '-41.29516237988673', longitude: '174.00240096460678'}

      ]);
    });
};
