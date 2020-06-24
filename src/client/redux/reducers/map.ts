import { MapAction, MapState } from "../../types";
import { SET_CURRENT_LOCATION } from "../actionTypes";

export const initialState: MapState = {
  currentLocation: "home",
};

const reducer = (state = initialState, action: MapAction): MapState => {
  switch (action.type) {
    case SET_CURRENT_LOCATION: {
      return { ...state, currentLocation: action.payload.currentLocation };
    }
    default:
      return state;
  }
};

export default reducer;
