import React from 'react'
import JobDetail from '../JobDetail'
import { useDispatch, useSelector } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import '@testing-library/jest-dom'

jest.mock('react-redux')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}))
jest.mock('@auth0/auth0-react')

describe('<JobDetail />', () => {
  it('should render the correct job details', () => {
    const job = {
      id: 8,
      title: 'A job title',
      description: 'Job Description',
      lat: '0',
      lon: '0',
      region: 'Auckland',
    }
    useSelector.mockReturnValue({
      job,
      loading: false,
    })

    let dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)

    useParams.mockReturnValue({ id: 8 })
    useAuth0.mockReturnValue({ isAuthenticated: true })

    render(
      <Router>
        <JobDetail />
      </Router>
    )
    expect(screen.getByText(job.region)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: job.title })).toBeInTheDocument()
    expect(screen.getByText(job.description)).toBeInTheDocument()
  })
})
