import { WorldAction, WorldState } from "../../types";

export const initialState: WorldState = {
  population: {
    alive: 0,
    dead: 0,
    infected: 0,
  },
};

const reducer = (state = initialState, action: WorldAction): WorldState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
