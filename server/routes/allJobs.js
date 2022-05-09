const express = require('express')
const router = express.Router()
//TODO remove commmented code
// const checkJwt = require('../auth-0')

const db = require('../db/db')

// route  GET /api/allJobs/:id
// Gets a job by id
router.get('/:id', (req, res) => {
  const id = +req.params.id // converts to a number
  //JV: this works but you are relying on a side effect of the + operator
  // and not it's core function which is why you need the comment after it
  // I would suggest to use Number() or paraseInt() which are more explicit

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
  // TODO remove uncommented code
  // console.log('getting jobs by region from db', region)
  db.getAllJobs(region)
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((e) => {
      //remove console log
      console.log(e.message)
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
  const id = +req.params.id
  db.deleteJob(id)
    .then(() => {
      res.json(id)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

// route  PATCH /api/allJobs/:id

// I found these comments more confusing than the code below (which looks fine)
// res.body should be { accepterId }

// updates accepted to true and acceptedId
// gets the updated job and sends it back
router.patch('/:id', (req, res) => {
  const id = +req.params.id
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
