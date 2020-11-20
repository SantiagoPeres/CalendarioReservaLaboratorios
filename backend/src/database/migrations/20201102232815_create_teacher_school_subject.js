exports.up = (knex) => {
  return knex.schema.createTable('teacher_school_subjects', (table) => {
    table.increments('teacher_school_subject_id').primary();
    table.integer('teacher').unsigned().notNullable();
    table.integer('subject').unsigned().notNullable();
    table.foreign('teacher').references('teacher_id').inTable('teachers');
    table
      .foreign('subject')
      .references('school_subject_id')
      .inTable('school_subjects');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('teacher_school_subjects');
};
