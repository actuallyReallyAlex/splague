import { initialState as gameInitialState } from "./redux/reducers/game";
import { initialState as playerInitialState } from "./redux/reducers/player";
import { initialState as storyInitialState } from "./redux/reducers/story";
import { initialState as uiInitialState } from "./redux/reducers/ui";
import TreatPatient from "./actions/TreatPatient";
import {
  ChurchLocationAction,
  GraveyardLocationAction,
  HomeLocationAction,
  Location,
  PatientScenario,
  OfficeLocationAction,
  TavernLocationAction,
  TownSquareLocationAction,
  Operation,
} from "./types";
import { ReactElement } from "react";

export const baseIncome = {
  item1: 0.1,
  item2: 0.5,
  item3: 4,
  item4: 10,
  item5: 40,
  item6: 100,
  item7: 400,
  item8: 6666,
  item9: 98765,
  item10: 999999,
};

export const basePrice = {
  item1: 15,
  item2: 100,
  item3: 500,
  item4: 3000,
  item5: 10000,
  item6: 40000,
  item7: 200000,
  item8: 1666666,
  item9: 123456789,
  item10: 3999999999,
};

export const defaultInitialState = {
  game: gameInitialState,
  player: playerInitialState,
  story: storyInitialState,
  ui: uiInitialState,
};

export const gameActions = {
  "attend mass": (): ReactElement => null,
  barter: (): ReactElement => null,
  confess: (): ReactElement => null,
  cook: (): ReactElement => null,
  "hear town crier": (): ReactElement => null,
  mourn: (): ReactElement => null,
  "order drink": (): ReactElement => null,
  "order food": (): ReactElement => null,
  pray: (): ReactElement => null,
  "research cure": (): ReactElement => null,
  sleep: (): ReactElement => null,
  "treat patient": TreatPatient,
};

export const locations: Location[] = [
  "church",
  "graveyard",
  "home",
  "office",
  "tavern",
  "town square",
];

export const patientScenarios: PatientScenario[] = [
  {
    age: 19,
    avatar: "/assets/patientAvatar.png",
    chat: ["Chat 1", "Chat 2", "Chat 3"],
    complaint: "Back pain",
    name: "Billy Bob",
    operation: "leeching",
    remedy: "magic stone",
  },
  {
    age: 30,
    avatar: "/assets/patientAvatar.png",
    chat: ["Chat 1", "Chat 2", "Chat 3"],
    complaint: "Headache",
    name: "Jane Jill",
    operation: "hole in head",
    remedy: "intelligence potion",
  },
  {
    age: 10,
    avatar: "/assets/patientAvatar.png",
    chat: ["Chat 1", "Chat 2", "Chat 3"],
    complaint: "Broken foot",
    name: "Mark Man",
    operation: "set bone",
    remedy: "healing elixir",
  },
];

export const churchActions: ChurchLocationAction[] = [
  "attend mass",
  "confess",
  "pray",
];
export const graveyardActions: GraveyardLocationAction[] = ["mourn"];
export const homeActions: HomeLocationAction[] = ["cook", "sleep"];
export const officeActions: OfficeLocationAction[] = [
  "research cure",
  "treat patient",
];
export const tavernActions: TavernLocationAction[] = [
  "order drink",
  "order food",
];
export const townSquareActions: TownSquareLocationAction[] = [
  "barter",
  "hear town crier",
];

export const actionSets = {
  church: churchActions,
  graveyard: graveyardActions,
  home: homeActions,
  office: officeActions,
  tavern: tavernActions,
  "town square": townSquareActions,
};

export const operations: Operation[] = [
  "amputation",
  "deliver baby",
  "hole in head",
  "lance wound",
  "leeching",
  "remove tooth",
  "set bone",
];

export const rock = {
  name: "Rock",
};

export const eyeOfNewt = {
  name: "Eye of Newt",
};

export const moldyBread = {
  name: "Moldy Bread",
};

export const inventoryItems = [rock, eyeOfNewt, moldyBread];
