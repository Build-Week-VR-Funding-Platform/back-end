
exports.up = function(knex) {
    return knex.schema.createTable('projects', (tbl) => {
        tbl.increments();
        tbl.text('image', 'longtext');
        tbl.string('project_title', 250)
           .notNullable()
           .unique();
        tbl.string('project_type', 250)
           .notNullable();
        tbl.text('mission_statement', 'longtext')//holds a string with a maximum length of 4,294,967,295 characters
            .notNullable();
        tbl.text('project_description', 'longtext')
           .notNullable();
        tbl.decimal('funding_amount', 65, 2)//DECIMAL(total # of digits, numbers allowed after decimal ) Max size 65 | max after decimal 10
            .notNullable();
        tbl.text('project_timeline', 'longtext')
           .notNullable();
        tbl.text('project_assets', 'longtext')
            .notNullable();
        tbl.integer('founders_id')
            .unsigned()
            .references('id')
            .inTable('founders')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
