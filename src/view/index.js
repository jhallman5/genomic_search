import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Home from './containers/Home'

const App = () =>
  <BrowserRouter>
    <Route exact path='/' component={Home} />
  </BrowserRouter>

ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
