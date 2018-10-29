import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Search_Results from './containers/Search_Results'

const App = () =>
  <div>
    <Search_Results />
  </div>

ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
