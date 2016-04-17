import React, { Component } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import App from '../components/App'

// Configure store. configureStore also takes an object as initial
// state as first argument
const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
