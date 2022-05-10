import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Container, Box } from '@chakra-ui/react'
/* a11y: skip Navigation link and destination container for screen readers and keyboard users
  More info: https://chakra-ui.com/docs/components/navigation/skip-nav */
import { SkipNavLink } from '@chakra-ui/skip-nav'

// import Header from './Header'
import Splash from './Splash'
import Home from './Home'
import AllJobs from './AllJobs'
import PostJob from './PostJob'
import Nav from './Nav'
import Job from './Job'
import JobDetail from './JobDetail'
import MyJobs from './MyJobs'
import Footer from './Footer'
// import NavHead from './NavHead'

function App() {
  //user.sub

  return (
    <>
      <header className="header">
        <SkipNavLink>Skip to content</SkipNavLink>
        {/* <Header /> */}
        <Nav />
        {/* <NavHead /> */}
      </header>
      <main>
        <Container maxW="container.sm" textAlign="center">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/alljobs" element={<AllJobs />} />
            <Route path="/alljobs/:id" element={<JobDetail />} />
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/job" element={<Job />} />
            {/* TODO: when my profile is made (maybe), we can make this myProfile/myJobs ? */}
            <Route path="/myJobs" element={<MyJobs />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <Box pt='40'>
        <Footer />
        </Box>
      </footer>
      <footer className="footer"></footer>
    </>
  )
}

export default App
