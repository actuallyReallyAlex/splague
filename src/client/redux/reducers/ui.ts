import { SET_IS_LOADING } from "../actionTypes";

const initialState = {
  isLoading: true,
};

export default function (
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload.isLoading };
    }
    default:
      return state;
  }
}
