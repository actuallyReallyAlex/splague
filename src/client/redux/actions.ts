import add from "date-fns/add";
import differenceInMonths from "date-fns/differenceInMonths";
import differenceInSeconds from "date-fns/differenceInSeconds";
import formatDistance from "date-fns/formatDistance";
import { defaultInitialState, patientScenarios } from "../constants";
import {
  SET_ACTIONS,
  SET_ALERT_CONTENT,
  SET_ALERT_PRIMARY_ACTION,
  SET_ALERT_PRIMARY_ACTION_TEXT,
  SET_ALERT_SECONDARY_ACTION,
  SET_ALERT_SECONDARY_ACTION_TEXT,
  SET_ALERT_TITLE,
  SET_BUY_MULTIPLIER,
  SET_CHAPTER,
  SET_CURRENT_ACTION,
  SET_CURRENT_LOCATION,
  SET_DATE,
  SET_DOCTOR_REPUTATION,
  SET_EARNINGS,
  SET_ID,
  SET_IS_LOADING,
  SET_ITEMS,
  SET_MONEY,
  SET_PATIENT_AGE,
  SET_PATIENT_CHAT,
  SET_PATIENT_COMPLAINT,
  SET_PATIENT_NAME,
  SET_PATIENT_OPERATION,
  SET_PATIENT_REMEDY,
  SET_POPULATION,
  SET_START_TIME,
  SET_STORY_TEXT,
  SET_THEME,
} from "./actionTypes";
import { round, randomInteger } from "../util";

import {
  AlertAction,
  AppThunk,
  ChurchLocationAction,
  GameAction,
  GameDBData,
  GraveyardLocationAction,
  HomeLocationAction,
  Item,
  Location,
  LocationAction,
  MapAction,
  OfficeLocationAction,
  Operation,
  PatientAction,
  PatientScenario,
  Population,
  Remedy,
  RootState,
  StoryAction,
  TavernLocationAction,
  Theme,
  TownSquareLocationAction,
  UIAction,
  WorldAction,
  PlayerAction,
} from "../types";

export const setActions = (actions: LocationAction[]): MapAction => ({
  type: SET_ACTIONS,
  payload: { actions },
});

export const setAlertContent = (content: string): AlertAction => ({
  type: SET_ALERT_CONTENT,
  payload: { content },
});

export const setAlertPrimaryAction = (
  primaryAction: () => void
): AlertAction => ({
  type: SET_ALERT_PRIMARY_ACTION,
  payload: { primaryAction },
});

export const setAlertPrimaryActionText = (
  primaryActionText: string
): AlertAction => ({
  type: SET_ALERT_PRIMARY_ACTION_TEXT,
  payload: { primaryActionText },
});

export const setAlertSecondaryAction = (
  secondaryAction: () => void
): AlertAction => ({
  type: SET_ALERT_SECONDARY_ACTION,
  payload: { secondaryAction },
});

export const setAlertSecondaryActionText = (
  secondaryActionText: string
): AlertAction => ({
  type: SET_ALERT_SECONDARY_ACTION_TEXT,
  payload: { secondaryActionText },
});

export const setAlertTitle = (title: string): AlertAction => ({
  type: SET_ALERT_TITLE,
  payload: { title },
});

export const setBuyMultiplier = (buyMultiplier: number): GameAction => ({
  type: SET_BUY_MULTIPLIER,
  payload: { buyMultiplier },
});

export const setChapter = (chapter: number): StoryAction => ({
  type: SET_CHAPTER,
  payload: { chapter },
});

export const setCurrentAction = (currentAction: LocationAction): MapAction => ({
  type: SET_CURRENT_ACTION,
  payload: { currentAction },
});

export const setCurrentLocation = (currentLocation: Location): MapAction => ({
  type: SET_CURRENT_LOCATION,
  payload: { currentLocation },
});

export const setDate = (date: string): GameAction => ({
  type: SET_DATE,
  payload: { date },
});

