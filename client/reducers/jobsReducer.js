import { SET_JOBS } from '../actions'

const initialJobState = [
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
]

const jobsReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return action.jobs
    default:
      return state
  }
}

export default jobsReducer
