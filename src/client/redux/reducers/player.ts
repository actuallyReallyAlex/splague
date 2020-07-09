import { PlayerAction, PlayerState } from "../../types";
import {
  SET_DOCTOR_EXPERIENCE,
  SET_DOCTOR_REPUTATION,
  SET_MORALITY,
  SET_PLAYER_AVATAR,
  SET_PLAYER_NAME,
} from "../actionTypes";

export const initialState: PlayerState = {
  avatar: "",
  doctorExperience: 0,
  doctorReputation: 0,
  morality: 0,
  name: "",
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
    case SET_PLAYER_AVATAR: {
      return { ...state, avatar: action.payload.avatar };
    }
    case SET_PLAYER_NAME: {
      return { ...state, name: action.payload.name };
    }
    default:
      return state;
  }
};

export default reducer;
