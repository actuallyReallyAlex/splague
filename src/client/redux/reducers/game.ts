import {
  SET_ID,
  SET_BUY_MULTIPLIER,
  SET_START_TIME,
  SET_ITEMS,
  SET_MONEY,
  SET_EARNINGS,
} from "../actionTypes";
import { startingValues } from "../../constants";

import { GameAction, GameState } from "../../types";

const initialState = {
  buyMultiplier: startingValues.buyMultiplier,
  earnings: startingValues.earnings,
  id: "",
  items: startingValues.items,
  money: startingValues.money,
  startTime: "",
};

const reducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case SET_BUY_MULTIPLIER: {
      return { ...state, buyMultiplier: action.payload.buyMultiplier };
    }
    case SET_EARNINGS: {
      return { ...state, earnings: action.payload.earnings };
    }
    case SET_ID: {
      return { ...state, id: action.payload.id };
    }
    case SET_ITEMS: {
      return { ...state, items: action.payload.items };
    }
    case SET_MONEY: {
      return { ...state, money: action.payload.money };
    }
    case SET_START_TIME: {
      return { ...state, startTime: action.payload.startTime };
    }
    default:
      return state;
  }
};

export default reducer;