export const setDoctorReputation = (
  doctorReputation: number
): PlayerAction => ({
  type: SET_DOCTOR_REPUTATION,
  payload: { doctorReputation },
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

export const setPatientAge = (age: number): PatientAction => ({
  type: SET_PATIENT_AGE,
  payload: { age },
});

export const setPatientChat = (chat: string[]): PatientAction => ({
  type: SET_PATIENT_CHAT,
  payload: { chat },
});

export const setPatientComplaint = (complaint: string): PatientAction => ({
  type: SET_PATIENT_COMPLAINT,
  payload: { complaint },
});

export const setPatientName = (name: string): PatientAction => ({
  type: SET_PATIENT_NAME,
  payload: { name },
});

export const setPatientOperation = (operation: Operation): PatientAction => ({
  type: SET_PATIENT_OPERATION,
  payload: { operation },
});

export const setPatientRemedy = (remedy: Remedy): PatientAction => ({
  type: SET_PATIENT_REMEDY,
  payload: { remedy },
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

      const { game, map, player, story, ui } = state;
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
      dispatch(setCurrentLocation(map.currentLocation));
      dispatch(setActions(map.actions));
      dispatch(setDoctorReputation(player.doctorReputation));

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
        dispatch(
          setAlert(
            "Away Earnings",
            `You were away for ${awayTime}. You earned $${awayEarnings.toLocaleString()}`,
            () => null,
            "OK",
            () => null,
            ""
          )
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
  const { chapter } = getState().story;
  // * Should progress date by 1 month
  const currentDate = getState().game.date;
  const newDate = add(new Date(currentDate), { months: 1 }).toDateString();
  const monthsUntilDeath = -differenceInMonths(
    new Date(newDate),
    new Date(1346, 0, 1)
  ); // * Months until January 1346
  dispatch(setDate(newDate));
  dispatch(setChapter(chapter + 1));
  dispatch(setStoryText(`${monthsUntilDeath} months before death...`));
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
  dispatch(setPopulation({ alive: newAlivePop, dead, infected }));
};

export const travel = (location: Location): AppThunk => (
  dispatch,
  getState
) => {
  dispatch(setCurrentLocation(location));
  // * Set Actions based on Location
  const churchActions: ChurchLocationAction[] = [
    "attend mass",
    "confess",
    "pray",
  ];
  const graveyardActions: GraveyardLocationAction[] = ["mourn"];
  const homeActions: HomeLocationAction[] = ["cook", "sleep"];
  const officeActions: OfficeLocationAction[] = [
    "research cure",
    "treat patient",
  ];
  const tavernActions: TavernLocationAction[] = ["order drink", "order food"];
  const townSquareActions: TownSquareLocationAction[] = [
    "barter",
    "hear town crier",
  ];

  const actionSets = {
    church: churchActions,
    graveyard: graveyardActions,
    home: homeActions,
    office: officeActions,
    tavern: tavernActions,
    "town square": townSquareActions,
  };

  const selectedActionSet = actionSets[location];
  dispatch(setActions(selectedActionSet));
};

export const performAction = (action: LocationAction): AppThunk => (
  dispatch,
  getState
) => {
  const actionLogic = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    "attend mass": () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    barter: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    confess: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    cook: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    "hear town crier": () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mourn: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    "order drink": () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    "order food": () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    pray: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    "research cure": () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    sleep: () => {},
    "treat patient": () => {
      const randomIndex = randomInteger(0, patientScenarios.length - 1);
      const patientScenario: PatientScenario = patientScenarios[randomIndex];
      dispatch(setPatientAge(patientScenario.age));
      dispatch(setPatientChat(patientScenario.chat));
      dispatch(setPatientComplaint(patientScenario.complaint));
      dispatch(setPatientName(patientScenario.name));
      dispatch(setPatientOperation(patientScenario.operation));
      dispatch(setPatientRemedy(patientScenario.remedy));
    },
  };
  const currentActionLogic = actionLogic[action];

  dispatch(setCurrentAction(action));
  currentActionLogic();
};

export const setAlert = (
  title: string,
  content: string,
  primaryAction: () => void,
  primaryActionText: string,
  secondaryAction: () => void,
  secondaryActionText: string
): AppThunk => (dispatch, getState) => {
  dispatch(setAlertContent(content));
  dispatch(setAlertPrimaryAction(primaryAction));
  dispatch(setAlertPrimaryActionText(primaryActionText));
  dispatch(setAlertSecondaryAction(secondaryAction));
  dispatch(setAlertSecondaryActionText(secondaryActionText));
  dispatch(setAlertTitle(title));
  const dialogElement = document.getElementById("alert") as HTMLDialogElement;
  dialogElement.showModal();
};
