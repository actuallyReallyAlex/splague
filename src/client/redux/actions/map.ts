import {
  SET_ACTIONS,
  SET_CURRENT_ACTION,
  SET_CURRENT_LOCATION,
} from "../actionTypes";
import { LocationAction, Location, MapAction } from "../../types";

export const setActions = (actions: LocationAction[]): MapAction => ({
  type: SET_ACTIONS,
  payload: { actions },
});

export const setCurrentAction = (currentAction: LocationAction): MapAction => ({
  type: SET_CURRENT_ACTION,
  payload: { currentAction },
});

export const setCurrentLocation = (currentLocation: Location): MapAction => ({
  type: SET_CURRENT_LOCATION,
  payload: { currentLocation },
});
