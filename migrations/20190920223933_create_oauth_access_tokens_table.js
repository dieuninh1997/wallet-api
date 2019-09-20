
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('oauth_access_tokens', (table) => {
    table.string('id').notNullable()
    table.string('secret')
    table.integer('user_id')
    table.integer('client_id').notNullable()
    table.string('name')
    table.text('scopes')
    table.integer('revoked').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
    table.datetime('expires_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('oauth_access_tokens')
}
