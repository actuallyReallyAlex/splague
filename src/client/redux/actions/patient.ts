import {
  SET_PATIENT_AGE,
  SET_PATIENT_AVATAR,
  SET_PATIENT_CHAT,
  SET_PATIENT_COMPLAINT,
  SET_PATIENT_NAME,
  SET_PATIENT_OPERATION,
  SET_PATIENT_REMEDY,
  SET_PATIENT_TREATMENT,
} from "../actionTypes";
import { Operation, PatientAction, Remedy, TreatmentType } from "../../types";

export const setPatientAge = (age: number): PatientAction => ({
  type: SET_PATIENT_AGE,
  payload: { age },
});

export const setPatientAvatar = (avatar: string): PatientAction => ({
  type: SET_PATIENT_AVATAR,
  payload: { avatar },
});

export const setPatientChat = (chat: string[]): PatientAction => ({
  type: SET_PATIENT_CHAT,
  payload: { chat },
});

export const setPatientComplaint = (complaint: string): PatientAction => ({
  type: SET_PATIENT_COMPLAINT,
  payload: { complaint },
});

export const setPatientName = (name: string): PatientAction => ({
  type: SET_PATIENT_NAME,
  payload: { name },
});

export const setPatientOperation = (operation: Operation): PatientAction => ({
  type: SET_PATIENT_OPERATION,
  payload: { operation },
});

export const setPatientRemedy = (remedy: Remedy): PatientAction => ({
  type: SET_PATIENT_REMEDY,
  payload: { remedy },
});

export const setPatientTreatment = (
  treatment: TreatmentType
): PatientAction => ({
  type: SET_PATIENT_TREATMENT,
  payload: { treatment },
});
