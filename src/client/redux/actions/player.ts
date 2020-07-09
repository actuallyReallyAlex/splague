import {
  SET_DOCTOR_EXPERIENCE,
  SET_DOCTOR_REPUTATION,
  SET_MORALITY,
  SET_PLAYER_AVATAR,
  SET_PLAYER_NAME,
} from "../actionTypes";
import { PlayerAction } from "../../types";

export const setDoctorExperience = (
  doctorExperience: number
): PlayerAction => ({
  type: SET_DOCTOR_EXPERIENCE,
  payload: { doctorExperience },
});

export const setDoctorReputation = (
  doctorReputation: number
): PlayerAction => ({
  type: SET_DOCTOR_REPUTATION,
  payload: { doctorReputation },
});

export const setMorality = (morality: number): PlayerAction => ({
  type: SET_MORALITY,
  payload: { morality },
});

export const setPlayerAvatar = (avatar: string): PlayerAction => ({
  type: SET_PLAYER_AVATAR,
  payload: { avatar },
});

export const setPlayerName = (name: string): PlayerAction => ({
  type: SET_PLAYER_NAME,
  payload: { name },
});
