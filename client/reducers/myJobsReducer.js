import { REQUEST_USER_JOBS } from '../actions'

const initialJobState = {
  jobs: [],
}

function myJobsReducer(state = initialJobState, action) {
  switch (action.type) {
    case REQUEST_USER_JOBS:
      return action.payload
    default:
      return state
  }
}

export default myJobsReducer
