/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('types').insert([
    { id: 1, type: 'Voluntary' },
    { id: 2, type: 'Paid' },
  ])
}
