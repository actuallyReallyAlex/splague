import { SET_IS_LOADING } from "../actionTypes";
import { UIAction, UIState } from "../../types";

export const initialState = {
  isLoading: true,
};

const reducer = (state = initialState, action: UIAction): UIState => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload.isLoading };
    }
    default:
      return state;
  }
};

export default reducer;
