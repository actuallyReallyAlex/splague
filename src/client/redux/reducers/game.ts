import {
  SET_ID,
  SET_BUY_MULTIPLIER,
  SET_START_TIME,
  SET_ITEMS,
  SET_MONEY,
  SET_EARNINGS,
  SET_DATE,
} from "../actionTypes";

import { GameAction, GameState } from "../../types";

export const initialState = {
  buyMultiplier: 1,
  date: new Date(1345, 0, 1).toDateString(),
  earnings: 0,
  id: "",
  items: [
    {
      baseIncome: 0.1,
      bonusMultiplier: 1,
      cost: 15,
      count: 0,
      income: 0,
      name: "Item 1",
    },
    {
      baseIncome: 0.5,
      bonusMultiplier: 1,
      cost: 100,
      count: 0,
      income: 0,
      name: "Item 2",
    },
    {
      baseIncome: 4,
      bonusMultiplier: 1,
      cost: 500,
      count: 0,
      income: 0,
      name: "Item 3",
    },
    {
      baseIncome: 10,
      bonusMultiplier: 1,
      cost: 3000,
      count: 0,
      income: 0,
      name: "Item 4",
    },
    {
      baseIncome: 40,
      bonusMultiplier: 1,
      cost: 10000,
      count: 0,
      income: 0,
      name: "Item 5",
    },
    {
      baseIncome: 100,
      bonusMultiplier: 1,
      cost: 40000,
      count: 0,
      income: 0,
      name: "Item 6",
    },
    {
      baseIncome: 400,
      bonusMultiplier: 1,
      cost: 200000,
      count: 0,
      income: 0,
      name: "Item 7",
    },
    {
      baseIncome: 6666,
      bonusMultiplier: 1,
      cost: 1666666,
      count: 0,
      income: 0,
      name: "Item 8",
    },
    {
      baseIncome: 98765,
      bonusMultiplier: 1,
      cost: 123456789,
      count: 0,
      income: 0,
      name: "Item 9",
    },
    {
      baseIncome: 999999,
      bonusMultiplier: 1,
      cost: 3999999999,
      count: 0,
      income: 0,
      name: "Item 10",
    },
  ],
  money: 50,
  startTime: "",
};

const reducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case SET_BUY_MULTIPLIER: {
      return { ...state, buyMultiplier: action.payload.buyMultiplier };
    }
    case SET_DATE: {
      return { ...state, date: action.payload.date };
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
