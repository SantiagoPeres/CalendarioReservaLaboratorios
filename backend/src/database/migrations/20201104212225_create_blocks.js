exports.up = (knex) => {
  return knex.schema.createTable('blocks', (table) => {
    table.increments('block_id').primary();
    table.string('identification').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('blocks');
};
