import { SET_JOBS, GET_JOB_DETAILS, JOB_LOADING } from '../actions'

//what is the job state for? I can't see it being set anywhere and wonder if this state
//should be managed in another way. i.e. if you want a current job could you track it with
//react-router params and just use a find on your jobs array?
const initialJobState = {
  jobs: [],
  job: {
    id: 2,
    title: 'Clean out my car',
    description: 'General cleaning and vacuuming in my rusty old Outlander',
    requirements: 'Elbow grease',
    locationRegion: 'Auckland',
    locationSuburb: 'Mt. Eden',
    typeId: 1,
    pay: '$40',
  },
  loading: false, // loading individual job
}

const jobsReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOBS:
      //remove console logs and commented code, so remove this twice!
      // console.log(action)
      return { ...state, jobs: action.jobs }
    case GET_JOB_DETAILS:
      return { ...state, job: action.payload, loading: false }
    case JOB_LOADING:
      return { ...state, loading: true }
    default:
      return state
  }
}

export default jobsReducer
