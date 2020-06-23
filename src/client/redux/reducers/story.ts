import { StoryAction, StoryState } from "../../types";
import { SET_STORY_TEXT, SET_CHAPTER } from "../actionTypes";

export const initialState = {
  chapter: 0,
  text: "Welcome to Splague!",
};

const reducer = (state = initialState, action: StoryAction): StoryState => {
  switch (action.type) {
    case SET_CHAPTER: {
      return { ...state, chapter: action.payload.chapter };
    }
    case SET_STORY_TEXT: {
      return { ...state, text: action.payload.text };
    }
    default:
      return state;
  }
};

export default reducer;
