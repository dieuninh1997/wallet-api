
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user_blockchain_addresses', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('currency').notNullable()
    table.string('blockchain_address').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_blockchain_addresses')
}
