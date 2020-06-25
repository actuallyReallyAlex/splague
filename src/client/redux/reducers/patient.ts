import { PatientAction, PatientState } from "../../types";
import { SET_PATIENT_NAME, SET_PATIENT_AGE } from "../actionTypes";

export const initialState: PatientState = {
  age: null,
  name: "",
};

const reducer = (state = initialState, action: PatientAction): PatientState => {
  switch (action.type) {
    case SET_PATIENT_AGE: {
      return { ...state, age: action.payload.age };
    }
    case SET_PATIENT_NAME: {
      return { ...state, name: action.payload.name };
    }
    default:
      return state;
  }
};

export default reducer;
