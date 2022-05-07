import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Container} from '@chakra-ui/react'

// import { useAuth0 } from '@auth0/auth0-react'

import Header from './Header'
import Splash from './Splash'
import Home from './Home'
import AllJobs from './AllJobs'
import PostJob from './PostJob'
import Nav from './Nav'
import Job from './Job'
import JobDetail from './JobDetail'
// import LoggedIn from './LoggedIn'


function App() {
  //user.sub
  
  return (
    <>
      <header className="header">
        <Header />
        <Nav />
      </header>
      <Container maxW='container.sm' textAlign='center'>
      <section className="main">
      </section>
      <footer className="footer"></footer>
      {/* <LoggedIn /> */}

        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/home' element={<Home />} />
          <Route path='/alljobs' element={<AllJobs />} />
          <Route path='/alljobs/:id' element={<JobDetail />} />
          <Route path='/postjob' element={<PostJob />} />
          <Route path='/job' element={<Job />} />
        </Routes> 
      </Container>
    </>
  )
}

export default App
