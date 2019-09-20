
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('site_settings', (table) => {
    table.increments('id')
    table.string('page_name')
    table.string('site_email')
    table.string('site_phone_number')
    table.string('language')
    table.string('facebook_icon')
    table.string('facebook_link')
    table.string('twitter_icon')
    table.string('twitter_link')
    table.string('youtube_icon')
    table.string('youtube_link')
    table.string('ios_app_link')
    table.string('android_app_link')
    table.timestamp('created_at')
    table.timestamp('updated_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('site_settings')
}
