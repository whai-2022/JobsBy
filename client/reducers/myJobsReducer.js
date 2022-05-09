import { REQUEST_USER_JOBS, REQUEST_ACCEPTED_JOBS } from '../actions'

const initialJobState = {
  myJobs: [],
  acceptedJobs: [],
}

function myJobsReducer(state = initialJobState, action) {
  console.log(action)
  switch (action.type) {
    case REQUEST_USER_JOBS:
      return { ...state, myJobs: action.payload }
    case REQUEST_ACCEPTED_JOBS:
      return { ...state, acceptedJobs: action.payload }
    default:
      return state
  }
}

// function acceptedJobsReducer(state = initialJobState, action) {
//   switch (action.type) {
//     case REQUEST_ACCEPTED_JOBS:
//       return { ...state, acceptedJobs: action.payload }
//     default:
//       return state
//   }
// }

export default myJobsReducer
