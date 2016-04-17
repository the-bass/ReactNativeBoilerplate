import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore (initialState = {}) {
  // Apply thunk middleware
  const middleware = applyMiddleware(thunk)

  // Create store
  const store = createStore(rootReducer, initialState, middleware)

  return store
}
