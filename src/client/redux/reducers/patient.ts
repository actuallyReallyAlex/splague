import { PatientAction, PatientState } from "../../types";
import {
  SET_PATIENT_AGE,
  SET_PATIENT_CHAT,
  SET_PATIENT_COMPLAINT,
  SET_PATIENT_NAME,
  SET_PATIENT_REMEDY,
} from "../actionTypes";

export const initialState: PatientState = {
  age: null,
  chat: [],
  complaint: "",
  name: "",
  remedy: null,
};

const reducer = (state = initialState, action: PatientAction): PatientState => {
  switch (action.type) {
    case SET_PATIENT_AGE: {
      return { ...state, age: action.payload.age };
    }
    case SET_PATIENT_CHAT: {
      return { ...state, chat: action.payload.chat };
    }
    case SET_PATIENT_COMPLAINT: {
      return { ...state, complaint: action.payload.complaint };
    }
    case SET_PATIENT_NAME: {
      return { ...state, name: action.payload.name };
    }
    case SET_PATIENT_REMEDY: {
      return { ...state, remedy: action.payload.remedy };
    }
    default:
      return state;
  }
};

export default reducer;
