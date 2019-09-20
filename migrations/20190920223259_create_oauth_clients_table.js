
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('oauth_clients', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('name').notNullable()
    table.string('secret').notNullable()
    table.text('redirect').notNullable()
    table.integer('personal_access_client').notNullable()
    table.integer('password_client').notNullable()
    table.integer('revoked').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('oauth_clients')
}
