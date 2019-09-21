
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('failed_jobs', (table) => {
    table.increments('id')
    table.text('connection').notNullable()
    table.text('queue').notNullable()
    table.text('payload').notNullable()
    table.text('exception').notNullable()
    table.timestamp('failed_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('failed_jobs')
}
