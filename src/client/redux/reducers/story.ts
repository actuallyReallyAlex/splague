import { StoryAction, StoryState } from "../../types";
import { SET_STORY_TEXT } from "../actionTypes";

export const initialState = {
  text: "Welcome to Splague!",
};

const reducer = (state = initialState, action: StoryAction): StoryState => {
  switch (action.type) {
    case SET_STORY_TEXT: {
      return { ...state, text: action.payload.text };
    }
    default:
      return state;
  }
};

export default reducer;
