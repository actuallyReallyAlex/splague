import { StoryAction, StoryState } from "../../types";

const initialState = {
  text: "Welcome to Splague!",
};

const reducer = (state = initialState, action: StoryAction): StoryState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
