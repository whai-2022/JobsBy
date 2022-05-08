import request from 'superagent'

const jobsURL = '/'
const allJobsURL = '/api/allJobs'
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
    .catch((err) => console.log(err))
}

// posts new job
export function postJob(job) {
  return request
    .post(jobsURL)
    .send(job)
    .then((response) => response.body)
}

// gets a full list of jobs from database
export function getAllJobs(region) {
  console.log('getting jobs', region)
  return request
    .get(`${allJobsURL}/region/${region}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error!'))
}

export function getJobById(id) {
  return request
    .get(`/api/allJobs/${id}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error!'))
}
