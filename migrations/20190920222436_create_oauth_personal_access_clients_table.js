
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('oauth_personal_access_clients', (table) => {
    table.increments('id')
    table.integer('client_id').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('oauth_personal_access_clients')
}
