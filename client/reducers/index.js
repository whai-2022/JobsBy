import { combineReducers } from 'redux'

import jobsReducer from './jobsReducer'
import myJobsReducer from './myJobsReducer'

//state.jobsReducer.jobs seems clunky to me, I would just have state.jobs and refactor
// the loading and job part of jobsReducer somewhere else
export default combineReducers({
  jobsReducer,
  myJobs: myJobsReducer,
})
