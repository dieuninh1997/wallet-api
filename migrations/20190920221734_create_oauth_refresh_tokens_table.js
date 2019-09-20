
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('oauth_refresh_tokens', (table) => {
    table.string('id').notNullable()
    table.string('access_token_id').notNullable()
    table.integer('revoked').defaultTo(1)
    table.datetime('expires_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('oauth_refresh_tokens')
}
