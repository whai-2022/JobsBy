const request = require('supertest')
const server = require('../../server')
const db = require('../../../server/db/db')

jest.mock('../../../server/db/db')

const jobsData = [
  {
    id: 1,
    userId: 1,
    accepted: false,
    accepterId: 'Auth0||otherId',
  },
  {
    id: 2,
    userId: 1,
    accepted: false,
    accepterId: 'Auth0||otherId',
  }
]

describe('GET /api/myJobs/jobsListed/:userId', () => {
  it('should return the correct jobs', () => {
    db.getJobsByUserId.mockReturnValue(Promise.resolve(jobsData))
    return request(server)
      .get('/api/myJobs/jobsListed/1')
      .then(res => {
        expect(res.body).toEqual(jobsData)
      })
  })
})

describe('GET /api/myJobs/jobsDone/:accepterId', () => {
  it('should return the correct jobs', () => {
    db.getJobsByAccepterId.mockReturnValue(Promise.resolve(jobsData))
    return request(server)
      .get('/api/myJobs/jobsDone/Auth0||otherId')
      .then(res => {
        expect(res.body).toEqual(jobsData)
      })
  })
})