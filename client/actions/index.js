import { getAllJobs, postJob, getJobById, getUserJobs } from '../apis'
import * as api from '../apis'

export const REQUEST_USER_JOBS = 'REQUEST_USER_JOBS'

export const SET_JOBS = 'SET_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const SET_ERROR = 'SET_ERROR'
export const GET_JOB_DETAILS = 'GET_JOB_DETAILS'
export const JOB_LOADING = 'JOB_LOADING'
export const ACCEPT_JOB = 'ACCEPT_JOB'

// Simple actions

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

export function setLoading() {
  return {
    type: JOB_LOADING,
  }
}

// Fancy thunks

export function getJobDetails(job) {
  return {
    type: GET_JOB_DETAILS,
    payload: job,
  }
}

export function requestUserJobs(jobs) {
  return {
    type: REQUEST_USER_JOBS,
    payload: { jobs: jobs },
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
    dispatch(setLoading())

    return getJobById(id)
      .then((res) => {
        dispatch(getJobDetails(res))
        return null
      })
      .catch((err) => {
        console.log(err.message, 'got an error')
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

export function acceptJob(jobId, accepterId) {
  return (dispatch) => {
    return api
      .acceptJob(jobId, accepterId)
      .then((job) => {
        dispatch({
          type: ACCEPT_JOB,
          payload: job,
        })
      })
      .catch((errMessage) => {
        dispatch(setError(errMessage))
      })
  }
}
