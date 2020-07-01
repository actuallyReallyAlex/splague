import {
  SET_DOCTOR_EXPERIENCE,
  SET_DOCTOR_REPUTATION,
  SET_MORALITY,
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
