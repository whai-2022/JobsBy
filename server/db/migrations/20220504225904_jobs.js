exports.up = (knex) => {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('userId')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('title')
    table.text('description') // for longer strings
    table.text('requirements')
    table.integer('type_id').references('types.id') // type_id references the id in the types table
    table.string('category')
    table.string('locationRegion') // todo: fetch all regions from api
    table.string('locationSuburb') // todo: fetch all suburbs from api
    table.string('pay')
    table.boolean('accepted')
    table.string('accepterId')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('jobs')
}
