import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userState from './reducer/user'
import { verifyAuth } from './action/user';

const rootReducer = combineReducers({
  userState
})

const configureStore = (persistedState) => {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  )
  store.dispatch(verifyAuth())

  return store
}

export default configureStore