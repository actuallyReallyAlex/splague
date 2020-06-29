import { PatientAction, PatientState } from "../../types";
import {
  SET_PATIENT_AGE,
  SET_PATIENT_AVATAR,
  SET_PATIENT_CHAT,
  SET_PATIENT_COMPLAINT,
  SET_PATIENT_NAME,
  SET_PATIENT_OPERATION,
  SET_PATIENT_OPERATION_IN_PROGRESS,
  SET_PATIENT_OPERATION_OUTCOME,
  SET_PATIENT_OPERATION_PROGRESS,
  SET_PATIENT_REMEDY,
  SET_PATIENT_SELECTED_OPERATION,
  SET_PATIENT_TREATMENT,
  SET_PATIENT_TREATMENT_DIALOG_IS_OPEN,
} from "../actionTypes";

export const initialState: PatientState = {
  age: null,
  avatar: "",
  chat: [],
  complaint: "",
  name: "",
  operation: null,
  operationOutcome: null,
  operationProgress: 0,
  operationInProgress: false,
  remedy: null,
  selectedOperation: null,
  treatment: null,
  treatmentDialogIsOpen: false,
};

const reducer = (state = initialState, action: PatientAction): PatientState => {
  switch (action.type) {
    case SET_PATIENT_AGE: {
      return { ...state, age: action.payload.age };
    }
    case SET_PATIENT_AVATAR: {
      return { ...state, avatar: action.payload.avatar };
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
    case SET_PATIENT_OPERATION: {
      return { ...state, operation: action.payload.operation };
    }
    case SET_PATIENT_OPERATION_IN_PROGRESS: {
      return {
        ...state,
        operationInProgress: action.payload.operationInProgress,
      };
    }
    case SET_PATIENT_OPERATION_OUTCOME: {
      return { ...state, operationOutcome: action.payload.operationOutcome };
    }
    case SET_PATIENT_OPERATION_PROGRESS: {
      return { ...state, operationProgress: action.payload.operationProgress };
    }
    case SET_PATIENT_REMEDY: {
      return { ...state, remedy: action.payload.remedy };
    }
    case SET_PATIENT_SELECTED_OPERATION: {
      return { ...state, selectedOperation: action.payload.selectedOperation };
    }
    case SET_PATIENT_TREATMENT: {
      return { ...state, treatment: action.payload.treatment };
    }
    case SET_PATIENT_TREATMENT_DIALOG_IS_OPEN: {
      return {
        ...state,
        treatmentDialogIsOpen: action.payload.treatmentDialogIsOpen,
      };
    }
    default:
      return state;
  }
};

export default reducer;
