const express = require('express')
const router = express.Router()

const db = require('../db/db')

// route  GET /api/allJobs/:id
// Gets a job by id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getJobById(id)
    .then((job) => {
      res.json(job)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

// route  GET /api/allJobs/region/:region
// gets all jobs by region
router.get('/region/:region', (req, res) => {
  const region = req.params.region
  db.getJobsByRegion(region)
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

// route  POST /api/allJobs
// POSTs to the database
router.post('/', (req, res) => {
  const job = req.body
  db.addJob(job)
    .then((id) => {
      const newJobId = id[0]
      return db.getJobById(newJobId)
    })
    .then((job) => {
      res.json(job)
    })
    .catch((e) => {
      console.log(e.message)
      res.status(500).send(e.message)
    })
})

// route  DELETE /api/jobs/:id
// Deletes a job by id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteJob(id)
    .then(() => {
      res.json(id)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

// route  PATCH /api/allJobs/:id
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const accepterId = req.body.accepterId

  db.acceptJob(id, accepterId)
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
