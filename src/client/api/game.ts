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
