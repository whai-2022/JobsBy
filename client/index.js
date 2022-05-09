import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

//extension for chakra, to which can be added any necessary extras
//color from below is used on the Link elements in Home for example.
const theme = extendTheme({
  styles: {
    // global: {
    //   'html, body': {
    //     backgroundColor: '#EDFDFD',
    //     lineHeight: 'tall',
    //   },
    //   Box: {
    //     backgroundColor: '#217876',
    //   },
    // },
  },
  colors: {
    teal: {
      50: '#EBF9F9',
      100: '#C7EFEF',
      200: '#A3E5E4',
      300: '#7FDBDA',
      400: '#5BD1D0',
      500: '#38C7C5',
      600: '#2CA09E',
      700: '#217876',
      800: '#16504F',
      900: '#0B2827',
    },
  },
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
})

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <Auth0Provider
        // set the values {''} to each attribute (domain=)
        domain={'pont.au.auth0.com'}
        clientId={'hXTUUI6B39qdjH475HopKZi7XG8MZyjm'}
        redirectUri={window.location.origin}
        audience="https://api/allJobs"
      >
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>,
    document.getElementById('app')
  )
})
