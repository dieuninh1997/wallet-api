
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('oauth_auth_codes', (table) => {
    table.string('id').notNullable()
    table.integer('user_id').notNullable()
    table.integer('client_id').notNullable()
    table.text('scopes')
    table.text('redirect').notNullable()
    table.integer('revoked').notNullable()
    table.datetime('expires_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('oauth_auth_codes')
}
