import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Home from './containers/Home'
import Search_Results from './containers/Search_Results'

const App = () =>
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/search-results' component={Search_Results} />
    </div>
</BrowserRouter>

ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
