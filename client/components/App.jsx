import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Container } from '@chakra-ui/react'
// a11y: skip Navigation link and destination container for screen readers and keyboard users
// TODO: import and add SkipNavContent to each component, and wrap around main content of that component.
// More info: https://chakra-ui.com/docs/components/navigation/skip-nav
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

// import { useAuth0 } from '@auth0/auth0-react'

import Header from './Header'
import Splash from './Splash'
import Home from './Home'
import AllJobs from './AllJobs'
import PostJob from './PostJob'
import Nav from './Nav'
import Job from './Job'
// import LoggedIn from './LoggedIn'

function App() {
  //user.sub

  return (
    <>
      <header className="header">
        <SkipNavLink>Skip to content</SkipNavLink>
        <Header />
        <Nav />
      </header>
      <main>
        <Container maxW="container.sm" textAlign="center">
          {/* <LoggedIn /> */}
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/alljobs" element={<AllJobs />} />
            {/* <Route path='/alljobs/:id' element={<JobDetails />} /> */}
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/job" element={<Job />} />
          </Routes>
        </Container>
      </main>
      <footer className="footer"></footer>
    </>
  )
}

export default App
