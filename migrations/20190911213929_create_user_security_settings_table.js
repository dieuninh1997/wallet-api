
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user_security_settings', (table) => {
    table.increments('id')
    table.integer('email_verified').defaultTo(0)
    table.string('email_verification_code')
    table.integer('phone_verified').defaultTo(0)
    table.string('phone_verification_code')
    table.integer('identity_verified').defaultTo(0)
    table.integer('bank_account_verified').defaultTo(0)
    table.integer('otp_verified').defaultTo(0)
    table.integer('passport_verified').defaultTo(0)
    table.string('passport_img').defaultTo('')
    table.string('passport_img2').defaultTo('')

    table.timestamp('created_at')
    table.timestamp('updated_at')
    table.text('public_key')
    table.text('private_key')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_security_settings')
}
