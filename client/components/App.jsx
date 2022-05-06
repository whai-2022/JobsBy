import React from 'react'

import { Routes, Route } from 'react-router-dom'
// import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"

import { Container } from '@chakra-ui/react'

// import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import Header from './Header'
import Splash from './Splash'
import Home from './Home'
import AllJobs from './AllJobs'
import PostJob from './PostJob'
import Nav from './Nav'
// import LoggedIn from './LoggedIn'

// export const ProtectedRoute = ({ component }) => {
//   const Component = withAuthenticationRequired(component, {
//     onRedirecting: () => <Home />,
//   })
// return <Component />
// };

function App() {
  //user.sub
  
  //dummy auth to get splash / home functionality
  // let authorized = true

  
  
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <Container maxW='container.sm' textAlign='center'>
      <section className="main">
        {/* {authorized ? <Home /> : <Splash />} */}
      </section>
      <footer className="footer"></footer>
      <Nav />
      {/* <LoggedIn /> */}

        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/home' element={<Home />} />
          <Route path='/alljobs' element={<AllJobs />} />
          <Route path='/postjob' element={<PostJob />} />
        </Routes> 
      </Container>
    </>
  )
}

export default App
