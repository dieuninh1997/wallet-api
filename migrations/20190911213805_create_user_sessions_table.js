
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user_sessions', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('session_id').notNullable()
    table.datetime('expire_at').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_sessions')
}
