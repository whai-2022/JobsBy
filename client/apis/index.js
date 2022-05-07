import request from 'superagent'

const allJobsURL = '/api/allJobs'
const myJobsURL = '/api/myJobs/jobsListed'
const apiKey1 = 'QG8WqWD76jb02uxJAAQZWQ'
const apiKey2 = 'wcyCeEHbpFxfjDPDJD3UWQ'

// gets a list of suggested matching addresses
export function getAutocompleteAddresses(address) {
  return request
    .get(
      `https://api.addressable.co.nz/v2/autocomplete?api_key=${apiKey2}&country_code=NZ&q=${address.replaceAll(
        ' ',
        '+'
      )}`
    )
    .then((res) => res.body)
}

// gets a full list of jobs from database
export function getAllJobs(region) {
  console.log('getting jobs', region)
  return request
    .get(`${allJobsURL}/region/${region}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error!'))
}

// gets all jobs by specific user
export function getUserJobs(userId) {
  return request
    .get(`${myJobsURL}/${userId}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error'))
}
