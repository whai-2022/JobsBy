import { SET_JOBS, GET_JOB_DETAILS, JOB_LOADING, ACCEPT_JOB } from '../../actions'
import jobsReducer from '../jobsReducer'
const initialState = {
  jobs: [],
  job: {},
  loading: false
}

describe('jobsReducer', () => {
  it('should correctly set the jobs', () => {
    const action = {
      type: SET_JOBS,
      jobs: [
        { id: 1, title: 'Job 1' },
        { id: 2, title: 'Job 2' }
      ] 
    }
    const expected = {
      jobs: [
        { id: 1, title: 'Job 1' },
        { id: 2, title: 'Job 2' }
      ],
      job: {},
      loading: false
    }
    const actual = jobsReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('should correctly set the job', () => {
    const action = {
      type: GET_JOB_DETAILS,
      payload: { id: 1, title: 'Job 1' }
    }
    const expected = {
      jobs: [],
      job: { id: 1, title: 'Job 1' },
      loading: false
    }
    const actual = jobsReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('should correctly set the loading state to true', () => {
    const action = {
      type: JOB_LOADING
    }
    const expected = {
      jobs: [],
      job: {},
      loading: true
    }
    const actual = jobsReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('should correctly accept the job and update the jobs and job', () => {
    const initialAcceptState = {
      jobs: [
        { id: 1, title: 'Old Job Title' }
      ],
      job: {},
      loading: false
    }
    const action = {
      type: ACCEPT_JOB,
      payload: { id: 1, title: 'New Job Title' }
    }
    const expected = {
      jobs: [
        { id: 1, title: 'New Job Title' }
      ],
      job: { id: 1, title: 'New Job Title' },
      loading: false
    }
    const actual = jobsReducer(initialAcceptState, action)
    expect(actual).toEqual(expected)
  })
})