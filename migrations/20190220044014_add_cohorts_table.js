
exports.up = function(knex, Promise) {
  
    return knex.schema.createTable('cohorts', tbl => {
        // primary key
        tbl.increments();
        // name
        tbl.string('name', 250).notNullable();



    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};
