
exports.up = function (knex) {
    return knex.schema.createTable('founders', (tbl) => {
        tbl.increments();// creates id
        tbl.string('username', 128)
            .notNullable()
            .unique();
        tbl.string('password', 128)
            .notNullable();
        tbl.string('name', 250)
        tbl.string('email', 250)
            .unique();
        tbl.text('about', 'longtext')//holds a string with a maximum length of 4,294,967,295 characters
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('founders');
};
