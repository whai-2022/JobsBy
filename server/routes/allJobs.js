const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllJobs()
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((e) => {
      res.status(500).send(e.message)
    })
})

module.exports = router
