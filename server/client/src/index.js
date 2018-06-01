// Materialize CSS
import materializeCSS from 'materialize-css/dist/css/materialize.min.css'

// Libraries
import React from 'react'
import ReactDOM from 'react-dom' 

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

// Component
import App from './Components/App'
import reducers from './Reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.querySelector('#root'))
