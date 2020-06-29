import { SET_POPULATION } from "../actionTypes";
import { Population, WorldAction } from "../../types";

export const setPopulation = (population: Population): WorldAction => ({
  type: SET_POPULATION,
  payload: { population },
});
