import React from 'react';
import AcceptedJobs from "../AcceptedJobs"
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('react-redux')
jest.mock('../../apis')

describe('<AllJobs />', () => {
  it('should render all the jobs', () => {
    useSelector.mockReturnValue({
      jobs: [
        {
          id: 8,
          title: 'A job title',
          description: 'Job Description',
          lat: '0',
          lon: '0',
          pay: '$50/hr',
          region: 'Auckland',
        },
        {
          id: 9,
          title: 'A second job title',
          description: 'Second Job Description',
          lat: '0',
          lon: '0',
          pay: '$70/hr',
          region: 'Wellington',
        }
      ]
    })

    render(
      <Router>
        <AcceptedJobs />
      </Router>
    )
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4) // there are two extra links to leafletjs and openstreetmap
    expect(links[2].href).toBe('http://localhost/alljobs/8')
    expect(links[3].href).toBe('http://localhost/alljobs/9')
  })
})