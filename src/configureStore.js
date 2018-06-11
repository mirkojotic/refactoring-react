import { createLogicMiddleware } from 'redux-logic'
import reducer from './reducers'
import arrLogic from './logic'
import API from './api'
import { applyMiddleware, createStore } from 'redux';

const deps = {
    API
}

const logicMiddleware = createLogicMiddleware(arrLogic, deps)

const middleware = applyMiddleware(logicMiddleware)

const enhancer = middleware

export default () => createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
)