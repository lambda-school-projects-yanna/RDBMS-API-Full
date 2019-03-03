
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Yanna', cohort_id: 3},
        {name: 'Nate', cohort_id: 3},
        {name: 'CJ', cohort_id: 3},
        {name: 'Alex', cohort_id: 3},
        {name: 'Brandon', cohort_id: 3},
        {name: 'Rudy', cohort_id: 3},
        {name: 'David', cohort_id: 3},
      ]);
    });
};
