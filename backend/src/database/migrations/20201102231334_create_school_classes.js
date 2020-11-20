exports.up = (knex) => {
  return knex.schema.createTable('school_classes', (table) => {
    table.increments('school_class_id').primary();
    table.string('name').notNullable();
    table.integer('teacher').unsigned().notNullable();
    table.foreign('teacher').references('teacher_id').inTable('teachers');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('school_classes');
};
