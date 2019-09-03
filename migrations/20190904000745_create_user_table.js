exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name')
    table.string('email')
    table.integer('security_level').defaultTo(1)
    table.integer('restrict_mode').defaultTo(0)
    table.string('password')
    table.string('remember_token')
    table.string('google_authentication')
    table.string('eth_address').notNullable()
    table.string('mnemonic').notNullable()
    table.string('keystore').notNullable()
    table.string('phone_number').notNullable()
    table.string('passport_number')
    table.string('facebook_id')
    table.string('login_type')
    table.integer('is_active').defaultTo(1)
    table.integer('is_notify_email').defaultTo(0)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at')
    table.datetime('last_login')
    table.string('private_key')
    table.datetime('last_logout')
    table.datetime('lock_at')
    table.string('unlock_code')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
