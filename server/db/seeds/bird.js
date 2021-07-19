
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bird').del()
    .then(function () {
      // Inserts seed entries
      return knex('bird').insert(
[
  {
    id: 1,
    name: "Bird A",
   image: "",
   description: ""
  },
  {
    id: 2,
    name: "Bird B",
   image: "",
    description:""

  },
  {
    id: 3,
    name: "Bird C",
   image: "",
    description:""
  },
  {
    id: 4,
    name: "Bird D",
   image: "",
    description:""
  }
]);
});
};
