import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './containers/Home'

const App = () =>
  <BrowserRouter>
    <Route exact path='/' component={Home} />
  </BrowserRouter>

ReactDOM.render(<App />, document.getElementById('app'))
