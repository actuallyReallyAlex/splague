import * as React from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
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
import Actions from "./components/Actions";
import Alert from "./components/Alert";
import Inventory from "./components/Inventory";
import InventoryToggle from "./components/InventoryToggle";
import Map from "./components/Map";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import Onboarding from "./components/Onboarding";
import ThemeToggle from "./components/ThemeToggle";
import { gameActions } from "./constants";
import { LocationAction, RootState, Theme } from "./types";

interface AppProps {
  chapter: number;
  currentAction: null | LocationAction;
  handleDateInterval: () => void;
  handleDeathRate: () => void;
  handleGrowthRate: () => void;
  handleInitializeGameState: () => void;
  handleResetGame: () => void;
  handleSaveGame: () => void;
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
    handleGrowthRate,
    handleInitializeGameState,
    handleResetGame,
    handleSaveGame,
    theme,
  } = props;

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
      {chapter < 4 ? (
        <Onboarding />
      ) : (
        <>
          <Map />
          <GameAction />
          <Actions />
          <ThemeToggle />
          <InventoryToggle />
          <Alert />
          <Inventory />
          <Menu />
          <MenuButton />
          <ReactTooltip
            effect="solid"
            type={theme === "dark" ? "light" : "dark"}
          />

          <button
            className="nes-btn is-error"
            id="reset"
            onClick={() => handleResetGame()}
            type="button"
          >
            RESET
          </button>
        </>
      )}

      <LoadingIndicator />
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
  handleGrowthRate: () => dispatch(growthRate()),
  handleInitializeGameState: () => dispatch(initializeGameState()),
  handleResetGame: () => dispatch(resetGame()),
  handleSaveGame: () => dispatch(saveGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
