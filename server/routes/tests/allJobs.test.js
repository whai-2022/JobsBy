// good start, but still a lot of coverage missing
const request = require('supertest')
const server = require('../../server')
const db = require('../../../server/db/db')

jest.mock('../../../server/db/db')

describe('GET /', () => {
  test('gets all the jobs in the db', () => {
    db.getAllJobs.mockReturnValue(
      Promise.resolve([
        {
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
        },
      ])
    )
    expect.assertions(1)
    return request(server)
      .get('/api/allJobs/region/:region')
      .then((res) => {
        expect(res.text).toContain('Auckland')
      })
  })
  test('returns status 500 if database error', () => {
    db.getAllJobs.mockImplementation(() => {
      return Promise.reject(new Error('not good'))
    })
    return request(server)
      .get('/api/allJobs/region/:region')
      .then((res) => {
        expect(res.text).toContain('not good')
        expect(res.status).toBe(500)
      })
  })
})
