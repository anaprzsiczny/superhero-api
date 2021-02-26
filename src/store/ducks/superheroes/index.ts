import { SuperTypes } from "./types"

const initialState: any = {
  arraySuperHeroes: [],
  loading: false,
  error: ""
}

function reducerSuperHero(state = initialState, action: any) {
  switch(action.type){
    case SuperTypes.GET_DATA_REQUEST:
      return { ...state, loading: true }
    case SuperTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        arraySuperHeroes: action.payload,
        error: ""
      }
    case SuperTypes.GET_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default reducerSuperHero