import { AlertAction, AlertState } from "../../types";

export const initialState: AlertState = {
  content: "",
  primaryButton: "",
  secondaryButton: "",
  title: "",
};

const reducer = (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
