import { StoryAction, StoryState } from "../../types";

const initialState = {
  text: "",
};

const reducer = (state = initialState, action: StoryAction): StoryState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
