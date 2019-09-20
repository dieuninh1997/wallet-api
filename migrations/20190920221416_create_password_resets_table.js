
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('password_resets', (table) => {
    table.string('email').notNullable()
    table.string('token').notNullable()
    table.timestamp('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('password_resets')
}
