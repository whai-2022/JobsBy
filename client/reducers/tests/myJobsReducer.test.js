import { REQUEST_USER_JOBS, REQUEST_ACCEPTED_JOBS } from '../../actions'
import myJobsReducer from '../myJobsReducer'
const initialState = {
  myJobs: [],
  acceptedJobs: [],
}

describe('myJobsReducer', () => {
  it('should correctly set myJobs', () => {
    const action = {
      type: REQUEST_USER_JOBS,
      payload: [
        { id: 1, title: 'Job 1' },
        { id: 2, title: 'Job 2' }
      ] 
    }
    const expected = {
      myJobs: [
        { id: 1, title: 'Job 1' },
        { id: 2, title: 'Job 2' }
      ],
      acceptedJobs: []
    }
    const actual = myJobsReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('should correctly set acceptedJobs', () => {
    const action = {
      type: REQUEST_ACCEPTED_JOBS,
      payload: [
        { id: 1, title: 'Job 1' },
        { id: 2, title: 'Job 2' }
      ] 
    }
    const expected = {
      acceptedJobs: [
        { id: 1, title: 'Job 1' },
        { id: 2, title: 'Job 2' }
      ],
      myJobs: []
    }
    const actual = myJobsReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})