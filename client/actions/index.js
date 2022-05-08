<<<<<<< HEAD
import { getAllJobs, getUserJobs } from '../apis'

export const SET_JOBS = 'SET_JOBS'
export const REQUEST_USER_JOBS = 'REQUEST_USER_JOBS'
=======
import { getAllJobs, postJob } from '../apis'

export const SET_JOBS = 'SET_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const SET_ERROR = 'SET_ERROR'

// Simple actions
>>>>>>> f67d8757a5bac4cf86137b5c40a38bb8e0751dd7

export function setJobs(jobs) {
  return {
    type: SET_JOBS,
    jobs: jobs,
  }
}
export function addJob(job) {
  return {
    type: ADD_JOB,
    payload: job,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

// Fancy thunks

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

<<<<<<< HEAD
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
=======
export function createJob(job) {
  return (dispatch) => {
    return postJob(job)
      .then((job) => {
        addJob(job)
      })
      .catch((errMessage) => {
        dispatch(setError(errMessage))
      }
      )}
  }
>>>>>>> f67d8757a5bac4cf86137b5c40a38bb8e0751dd7
