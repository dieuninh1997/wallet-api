
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('admins', (table) => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('remember_token').notNullable()
    table.integer('is_super_admin').defaultTo(0)
    table.integer('status').defaultTo(1)
    table.text('description')
    table.datetime('last_login')
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('admins')
}
