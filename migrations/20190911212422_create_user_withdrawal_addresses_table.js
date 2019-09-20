
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user_withdrawal_addresses', (table) => {
    table.increments()
    table.integer('user_id').notNullable()
    table.string('coin').notNullable()
    table.string('wallet_name').notNullable()
    table.string('wallet_address').notNullable()
    table.string('tag')
    table.integer('is_whitelist').defaultTo(0)
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_withdrawal_addresses')
}
