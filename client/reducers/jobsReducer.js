import { SET_JOBS, GET_JOB_DETAILS, JOB_LOADING, ACCEPT_JOB } from '../actions'

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
      return { ...state, jobs: action.jobs }
    case GET_JOB_DETAILS:
      return { ...state, job: action.payload, loading: false }
    case JOB_LOADING:
      return { ...state, loading: true }
    case ACCEPT_JOB:
      return { ...state, jobs: [...state.jobs.filter(job => job.id !== action.payload.id), action.payload] }
    default:
      return state
  }
}

export default jobsReducer
