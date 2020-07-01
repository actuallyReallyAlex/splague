import { PlayerAction, PlayerState } from "../../types";
import {
  SET_DOCTOR_EXPERIENCE,
  SET_DOCTOR_REPUTATION,
  SET_MORALITY,
} from "../actionTypes";

export const initialState: PlayerState = {
  avatar: "/assets/playerAvatar.png",
  doctorExperience: 0,
  doctorReputation: 0,
  morality: 0,
  name: "Alex",
};

const reducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case SET_DOCTOR_EXPERIENCE: {
      return { ...state, doctorExperience: action.payload.doctorExperience };
    }
    case SET_DOCTOR_REPUTATION: {
      return { ...state, doctorReputation: action.payload.doctorReputation };
    }
    case SET_MORALITY: {
      return { ...state, morality: action.payload.morality };
    }
    default:
      return state;
  }
};

export default reducer;
