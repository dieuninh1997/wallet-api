
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('settings', (table) => {
    table.increments('id')
    table.string('key').notNullable()
    table.text('value').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('settings')
}
