import React from 'react';
import AcceptedJobs from "../AcceptedJobs"
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';


import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('react-redux')
jest.mock('../../apis')

describe('render <AcceptedJobs/> component', () => {
  it('should render accepted jobs under jobs I accepted', () => {
    useSelector.mockReturnValue({
      acceptedJobs: [
        {
          id: 9,
          title: 'Shop assistant',
          description: 'Sell my things',
          lat: '091',
          lon: '322',
          pay: '$7000/hr',
          region: 'Wellington',
        },
        {
          id: 8,
          title: 'Go fishing with me',
          description: 'I have a boat but you are gonna need your own shoes',
          lat: '93139729',
          lon: '9328',
          pay: 'No pay',
          region: 'Queensland or Queenstown depends how you feel',
        }
      ]
    })

    render(
      <Router>
      <AcceptedJobs />
      </Router>
    )
    const links = screen.getAllByRole('link')

    screen.debug()

    expect(links).toHaveLength(2)
    expect(links[0].href).toBe('http://localhost/alljobs/9')
    expect(links[1].href).toBe('http://localhost/alljobs/8')
  })
})