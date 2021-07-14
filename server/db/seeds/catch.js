
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('catch').del()
    .then(function () {
      // Inserts seed entries
      return knex('catch').insert([
        {id: 1, user_id: '1',fish_id:'2',region_id:'1',method_id:'1', quantity:'2', photo:'',weight:'1',time:''},
        {id: 2, user_id: '3',fish_id:'1',region_id:'3',method_id:'3', quantity:'4', photo:'',weight:'2',time:''},
        {id: 3, user_id: '2',fish_id:'4',region_id:'3',method_id:'2', quantity:'10',photo:'',weight:'1',time:''},
        {id: 4, user_id: '2',fish_id:'5',region_id:'7',method_id:'3', quantity:'1', photo:'',weight:'4',time:''},
        {id: 5, user_id: '4',fish_id:'2',region_id:'2',method_id:'2', quantity:'8', photo:'',weight:'3',time:''},
        {id: 6, user_id: '2',fish_id:'6',region_id:'8',method_id:'1', quantity:'9', photo:'',weight:'1',time:''},
        {id: 7, user_id: '3',fish_id:'3',region_id:'1',method_id:'1', quantity:'7', photo:'',weight:'2',time:''},
      ]);
    });
};
