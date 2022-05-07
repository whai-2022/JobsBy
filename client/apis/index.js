import request from 'superagent'

const jobsURL = '/'

// gets a list of suggested matching addresses
export function getAutocompleteAddresses(address) {
  return request
    .get(
      `https://api.addressable.co.nz/v2/autocomplete?api_key=QG8WqWD76jb02uxJAAQZWQ&country_code=NZ&q=${address.replaceAll(
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
