import { MenuAction, MenuState } from "../../types";

export const initialState: MenuState = {
  currentPage: "stats",
  isVisible: false,
};

const reducer = (state = initialState, action: MenuAction): MenuState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
