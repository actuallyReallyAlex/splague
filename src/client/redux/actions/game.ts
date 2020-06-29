import {
  SET_BUY_MULTIPLIER,
  SET_DATE,
  SET_EARNINGS,
  SET_ID,
  SET_ITEMS,
  SET_MONEY,
  SET_START_TIME,
} from "../actionTypes";
import { GameAction, Item } from "../../types";

export const setBuyMultiplier = (buyMultiplier: number): GameAction => ({
  type: SET_BUY_MULTIPLIER,
  payload: { buyMultiplier },
});

export const setDate = (date: string): GameAction => ({
  type: SET_DATE,
  payload: { date },
});

export const setEarnings = (earnings: number): GameAction => ({
  type: SET_EARNINGS,
  payload: { earnings },
});

export const setId = (id: string): GameAction => ({
  type: SET_ID,
  payload: { id },
});

export const setItems = (items: Item[]): GameAction => ({
  type: SET_ITEMS,
  payload: { items },
});

export const setMoney = (money: number): GameAction => ({
  type: SET_MONEY,
  payload: { money },
});

export const setStartTime = (startTime: string): GameAction => ({
  type: SET_START_TIME,
  payload: { startTime },
});
