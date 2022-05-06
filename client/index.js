import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      // set the values {''} to each attribute (domain=)
      domain={'pont.au.auth0.com'}
      clientId={'hXTUUI6B39qdjH475HopKZi7XG8MZyjm'}
      redirectUri={window.location.origin}
      audience="https:///api/allJobs"
    >
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </Auth0Provider>,
    document.getElementById('app')
  )
})
