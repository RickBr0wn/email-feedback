// Libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// Component
import App from './Components/App'
import reducers from './Reducers'

const store = createStore(() => [], {}, applyMiddleware())

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.querySelector('#root'))
