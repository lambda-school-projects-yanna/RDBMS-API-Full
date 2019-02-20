
exports.up = function(knex, Promise) {

    return knex.schema.createTable('students', tbl => {
        // primary key
        tbl.increments();
        // name
        tbl.string('name', 250).notNullable();
        // cohort id foreign key
        tbl.integer('cohort_id').unsigned().references('id').inTable('cohorts');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
