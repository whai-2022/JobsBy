const request = require('supertest')
const server = require('../../server')
const db = require('../../../server/db/db')

jest.mock('../../../server/db/db')

describe('GET /api/myJobs/jobsListed/:userId', () => {
  it('should return all the correct jobs', () => {
    const jobData = {
      id: 1,
      userId: 'Auth0||id',
      name: 'Hilda',
      email: 'google@gmail.com',
      phone: '111',
      title: 'Job listing',
      description: 'It is job.',
      requirements: '30 years experience',
      type: 'voluntary',
      region: 'Auckland',
      lat: '-36.8505',
      lon: '174.7645',
      contactBy: 'This time',
      occurrence: 'this occurred',
      when: '01/01/1993',
      pay: 'none',
      accepted: false,
      accepterId: 'Auth0||otherId',
    }
    db.getJobsByUserId.mockReturnValue(Promise.resolve(jobData))
    return request(server)
      .get('/api/myJobs/jobsListed/1')
      .then(res => {
        expect(res.body).toEqual(jobData)
      })
  })
})