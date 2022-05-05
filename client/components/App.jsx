import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Splash from './Splash'
import Home from './Home'
import Nav from './Nav'
import AllJobs from './AllJobs'

function App() {
  useEffect(() => { }, [])
  
  //dummy auth to get splash / home functionality
  let authorized = false

  return (
    <>
      {/* <BrowserRouter> */}
        <header className="header">
          <Header />
        </header>
        <section className="main">
          {authorized ? <Home /> : <Splash />}
        
        </section>
        <footer className="footer"></footer>

        {/* <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/home' element={<Home />} />
          <Route path='/alljobs' element={<AllJobs />} />
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
