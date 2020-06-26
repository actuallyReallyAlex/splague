import { initialState as gameInitialState } from "./redux/reducers/game";
import { initialState as playerInitialState } from "./redux/reducers/player";
import { initialState as storyInitialState } from "./redux/reducers/story";
import { initialState as uiInitialState } from "./redux/reducers/ui";
import { PatientScenario, Location } from "./types";

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
    chat: ["Chat 1", "Chat2", "Chat 3"],
    complaint: "Back pain",
    name: "Billy Bob",
    operation: "leeching",
    remedy: "magic stone",
  },
  {
    age: 30,
    chat: ["Chat 1", "Chat2", "Chat 3"],
    complaint: "Headache",
    name: "Jane Jill",
    operation: "hole in head",
    remedy: "intelligence potion",
  },
  {
    age: 10,
    chat: ["Chat 1", "Chat2", "Chat 3"],
    complaint: "Broken foot",
    name: "Mark Man",
    operation: "set bone",
    remedy: "healing elixir",
  },
];
