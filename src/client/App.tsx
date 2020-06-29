import * as React from "react";
import { connect } from "react-redux";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import {
  deathRate,
  growthRate,
  initializeGameState,
  progressDate,
  resetGame,
  saveGame,
} from "./redux/thunks";
import { setChapter, setStoryText } from "./redux/actions/story";
import Actions from "./components/Actions";
import Alert from "./components/Alert";
import Map from "./components/Map";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import ThemeToggle from "./components/ThemeToggle";
import { gameActions } from "./constants";
import { LocationAction, RootState, Theme } from "./types";
import { setIsVisible } from "./redux/actions/menu";

interface AppProps {
  chapter: number;
  currentAction: null | LocationAction;
  handleDateInterval: () => void;
  handleDeathRate: () => void;
  // handleEarningsInterval: () => void;
  handleGoOn: () => void;
  handleGrowthRate: () => void;
  handleInitializeGameState: () => void;
  handleOpenMenu: () => void;
  handleResetGame: () => void;
  handleSaveGame: () => void;
  handleStartDay: () => void;
  handleStartJourny: () => void;
  theme: Theme;
}

/**
 * Application
 */
const App: React.SFC<AppProps> = (props: AppProps) => {
  const {
    chapter,
    currentAction,
    handleDateInterval,
    handleDeathRate,
    // handleEarningsInterval,
    handleGoOn,
    handleGrowthRate,
    handleInitializeGameState,
    handleOpenMenu,
    handleResetGame,
    handleSaveGame,
    handleStartDay,
    handleStartJourny,
    theme,
  } = props;

  /**
   * Earnings Interval
   */
  // useInterval(() => {
  //   handleEarningsInterval();
  // }, 1000);

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

  const GameAction = currentAction ? gameActions[currentAction] : () => null;

  return (
    <div className={theme} id="app">
      {/* <Stats /> */}

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

      <ThemeToggle />

      {chapter > 2 && (
        <button
          className="nes-btn is-error"
          id="reset"
          onClick={() => handleResetGame()}
          type="button"
        >
          RESET
        </button>
      )}

      <Alert />
      <LoadingIndicator />
      <Menu />
      <MenuButton />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  chapter: state.story.chapter,
  currentAction: state.map.currentAction,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeathRate: () => dispatch(deathRate()),
  handleDateInterval: () => dispatch(progressDate()),
  // handleEarningsInterval: () => dispatch(setNewEarnings()),
  handleGoOn: () => {
    dispatch(setChapter(2));
    dispatch(setStoryText("... the Black Plague starts in 1346. Good luck."));
  },
  handleGrowthRate: () => dispatch(growthRate()),
  handleInitializeGameState: () => dispatch(initializeGameState()),
  handleOpenMenu: () => dispatch(setIsVisible(true)),
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
