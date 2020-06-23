import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

type RootState = {
  game: GameState;
  ui: UIState;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface GameAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface GameData {
  buyMultiplier: number;
  items: Item[];
  money: number;
}

export interface GameDBData {
  __v: string;
  _id: string;
  createdAt: string;
  data: string;
  updatedAt: string;
}

export interface GameState {
  buyMultiplier: number;
  date: string;
  earnings: number;
  id: string;
  items: Item[];
  money: number;
  startTime: string;
}

export interface Item {
  baseIncome: number;
  bonusMultiplier: number;
  cost: number;
  count: number;
  income: number;
  name: string;
}

export interface PlayerAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface PlayerState {
  avatar: string;
  name: string;
}

export interface StoryAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface StoryState {
  text: string;
}

export interface UIAction {
  type: string;
  payload: { isLoading: boolean };
}

export interface UIState {
  isLoading: boolean;
}
