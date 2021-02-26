import { put } from "redux-saga/effects"
import { call } from "typed-redux-saga"
import SuperHeroService from "../../../services/superhero-service"
import { loadDataFailure, loadDataSuccess } from "./actions"

export function* getSuper(action: any) {
  try {
    const response: any = yield* call(SuperHeroService.getSuper, action.payload)
    if(response.data.error){
      yield put(loadDataFailure(response.data.error))
    } else {
      yield put(loadDataSuccess(response.data.results))
    }
  } catch (error) {
    console.log(error)
    yield put(loadDataFailure(error))
  }
}