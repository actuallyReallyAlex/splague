import { PlayerAction, PlayerState } from "../../types";

const initialState = {
  avatar: "/assets/avatar.png",
  name: "Alex",
};

const reducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;