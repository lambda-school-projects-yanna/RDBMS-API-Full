
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'WEB14'},
        {name: 'WEB15'},
        {name: 'WEB16'},
        {name: 'WEB17'},
        {name: 'WEB-PT1'},
        {name: 'WEB-PT2'},
        {name: 'WEB-PT3'},
        {name: 'WEB-PT4'},
        {name: 'WEB-PT5'}
      ]);
    });
};
