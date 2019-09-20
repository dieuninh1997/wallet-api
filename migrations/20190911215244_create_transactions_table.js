
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('transactions', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('transaction_id')
    table.string('internal_transaction_id')
    table.string('currency').notNullable()
    table.decimal('amount', 10).defaultTo('0.0000000000')
    table.decimal('fee', 10).defaultTo('0.0000000000')
    table.string('status').notNullable()
    table.string('foreign_bank_account')
    table.string('foreign_bank_account_holder')
    table.string('foreign_blockchain_address')
    table.string('destination_tag')
    table.text('error_detail')
    table.integer('is_confirm').defaultTo(0)
    table.bigInteger('created_at').notNullable()
    table.bigInteger('updated_at').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('transactions')
}
