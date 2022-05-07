import { getAllJobs, getJobById } from '../apis'

export const SET_JOBS = 'SET_JOBS'
export const GET_JOB_DETAILS = 'GET_JOB_DETAILS'

export function setJobs(jobs) {
  return {
    type: SET_JOBS,
    jobs: jobs,
  }
}

export function getJobDetails(job) {
  return {
    type: GET_JOB_DETAILS,
    payload: job,
  }
}

export function fetchJobs(region) {
  return (dispatch) => {
    return getAllJobs(region)
      .then((res) => {
        dispatch(setJobs(res))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function fetchJobByID(id) {
  return (dispatch) => {
    return getJobById(id)
      .then((res) => {
        dispatch(getJobDetails(res))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
