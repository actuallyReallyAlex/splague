import { MapAction, MapState } from "../../types";
import {
  SET_ACTIONS,
  SET_CURRENT_ACTION,
  SET_CURRENT_LOCATION,
} from "../actionTypes";

export const initialState: MapState = {
  actions: ["cook", "sleep"],
  currentAction: null,
  currentLocation: "home",
};

const reducer = (state = initialState, action: MapAction): MapState => {
  switch (action.type) {
    case SET_ACTIONS: {
      return { ...state, actions: action.payload.actions };
    }
    case SET_CURRENT_ACTION: {
      return { ...state, currentAction: action.payload.currentAction };
    }
    case SET_CURRENT_LOCATION: {
      return { ...state, currentLocation: action.payload.currentLocation };
    }
    default:
      return state;
  }
};

export default reducer;
