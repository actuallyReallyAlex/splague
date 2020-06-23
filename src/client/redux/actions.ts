import add from "date-fns/add";
import differenceInSeconds from "date-fns/differenceInSeconds";
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import { startingValues } from "../constants";
import {
  SET_IS_LOADING,
  SET_ID,
  SET_BUY_MULTIPLIER,
  SET_START_TIME,
  SET_MONEY,
  SET_EARNINGS,
  SET_ITEMS,
  SET_DATE,
} from "./actionTypes";
import { round } from "../util";

import { GameAction, GameDBData, Item, UIAction, AppThunk } from "../types";

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

export const setStartTime = (startTime: string): GameAction => ({
  type: SET_START_TIME,
  payload: { startTime },
});

// * THUNKS
export const initializeGameState = (): AppThunk => async (
  dispatch,
  getState
): Promise<void> => {
  try {
    const storedId = localStorage.getItem("id");
    if (!storedId) {
      const { buyMultiplier, items, money } = getState().game;

      const stringifiedData = JSON.stringify({
        buyMultiplier,
        items,
        money,
      });
      const response = await fetch("/game", {
        body: JSON.stringify({ data: stringifiedData }),
        headers: {
          "Content-Type": "application/json",
        },
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
      const game: GameDBData = await gameResponse.json();

      if (!game) {
        // * If game does not exist, error
        // ! This would be a critical bug if encountered
        console.error(`No Game Exists in DB for Game ID - ${storedId}`);
        return;
      }

      // * If game data exists, set application values with game data values
      const { buyMultiplier, items, money } = JSON.parse(game.data);
      const { _id, createdAt, updatedAt } = game;

      dispatch(setId(_id));
      dispatch(setBuyMultiplier(buyMultiplier));
      dispatch(setStartTime(createdAt));
      dispatch(setItems(items));

      const saveTimeDate = new Date(updatedAt);
      const nowDate = new Date();
      const earningsPerSecond =
        items[0].count * items[0].baseIncome * items[0].bonusMultiplier +
        items[1].count * items[1].baseIncome * items[1].bonusMultiplier +
        items[2].count * items[2].baseIncome * items[2].bonusMultiplier +
        items[3].count * items[3].baseIncome * items[3].bonusMultiplier +
        items[4].count * items[4].baseIncome * items[4].bonusMultiplier +
        items[5].count * items[5].baseIncome * items[5].bonusMultiplier +
        items[6].count * items[6].baseIncome * items[6].bonusMultiplier +
        items[7].count * items[7].baseIncome * items[7].bonusMultiplier +
        items[8].count * items[8].baseIncome * items[8].bonusMultiplier +
        items[9].count * items[9].baseIncome * items[9].bonusMultiplier;

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
    const { buyMultiplier, id, items, money } = getState().game;
    const response = await fetch(`/game/${id}`, {
      body: JSON.stringify({
        data: JSON.stringify({ buyMultiplier, items, money }),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const game: GameDBData = await response.json();
    return game;
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
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    // * Set New Game in DB
    const response = await fetch("/game", {
      body: JSON.stringify({ data: JSON.stringify({ ...startingValues }) }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const savedGame: GameDBData = await response.json();
    const { _id, createdAt, data } = savedGame;

    const parsedData = JSON.parse(data);
    // * Store values in App state
    dispatch(setId(_id));
    localStorage.setItem("id", _id);
    dispatch(setStartTime(createdAt));
    dispatch(setMoney(parsedData.money));
    dispatch(setItems(startingValues.items));
    dispatch(setEarnings(0));
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
