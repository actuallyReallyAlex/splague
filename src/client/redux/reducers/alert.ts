import { AlertAction, AlertState } from "../../types";
import {
  SET_ALERT_CONTENT,
  SET_ALERT_PRIMARY_ACTION,
  SET_ALERT_SECONDARY_ACTION,
  SET_ALERT_TITLE,
} from "../actionTypes";

export const initialState: AlertState = {
  content: "",
  primaryAction: "",
  secondaryAction: "",
  title: "",
};

const reducer = (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case SET_ALERT_CONTENT: {
      return { ...state, content: action.payload.content };
    }
    case SET_ALERT_PRIMARY_ACTION: {
      return { ...state, primaryAction: action.payload.primaryAction };
    }
    case SET_ALERT_SECONDARY_ACTION: {
      return { ...state, secondaryAction: action.payload.secondaryAction };
    }
    case SET_ALERT_TITLE: {
      return { ...state, title: action.payload.title };
    }
    default:
      return state;
  }
};

export default reducer;
