import { SET_JOBS } from '../actions'

const initialJobState = {
  jobs: [
    {
      id: 1,
      title: 'dishes',
      description: 'piles and piles of dishes',
      requirements: 'none',
      locationRegion: 'Kaipara',
      locationSuburb: 'Paparoa',
      lat: '-36.8505',
      lon: '174.7645',
      typeId: 1,
      pay: '0.001 BTC',
    },
  ],
  job: {}
}

const jobsReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return { jobs: action.jobs }
    default:
      return state
  }
}

export default jobsReducer
