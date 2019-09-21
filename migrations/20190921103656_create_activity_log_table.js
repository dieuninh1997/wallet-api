
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('activity_log', (table) => {
    table.increments('id')
    table.string('log_name')
    table.text('description').notNullable()
    table.integer('subject_id')
    table.string('subject_type')
    table.integer('causer_id')
    table.string('causer_type')
    table.text('properties')
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('activity_log')
}
