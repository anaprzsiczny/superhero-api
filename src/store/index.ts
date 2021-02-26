import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import createRootReducer from "./ducks/rootReducer"
import rootSaga from "./ducks/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store