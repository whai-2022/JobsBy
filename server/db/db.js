const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllJobs,
}

function getAllJobs(db = connection) {
  return db('jobs').select()
}
