import { postJob } from '../apis'

export const ADD_JOB = 'ADD_JOB'
export const SET_ERROR = 'SET_ERROR'

// Simple actions

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

export function createJob(job) {
  return (dispatch) => {
    return postJob(job)
      .then((job) => {
        addJob(job)
      })
      .catch((errMessage) => {
        dispatch(setError(errMessage))
      })
  }
}
