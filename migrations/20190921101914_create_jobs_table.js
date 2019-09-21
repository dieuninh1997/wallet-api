
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('jobs', (table) => {
    table.increments('id')
    table.string('queue').notNullable()
    table.text('payload').notNullable()
    table.integer('attempts').notNullable()
    table.integer('reserved_at')
    table.integer('available_at').notNullable()
    table.integer('created_at').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
