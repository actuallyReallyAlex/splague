import { MenuAction, MenuState } from "../../types";
import { SET_CURRENT_PAGE, SET_IS_VISIBLE } from "../actionTypes";

export const initialState: MenuState = {
  currentPage: "stats",
  isVisible: false,
};

const reducer = (state = initialState, action: MenuAction): MenuState => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload.currentPage };
    }
    case SET_IS_VISIBLE: {
      return { ...state, isVisible: action.payload.isVisible };
    }
    default:
      return state;
  }
};

export default reducer;
