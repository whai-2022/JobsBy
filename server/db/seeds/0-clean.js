/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = (knex) => {
  return knex('types')
    .del()
    .then(() => knex('jobs').del())
}
