const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllJobs,
  getJobById,
  addJob,
  deleteJob,
  acceptJob,
}

function getAllJobs(db = connection) {
  return db('jobs').select()
}

function getJobById(id, db = connection) {
  return db('jobs').select().where('id', id).first()
}

function addJob(job, db = connection) {
  return db('jobs').insert(job)
}

function deleteJob(id, db = connection) {
  return db('jobs').del().where('id', id)
}

function acceptJob(id, accepterId, db = connection) {
  return db('jobs')
    .select()
    .where('id', id)
    .update({ accepted: true, accepterId })
}
