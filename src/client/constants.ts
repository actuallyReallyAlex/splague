import { initialState as gameInitialState } from "./redux/reducers/game";
import { initialState as playerInitialState } from "./redux/reducers/player";
import { initialState as storyInitialState } from "./redux/reducers/story";
import { initialState as uiInitialState } from "./redux/reducers/ui";

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
