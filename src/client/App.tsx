import * as React from "react";
import { connect } from "react-redux";
import formatDistance from "date-fns/formatDistance";
import ItemComponent from "./components/Item";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import {
  deathRate,
  growthRate,
  initializeGameState,
  progressDate,
  resetGame,
  saveGame,
  setChapter,
  setNewEarnings,
  setStoryText,
  setTheme,
  toggleBuyMultiplier,
} from "./redux/actions";
import Alert from "./components/Alert";
import Map from "./components/Map";
import TreatPatient from "./actions/TreatPatient";
import { Item, LocationAction, Population, RootState, Theme } from "./types";
import Stats from "./components/Stats";
import Actions from "./components/Actions";

interface AppProps {
  buyMultiplier: number;
  chapter: number;
  currentAction: null | LocationAction;
  earnings: number;
  handleBuyMultiplierClick: () => void;
  handleDateInterval: () => void;
  handleDeathRate: () => void;
  handleEarningsInterval: () => void;
  handleGoOn: () => void;
  handleGrowthRate: () => void;
  handleInitializeGameState: () => void;
  handleResetGame: () => void;
  handleSaveGame: () => void;
  handleStartDay: () => void;
  handleStartJourny: () => void;
  handleThemeToggle: (theme: Theme) => void;
  items: Item[];
  money: number;
  population: Population;
  startTime: string;
  theme: Theme;
}

/**
 * Application
 */
const App: React.SFC<AppProps> = (props: AppProps) => {
  const {
    buyMultiplier,
    chapter,
    currentAction,
    earnings,
    handleBuyMultiplierClick,
    handleDateInterval,
    handleDeathRate,
    handleEarningsInterval,
    handleGoOn,
    handleGrowthRate,
    handleInitializeGameState,
    handleResetGame,
    handleSaveGame,
    handleStartDay,
    handleStartJourny,
    handleThemeToggle,
    items,
    money,
    population,
    startTime,
    theme,
  } = props;
  /**
   * Earnings Interval
   */
  useInterval(() => {
    handleEarningsInterval();
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    handleSaveGame();
  }, 10000);

  /**
   * Date Interval
   */
  useInterval(() => {
    handleDateInterval();
  }, 60000);

  /**
   * Death Rate
   */
  useInterval(() => {
    handleDeathRate();
  }, 10000);

  /**
   * Growth Rate
   */
  useInterval(() => {
    handleGrowthRate();
  }, 10000);

  /**
   * Initialize Game State
   */
  React.useEffect(() => {
    handleInitializeGameState();
  }, []);

  const gameActions = {
    "attend mass": () => null,
    barter: () => null,
    confess: () => null,
    cook: () => null,
    "hear town crier": () => null,
    mourn: () => null,
    "order drink": () => null,
    "order food": () => null,
    pray: () => null,
    "research cure": () => null,
    sleep: () => null,
    "treat patient": TreatPatient,
  };

  const GameAction = currentAction ? gameActions[currentAction] : () => null;

  return (
    <div className={theme} id="app">
      <Stats />

      <Map />

      <GameAction />

      {chapter > 2 && <Actions />}

      {chapter === 0 && (
        <button
          className="nes-btn is-primary"
          id={`story-${chapter}`}
          onClick={() => handleStartJourny()}
        >
          Start Journy
        </button>
      )}
      {chapter === 1 && (
        <button
          className="nes-btn is-primary"
          id={`story-${chapter}`}
          onClick={() => handleGoOn()}
        >
          Go on ...
        </button>
      )}
      {chapter === 2 && (
        <button
          className="nes-btn is-primary"
          id={`story-${chapter}`}
          onClick={() => handleStartDay()}
        >
          Start day
        </button>
      )}

      <button
        className="nes-btn is-primary"
        id="theme-toggle"
        onClick={() => handleThemeToggle(theme)}
      >
        Toggle Theme
      </button>

      {chapter > 2 && (
        <>
          <button
            className="nes-btn is-error"
            id="reset"
            onClick={() => handleResetGame()}
            type="button"
          >
            RESET
          </button>

          {startTime && (
            <span id="time-played">
              Time Played -{" "}
              {formatDistance(new Date(startTime), new Date(), {
                includeSeconds: true,
              })}
            </span>
          )}
          <span>
            Money - $<span id="money">{money.toLocaleString()}</span>
          </span>
          <span id="earnings">
            Earnings - ${earnings.toLocaleString()}/second
          </span>
          <span id="alive-population">
            Alive Population - {population.alive.toLocaleString()}
          </span>
          <span id="dead-population">
            Dead Population - {population.dead.toLocaleString()}
          </span>
          <span id="infected-population">
            Infected Population - {population.infected.toLocaleString()}
          </span>
          <button
            className="nes-btn"
            onClick={() => handleBuyMultiplierClick()}
            type="button"
          >
            Buy Multiplier - {buyMultiplier}
          </button>

          {items.map((itemProps) => (
            <ItemComponent key={itemProps.name} {...itemProps} />
          ))}
        </>
      )}

      <LoadingIndicator />
      <Alert />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  buyMultiplier: state.game.buyMultiplier,
  chapter: state.story.chapter,
  currentAction: state.map.currentAction,
  earnings: state.game.earnings,
  items: state.game.items,
  money: state.game.money,
  population: state.world.population,
  startTime: state.game.startTime,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeathRate: () => dispatch(deathRate()),
  handleBuyMultiplierClick: () => dispatch(toggleBuyMultiplier()),
  handleDateInterval: () => dispatch(progressDate()),
  handleEarningsInterval: () => dispatch(setNewEarnings()),
  handleGoOn: () => {
    dispatch(setChapter(2));
    dispatch(setStoryText("... the Black Plague starts in 1346. Good luck."));
  },
  handleGrowthRate: () => dispatch(growthRate()),
  handleInitializeGameState: () => dispatch(initializeGameState()),
  handleResetGame: () => dispatch(resetGame()),
  handleSaveGame: () => dispatch(saveGame()),
  handleStartDay: () => {
    dispatch(setChapter(3));
    dispatch(setStoryText("12 months before death..."));
  },
  handleStartJourny: () => {
    dispatch(setChapter(1));
    dispatch(
      setStoryText(
        "You are a level headed doctor of medicine living in Western Europe. Above all else, you desire to help others. The year is 1345."
      )
    );
  },
  handleThemeToggle: (theme: Theme) => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
