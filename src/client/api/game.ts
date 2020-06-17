import differenceInSeconds from "date-fns/differenceInSeconds";
import formatDistance from "date-fns/formatDistance";
import { round } from "../util";

import { GameData, GameDBData } from "../types";

/**
 * Gets a game from the DB.
 * @param id ID of Game.
 */
export const getGame = async (id: string): Promise<GameDBData | null> => {
  try {
    const response = await fetch(`/game/${id}`);
    const game: GameDBData = await response.json();
    return game;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Stores a game in the DB.
 * @param data Game Data.
 */
export const setGame = async (data: GameData): Promise<GameDBData | null> => {
  try {
    const stringifiedData = JSON.stringify(data);
    const response = await fetch("/game", {
      body: JSON.stringify({ data: stringifiedData }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const savedGame: GameDBData = await response.json();
    return savedGame;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Updates a game in the DB.
 * @param id ID of Game.
 * @param data Game Data.
 */
export const editGame = async (
  id: string,
  data: GameData
): Promise<GameDBData | null> => {
  try {
    const stringifiedData = JSON.stringify(data);
    const response = await fetch(`/game/${id}`, {
      body: JSON.stringify({ data: stringifiedData }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const game: GameDBData = await response.json();
    return game;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Deletes Game from DB.
 * @param id Game ID.
 */
export const deleteGame = async (id: string): Promise<void> => {
  try {
    await fetch(`/game/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

export const getGameData = async (
  storedId: string,
  setBuyMultiplier: Function,
  setId: Function,
  setIsLoading: Function,
  setGameStartTime: Function,
  setMoney: Function,
  itemCostSetters: any[],
  itemCountSetters: any[]
) => {
  try {
    const game = await getGame(storedId);
    if (!game) {
      // * If game does not exist, error
      console.error(`No Game Exists in DB for Game ID - ${storedId}`);
      return;
    }

    // * If game data exists, set application values with game data values
    const { buyMultiplier, items, money } = JSON.parse(game.data);
    const { _id, createdAt, updatedAt } = game;

    setId(_id);
    setBuyMultiplier(buyMultiplier);
    setGameStartTime(createdAt);
    itemCostSetters.forEach((setItemCost, i: number) =>
      setItemCost(items[i].cost)
    );
    itemCountSetters.forEach((setItemCount, i: number) =>
      setItemCount(items[i].count)
    );

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
    setMoney(() => round(newMoney, 2));

    setIsLoading(false);

    if (awayTimeInSeconds > 10) {
      alert(
        `You were away for ${awayTime}. You earned $${awayEarnings.toLocaleString()}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export const setGameData = async (
  buyMultiplier: number,
  items: any[],
  money: number,
  setGameStartTime: Function,
  setId: Function,
  setIsLoading: Function
) => {
  try {
    const { _id, createdAt } = await setGame({
      buyMultiplier,
      items,
      money,
    });

    setId(_id);
    localStorage.setItem("id", _id);
    setGameStartTime(createdAt);

    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
};
