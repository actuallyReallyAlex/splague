import add from "date-fns/add";
import differenceInSeconds from "date-fns/differenceInSeconds";
import formatDistance from "date-fns/formatDistance";
import { defaultInitialState } from "../constants";
import {
  SET_IS_LOADING,
  SET_ID,
  SET_BUY_MULTIPLIER,
  SET_START_TIME,
  SET_MONEY,
  SET_EARNINGS,
  SET_ITEMS,
  SET_DATE,
  SET_STORY_TEXT,
  SET_CHAPTER,
  SET_THEME,
  SET_POPULATION,
  SET_CURRENT_LOCATION,
} from "./actionTypes";
import { round } from "../util";

import {
  AppThunk,
  GameAction,
  GameDBData,
  Item,
  Location,
  MapAction,
  Population,
  RootState,
  StoryAction,
  Theme,
  UIAction,
  WorldAction,
  LocationAction,
} from "../types";

export const setBuyMultiplier = (buyMultiplier: number): GameAction => ({
  type: SET_BUY_MULTIPLIER,
  payload: { buyMultiplier },
});

export const setChapter = (chapter: number): StoryAction => ({
  type: SET_CHAPTER,
  payload: { chapter },
});

export const setCurrentLocation = (currentLocation: Location): MapAction => ({
  type: SET_CURRENT_LOCATION,
  payload: { currentLocation },
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

export const setIsLoading = (isLoading: boolean): UIAction => ({
  type: SET_IS_LOADING,
  payload: { isLoading },
});

export const setItems = (items: Item[]): GameAction => ({
  type: SET_ITEMS,
  payload: { items },
});

export const setMoney = (money: number): GameAction => ({
  type: SET_MONEY,
  payload: { money },
});

export const setPopulation = (population: Population): WorldAction => ({
  type: SET_POPULATION,
  payload: { population },
});

export const setStartTime = (startTime: string): GameAction => ({
  type: SET_START_TIME,
  payload: { startTime },
});

export const setStoryText = (text: string): StoryAction => ({
  type: SET_STORY_TEXT,
  payload: { text },
});

export const setTheme = (theme: Theme): UIAction => ({
  type: SET_THEME,
  payload: { theme },
});

// * THUNKS
export const initializeGameState = (): AppThunk => async (
  dispatch,
  getState
): Promise<void> => {
  try {
    const storedId = localStorage.getItem("id");
    if (!storedId) {
      const state = getState();

      const response = await fetch("/game", {
        body: JSON.stringify({ data: JSON.stringify({ ...state }) }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const savedGame: GameDBData = await response.json();
      const { _id, createdAt } = savedGame;

      dispatch(setId(_id));
      localStorage.setItem("id", _id);
      dispatch(setStartTime(createdAt));

      dispatch(setIsLoading(false));
    } else {
      const gameResponse = await fetch(`/game/${storedId}`);
      const gameInstance: GameDBData = await gameResponse.json();

      if (!gameInstance) {
        // * If game does not exist, error
        // ! This would be a critical bug if encountered
        console.error(`No Game Exists in DB for Game ID - ${storedId}`);
        return;
      }

      // * If game data exists, set application values with game data values

      const state: RootState = JSON.parse(gameInstance.data);

      const { game, story, ui } = state;
      const { buyMultiplier, date, items, money } = game;

      const { _id, createdAt, updatedAt } = gameInstance;

      dispatch(setId(_id));
      dispatch(setBuyMultiplier(buyMultiplier));
      dispatch(setStartTime(createdAt));
      dispatch(setItems(items));
      dispatch(setDate(date));
      dispatch(setStoryText(story.text));
      dispatch(setChapter(story.chapter));
      dispatch(setTheme(ui.theme));

      const saveTimeDate = new Date(updatedAt);
      const nowDate = new Date();
      let earningsPerSecond = 0;

      items.forEach((item: Item) => {
        earningsPerSecond =
          earningsPerSecond +
          item.count * item.baseIncome * item.bonusMultiplier;
      });

      const awayTime = formatDistance(saveTimeDate, nowDate);
      const awayTimeInSeconds = -differenceInSeconds(saveTimeDate, nowDate);
      const awayEarnings = round(awayTimeInSeconds * earningsPerSecond, 2);
      const newMoney = money + awayEarnings;

      dispatch(setMoney(round(newMoney, 2)));

      dispatch(setIsLoading(false));

      if (awayTimeInSeconds > 10) {
        alert(
          `You were away for ${awayTime}. You earned $${awayEarnings.toLocaleString()}`
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const saveGame = (): AppThunk => async (
  dispatch,
  getState
): Promise<GameDBData> => {
  try {
    const state = getState();
    const response = await fetch(`/game/${state.game.id}`, {
      body: JSON.stringify({ data: JSON.stringify({ ...state }) }),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    });
    const gameData: GameDBData = await response.json();
    return gameData;
  } catch (error) {
    console.error(error);
  }
};

export const setNewEarnings = (): AppThunk => async (
  dispatch,
  getState
): Promise<void> => {
  const { items, money } = getState().game;
  let newEarnings = 0;

  items.forEach(({ baseIncome, bonusMultiplier, count }) => {
    newEarnings = newEarnings + count * baseIncome * bonusMultiplier;
  });

  const newMoney = money + newEarnings;
  dispatch(setMoney(round(newMoney, 2)));
  dispatch(setEarnings(round(newEarnings, 2)));
};

export const resetGame = (): AppThunk => async (dispatch, getState) => {
  dispatch(setIsLoading(true));

  const { id } = getState().game;

  try {
    // * Delete Game from DB
    await fetch(`/game/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    });
    // * Set New Game in DB
    const response = await fetch("/game", {
      body: JSON.stringify({
        data: JSON.stringify({ ...defaultInitialState }),
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const savedGame: GameDBData = await response.json();
    const { _id, createdAt, data } = savedGame;

    const parsedData = JSON.parse(data);
    // * Store values in App state
    dispatch(setId(_id));
    localStorage.setItem("id", _id);
    dispatch(setStartTime(createdAt));
    dispatch(setMoney(parsedData.game.money));
    dispatch(setItems(defaultInitialState.game.items));
    dispatch(setEarnings(0));
    dispatch(setDate(parsedData.game.date));
  } catch (error) {
    console.error(error);
  }
  dispatch(setIsLoading(false));
};

export const buyItem = (itemName: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { buyMultiplier, items, money } = getState().game;
  const selectedItem = items.find(
    (item: {
      baseIncome: number;
      bonusMultiplier: number;
      cost: number;
      count: number;
      income: number;
      name: string;
    }) => item.name === itemName
  );

  const newItems = items.map(
    (item: {
      baseIncome: number;
      bonusMultiplier: number;
      cost: number;
      count: number;
      income: number;
      name: string;
    }) => {
      if (item.name !== itemName) {
        return item;
      } else {
        const newCount = item.count + buyMultiplier;
        return {
          ...item,
          bonusMultiplier: 1 + Math.floor(newCount / 10) * 0.05,
          cost: round(item.cost * Math.pow(1.07, newCount) * buyMultiplier, 2),
          count: newCount,
          income: round(
            newCount * item.baseIncome * (1 + Math.floor(newCount / 10) * 0.05),
            2
          ),
        };
      }
    }
  );

  const totalCost = selectedItem.cost * buyMultiplier;
  const newMoney = money - totalCost;

  dispatch(setMoney(Math.round(newMoney * 100) / 100));
  dispatch(setItems(newItems));
};

export const toggleBuyMultiplier = (): AppThunk => async (
  dispatch,
  getState
) => {
  const { buyMultiplier } = getState().game;
  let newBuyMultiplier: number;
  switch (buyMultiplier) {
    case 1:
      newBuyMultiplier = 5;
      break;
    case 5:
      newBuyMultiplier = 10;
      break;
    case 10:
      newBuyMultiplier = 1;
      break;
    default:
      break;
  }

  dispatch(setBuyMultiplier(newBuyMultiplier));
};

export const progressDate = (): AppThunk => (dispatch, getState) => {
  // * Should progress date by 1 month
  const currentDate = getState().game.date;
  const newDate = add(new Date(currentDate), { months: 1 }).toDateString();
  dispatch(setDate(newDate));
};

export const deathRate = (): AppThunk => (dispatch, getState) => {
  const { chapter } = getState().story;
  if (chapter < 3) return;
  // * Kill off a percentage of the population each interval
  const { deathRate, population } = getState().world;
  const { alive, dead, infected } = population;
  const newDead = alive * deathRate;
  const newDeadPop = round(dead + newDead, 0);
  const newAlive = round(alive - newDead, 0);
  dispatch(setPopulation({ alive: newAlive, dead: newDeadPop, infected }));
};

export const growthRate = (): AppThunk => (dispatch, getState) => {
  const { chapter } = getState().story;
  if (chapter < 3) return;
  // * Birth a percentage of the population each interval
  const { growthRate, population } = getState().world;
  const { alive, dead, infected } = population;
  const newAlive = alive * growthRate;
  const newAlivePop = round(alive + newAlive, 0);
  console.log(`newAlive - ${newAlive}`);
  dispatch(setPopulation({ alive: newAlivePop, dead, infected }));
};

export const travel = (location: Location): AppThunk => (
  dispatch,
  getState
) => {
  dispatch(setCurrentLocation(location));
};

export const performAction = (action: LocationAction): AppThunk => (
  dispatch,
  getState
) => {
  alert(`PERFORMING ACTION - ${action}`);
};
