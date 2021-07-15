
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rules').del()
    .then(function () {
      // Inserts seed entries
      return knex('rules').insert([
        {id: 1, region: 'Northland', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/auckland-kermadec-fishing-rules/"},
        {id: 2, region: 'Auckland', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/auckland-kermadec-fishing-rules/"},
        {id: 3, region: 'Coromandel',link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/central-fishing-rules/"},
        {id: 4, region: 'Bay of Plenty', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/auckland-kermadec-fishing-rules/"},
        {id: 5, region: 'East Coast', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/central-fishing-rules/"},
        {id: 6, region: 'Hawkes Bay', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/central-fishing-rules/"},
        {id: 7, region: 'Wellington', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/central-fishing-rules/"},
        {id: 8, region: 'Otago', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/south-east/"},
        {id: 9, region: 'Canterbury', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/south-east/"},
        {id: 10, region: 'Southland', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/south-east/"},
        {id: 11, region: 'Fiordland', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/fiordland-fishing-rules/"},
        {id: 12, region: 'Westland', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/challenger-fishing-rules/"},
        {id: 13, region: 'Kaikoura', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/kaikoura-fishing-rules/"},
        {id: 14, region: 'Nelson', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/challenger-fishing-rules/"},
        {id: 15, region: 'Marlborough Sounds', link:"https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/fishing-rules/challenger-fishing-rules/"}

      ]);
    });
};
