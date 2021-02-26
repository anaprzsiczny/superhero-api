import { all, takeLatest } from "redux-saga/effects"
import { getSuper } from "./superheroes/sagas"
import { SuperTypes } from "./superheroes/types"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(SuperTypes.GET_DATA_REQUEST, getSuper)
  ])
}