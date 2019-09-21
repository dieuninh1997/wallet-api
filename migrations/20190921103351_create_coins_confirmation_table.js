
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('coins_confirmation', (table) => {
    table.increments('id')
    table.string('coin').notNullable()
    table.integer('confirmation').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('coins_confirmation')
}
