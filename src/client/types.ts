import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

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

export type Location =
  | "church"
  | "graveyard"
  | "home"
  | "office"
  | "tavern"
  | "town square";

export interface MapAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface MapState {
  currentLocation: Location;
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

export interface Population {
  alive: number;
  dead: number;
  infected: number;
}

export type RootState = {
  game: GameState;
  map: MapState;
  player: PlayerState;
  story: StoryState;
  ui: UIState;
  world: WorldState;
};

export interface StoryAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface StoryState {
  chapter: number;
  text: string;
}

export type Theme = "dark" | "light";

export interface UIAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface UIState {
  isLoading: boolean;
  theme: Theme;
}

export interface WorldAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface WorldState {
  deathRate: number;
  growthRate: number;
  population: Population;
}
