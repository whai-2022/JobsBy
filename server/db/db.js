const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllJobs,
  getJobById,
  addJob,
}

function getAllJobs(db = connection) {
  return db('jobs').select()
}

function getJobById(id, db = connection) {
  return db('jobs').select().where('id', id)
}

function addJob(job, db = connection) {
  return db('jobs').insert(job)
}
