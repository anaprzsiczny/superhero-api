import { combineReducers } from "redux"
import reducerSuperHero from "./superheroes"

const createRootReducer = () => combineReducers({
  superHero: reducerSuperHero
})

export default createRootReducer
