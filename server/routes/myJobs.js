const express = require('express')
const router = express.Router()

const db = require('../db/db')

// route  GET /api/myJobs/jobsListed/:userId
// Gets the jobs (by userId) that a user has listed
router.get('/jobsListed/:userId', (req, res) => {
  const userId = req.params.userId
  db.getJobsByUserId(userId)
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

// route  GET /api/myJobs/jobsDone/:accepterId
// Gets the jobs (by acceptedId) that a user has accepted (so the user is the one doing the job)
router.get('/jobsDone/:accepterId', (req, res) => {
  const accepterId = req.params.accepterId
  db.getJobsByAccepterId(accepterId)
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

// route PATCH /api/myJobs/:id
// Updates the job
// id is the job's id
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const job = req.body
  db.updateJobById(job, id)
    .then(() => {
      return db.getJobById(id)
    })
    .then((job) => {
      res.json(job)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

module.exports = router
