import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export interface AlertAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface AlertState {
  content: string;
  primaryAction: () => void;
  primaryActionText: string;
  secondaryAction: () => void;
  secondaryActionText: string;
  title: string;
}

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

export type ChurchLocationAction = "attend mass" | "confess" | "pray";
export type GraveyardLocationAction = "mourn";
export type HomeLocationAction = "cook" | "sleep";
export type OfficeLocationAction = "research cure" | "treat patient";
export type TavernLocationAction = "order drink" | "order food";
export type TownSquareLocationAction = "barter" | "hear town crier";

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

export type LocationAction =
  | ChurchLocationAction
  | GraveyardLocationAction
  | HomeLocationAction
  | OfficeLocationAction
  | TavernLocationAction
  | TownSquareLocationAction;

export interface MapAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface MapState {
  actions: LocationAction[];
  currentAction: null | LocationAction;
  currentLocation: Location;
}

export type Operation =
  | "amputation"
  | "deliver baby"
  | "hole in head"
  | "lance wound"
  | "leeching"
  | "remove tooth"
  | "set bone";

export interface PatientAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface PatientScenario {
  age: number;
  avatar: string;
  chat: string[];
  complaint: string;
  name: string;
  operation: Operation;
  remedy: Remedy;
}

export interface PatientState {
  age: number;
  avatar: string;
  chat: string[];
  complaint: string;
  name: string;
  operation: Operation;
  remedy: Remedy;
  treatment: TreatmentType;
}

export interface PlayerAction {
  type: string;
  // eslint-disable-next-line
  payload: any;
}

export interface PlayerState {
  avatar: string;
  doctorReputation: number;
  morality: number;
  name: string;
}

export interface Population {
  alive: number;
  dead: number;
  infected: number;
}

export type Remedy =
  | "ancient charm"
  | "healing elixir"
  | "healing ointment"
  | "intelligence potion"
  | "magic stone"
  | "strength potion";

export type RootState = {
  alert: AlertState;
  game: GameState;
  map: MapState;
  patient: PatientState;
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

export interface Treatment {
  dialogContent: JSX.Element;
  handler: () => void;
  name: string;
  text: string;
}

export type TreatmentType = "chat" | "operation" | "remedy";

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
