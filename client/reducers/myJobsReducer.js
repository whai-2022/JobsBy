import { REQUEST_USER_JOBS } from '../actions'

// I would make this inital state an empty array otherwise you will be using
// state.myJobs.jobs when state.myJobs would be easier to remember
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
