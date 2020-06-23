import { SET_IS_LOADING, SET_THEME } from "../actionTypes";
import { UIAction, UIState } from "../../types";

export const initialState: UIState = {
  isLoading: true,
  theme: "light",
};

const reducer = (state = initialState, action: UIAction): UIState => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload.isLoading };
    }
    case SET_THEME: {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};

export default reducer;
