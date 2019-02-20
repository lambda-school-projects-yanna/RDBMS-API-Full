
exports.up = function(knex, Promise) {

    return knex.schema.createTable('students', tbl => {
        // primary key
        tbl.increments();
        // name
        tbl.string('name', 250).notNullable();
        // cohort id
        tbl.integer('cohort_id')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
