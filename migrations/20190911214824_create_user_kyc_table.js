
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user_kyc', (table) => {
    table.increments('id')
    table.string('full_name').notNullable()
    table.string('id_front').notNullable()
    table.string('id_back').notNullable()
    table.string('id_selfie').notNullable()
    table.string('gender').notNullable()
    table.string('country').notNullable()
    table.string('id_number').notNullable()
    table.integer('user_id').notNullable()
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_kyc')
}
