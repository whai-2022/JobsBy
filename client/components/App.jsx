import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Container} from '@chakra-ui/react'

import Header from './Header'
import Splash from './Splash'
import Home from './Home'
import AllJobs from './AllJobs'
import PostJob from './PostJob'
import Nav from './Nav'
import Job from './Job'

function App() {
  //dummy auth to get splash / home functionality
  // let authorized = true

  return (
    <>
      <header className="header">
        <Header />
      </header>
addressAutocomplete
      <Container maxW='container.sm' textAlign='center'>
      <section className="main">
        {/* {authorized ? <Home /> : <Splash />} */}
      </section>
      <footer className="footer"></footer>
      <Nav />

        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/home' element={<Home />} />
          <Route path='/alljobs' element={<AllJobs />} />
          <Route path='/postjob' element={<PostJob />} />
          <Route path='/job' element={<Job />} />
        </Routes> 
      </Container>
    </>
  )
}

export default App
