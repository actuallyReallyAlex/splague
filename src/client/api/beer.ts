import { starterBeers } from "../constants";
import { Beer } from "../types";

/**
 * Initialize DB with Starter Beers if no Beers present.
 */
export const initializeStarterBeers = async (): Promise<void> => {
  try {
    starterBeers.forEach(async ({ abv, brewer, description, name, type }) => {
      await fetch("/beer", {
        body: JSON.stringify({
          abv,
          brewer,
          description,
          name,
          type,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    });

    return;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Gets Beers from the database.
 */
export const getBeers = async (): Promise<Beer[] | []> => {
  try {
    const response = await fetch("/beers");
    const beers: Beer[] = await response.json();
    return beers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Adds a Beer to the database.
 * @param beer Beer to add.
 */
export const addBeer = async (beer: {
  abv: number;
  brewer: string;
  description: string;
  name: string;
  type: string;
}): Promise<void> => {
  try {
    await fetch("/beer", {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Removes a Beer from the database.
 * @param id ID of Beer to remove.
 */
export const deleteBeer = async (id: string): Promise<void> => {
  try {
    await fetch(`/beer/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Edits a Beer in the database.
 * @param beer Beer to edit.
 */
export const editBeer = async (beer: {
  id: string;
  abv: number;
  brewer: string;
  description: string;
  name: string;
  type: string;
}): Promise<void> => {
  try {
    await fetch(`/beer/${beer.id}`, {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  } catch (error) {
    console.error(error);
  }
};
