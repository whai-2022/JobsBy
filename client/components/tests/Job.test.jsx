import React from 'react'
import Job from '../Job'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<Job />', () => {
  it('should render the correct job details', () => {
    const job = {
      id: 1,
      title: 'A job title',
      description: 'Job Description',
      region: 'Auckland',
    }

    render(
      <Router>
        <Job
          id={job.id}
          title={job.title}
          description={job.description}
          pay={job.pay}
          region={job.region}
        />
      </Router>
    )

    expect(screen.getByText(job.description)).toBeInTheDocument()
    expect(screen.getByText(job.title)).toBeInTheDocument()
    expect(screen.getByText(job.region)).toBeInTheDocument()
    expect(screen.getByRole('link').href).toBe(
      `http://localhost/alljobs/${job.id}`
    )
  })
})
