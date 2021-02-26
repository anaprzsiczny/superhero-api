import { action } from "typesafe-actions"
import { SuperHero, SuperTypes } from "./types"

export const loadDataRequest = (name: string | undefined) => action(SuperTypes.GET_DATA_REQUEST, name)
export const loadDataSuccess = (data: SuperHero[]) => action(SuperTypes.GET_DATA_SUCCESS, data)
export const loadDataFailure = (error: string) => action(SuperTypes.GET_DATA_FAILURE, error)