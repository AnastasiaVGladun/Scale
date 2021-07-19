
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('catch').del()
    .then(function () {
      // Inserts seed entries
      return knex('catch').insert([
        {id: 1, user_id: '1',fish_id:'9',region_id:'1',method_id:'1', quantity:'2', photo:'1.png',weight:'10',time:''},
        {id: 2, user_id: '3',fish_id:'1',region_id:'11',method_id:'3', quantity:'4', photo:'2.png',weight:'20',time:''},
        {id: 3, user_id: '1',fish_id:'11',region_id:'3',method_id:'2', quantity:'10',photo:'3.png',weight:'5',time:''},
        {id: 4, user_id: '2',fish_id:'12',region_id:'13',method_id:'3', quantity:'1', photo:'4.png',weight:'9',time:'2 June 2021'},
        {id: 5, user_id: '4',fish_id:'20',region_id:'2',method_id:'2', quantity:'8', photo:'5.png',weight:'6',time:''},
        {id: 6, user_id: '2',fish_id:'11',region_id:'14',method_id:'1', quantity:'9', photo:'6.png',weight:'9',time:'12 July 2021'},
        {id: 7, user_id: '3',fish_id:'9',region_id:'1',method_id:'4', quantity:'7', photo:'7.png',weight:'2',time:''},
        {id: 8, user_id: '3',fish_id:'9',region_id:'14',method_id:'4', quantity:'7', photo:'7.png',weight:'2',time:''},
      ]);
    });
};
