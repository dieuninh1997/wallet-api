
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user_settings', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('key').notNullable()
    table.string('value').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_settings')
}
