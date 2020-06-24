import { MapAction, MapState } from "../../types";

export const initialState: MapState = {
  currentLocation: "home",
};

const reducer = (state = initialState, action: MapAction): MapState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
