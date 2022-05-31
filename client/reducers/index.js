import { combineReducers } from 'redux'

import jobsReducer from './jobsReducer'
import myJobsReducer from './myJobsReducer'

export default combineReducers({
  jobs: jobsReducer,
  myJobs: myJobsReducer,
})
