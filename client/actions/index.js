import { getAllJobs, getUserJobs } from '../apis'

export const SET_JOBS = 'SET_JOBS'
export const REQUEST_USER_JOBS = 'REQUEST_USER_JOBS'

export function setJobs(jobs) {
  return {
    type: SET_JOBS,
    jobs: jobs,
  }
}

export function requestUserJobs(jobs) {
  return {
    type: REQUEST_USER_JOBS,
    payload: { jobs },
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

export function fetchUserJobs(userId) {
  return (dispatch) => {
    return getUserJobs(userId)
      .then((res) => {
        dispatch(requestUserJobs(res))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
