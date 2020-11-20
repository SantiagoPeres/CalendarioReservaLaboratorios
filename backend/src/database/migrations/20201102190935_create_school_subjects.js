exports.up = (knex) => {
  return knex.schema.createTable('school_subjects', (table) => {
    table.increments('scholl_subjectsId').primary();
    table.string('name').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('school_subjects');
};
