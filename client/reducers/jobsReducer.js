import { SET_JOBS, GET_JOB_DETAILS } from '../actions'

const initialJobState = {
  jobs: [
    {
      id: 1,
      title: 'dishes',
      description: 'piles and piles of dishes',
      requirements: 'none',
      locationRegion: 'Kaipara',
      locationSuburb: 'Paparoa',
      typeId: 1,
      pay: '0.001 BTC',
    },
    {
      id: 2,
      title: 'Clean out my car',
      description: 'General cleaning and vacuuming in my rusty old Outlander',
      requirements: 'Elbow grease',
      locationRegion: 'Auckland',
      locationSuburb: 'Mt. Eden',
      typeId: 1,
      pay: '$40',
    },
  ],
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
}

const jobsReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOBS:
      // return action.jobs
      return { jobs: action.jobs }
    case GET_JOB_DETAILS:
      return { job: action.job }

    default:
      return state
  }
}

export default jobsReducer
