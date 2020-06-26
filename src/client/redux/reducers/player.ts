import { PlayerAction, PlayerState } from "../../types";
import { SET_DOCTOR_REPUTATION } from "../actionTypes";

export const initialState: PlayerState = {
  avatar: "/assets/avatar.png",
  doctorReputation: 0,
  name: "Alex",
};

const reducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case SET_DOCTOR_REPUTATION: {
      return { ...state, doctorReputation: action.payload.doctorReputation };
    }
    default:
      return state;
  }
};

export default reducer;
