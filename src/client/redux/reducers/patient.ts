import { PatientAction, PatientState } from "../../types";
import { SET_PATIENT_NAME } from "../actionTypes";

export const initialState: PatientState = {
  name: "",
};

const reducer = (state = initialState, action: PatientAction): PatientState => {
  switch (action.type) {
    case SET_PATIENT_NAME: {
      return { ...state, name: action.payload.name };
    }
    default:
      return state;
  }
};

export default reducer;
