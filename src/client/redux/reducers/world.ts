import { WorldAction, WorldState } from "../../types";
import { SET_POPULATION } from "../actionTypes";

export const initialState: WorldState = {
  deathRate: 0.000001,
  growthRate: 0.000005,
  population: {
    alive: 443000000,
    dead: 0,
    infected: 0,
  },
};

const reducer = (state = initialState, action: WorldAction): WorldState => {
  switch (action.type) {
    case SET_POPULATION: {
      return { ...state, population: action.payload.population };
    }
    default:
      return state;
  }
};

export default reducer;
