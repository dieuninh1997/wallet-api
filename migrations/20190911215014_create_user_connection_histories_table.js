
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user_connection_histories', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('device').notNullable()
    table.string('operating_system').notNullable()
    table.string('platform').notNullable()
    table.string('ip_address').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_connection_histories')
}
