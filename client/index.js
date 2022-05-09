import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import theme from './styles/theme'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

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
