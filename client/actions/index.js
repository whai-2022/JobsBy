import { getAllJobs, postJob, getJobById } from '../apis'

export const SET_JOBS = 'SET_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const SET_ERROR = 'SET_ERROR'
export const GET_JOB_DETAILS = 'GET_JOB_DETAILS'
export const JOB_LOADING = 'JOB_LOADING'

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
    // try {
    //   dispatch(setLoading())

    //   const job = await getJobById(id)
    //   dispatch(getJobDetails(job))
    // } catch (error) {
    //   console.log(error.message)
    // }

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
