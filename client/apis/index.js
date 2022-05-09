import request from 'superagent'

// const jobsURL = '/'
const allJobsURL = '/api/allJobs'
const myJobsURL = '/api/myJobs/jobsListed'
// const apiKey1 = 'QG8WqWD76jb02uxJAAQZWQ'
// const apiKey2 = 'wcyCeEHbpFxfjDPDJD3UWQ'
const apiKey3 = 'gSnstGhj27bhsCpZR1Ri4A'
// const apiKey4 = 'd5d7vnRinIwJCVRtlTXBAw'

// gets a list of suggested matching addresses
export function getAutocompleteAddresses(address) {
  return request
    .get(
      `https://api.addressable.co.nz/v2/autocomplete?api_key=${apiKey3}&country_code=NZ&q=${address.replaceAll(
        ' ',
        '+'
      )}`
    )
    .then((res) => res.body)
    .catch((err) => console.log(err))
}

// posts new job
export function postJob(job) {
  console.log(allJobsURL, job)
  return request
    .post(allJobsURL)
    .send(job)
    .then((response) => response.body)
    .catch((err) => console.log(err))
}

// gets a full list of jobs from database
export function getAllJobs(region) {
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

// gets all jobs by specific user
export function getUserJobs(userId) {
  return request
    .get(`${myJobsURL}/${userId}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.status, 'error'))
}

// accepts job
export function acceptJob(jobId, accepterId) {
  return request
    .patch(`${allJobsURL}/${jobId}`)
    .send({ accepterId })
    .then(res => res.body)
    .catch((err) => console.log(err.message))
}