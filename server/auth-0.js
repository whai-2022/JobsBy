const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = 'https://pont.au.auth0.com'
const audience = 'https://api/allJobs'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt
