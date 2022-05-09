const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllJobs,
  getJobById,
  addJob,
  deleteJob,
  acceptJob,
  getJobsByUserId,
  getJobsByAccepterId,
  updateJobById,
}

function getAllJobs(region, db = connection) {
  // search by region
  return db('jobs').select().where('accepted', false).where('region', region)
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

function getJobsByUserId(userId, db = connection) {
  console.log(userId)
  return db('jobs').select().where('userId', userId)
}

function getJobsByAccepterId(accepterId, db = connection) {
  return db('jobs').select().where('accepterId', accepterId)
}

// User who posted job can update the job listing
function updateJobById(job, id, db = connection) {
  return db('jobs').select().where('id', id).update(job)
}
