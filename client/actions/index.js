import { getAllJobs } from '../apis'

export const SET_JOBS = 'SET_JOBS'

export function setJobs(jobs) {
  return {
    type: SET_JOBS,
    jobs: jobs,
  }
}

export function fetchJobs() {
  return (dispatch) => {
    return getAllJobs()
      .then((res) => {
        dispatch(setJobs(res))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
