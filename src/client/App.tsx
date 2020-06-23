import * as React from "react";
import { connect } from "react-redux";
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import ItemComponent from "./components/Item";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import {
  initializeGameState,
  progressDate,
  resetGame,
  saveGame,
  setNewEarnings,
  toggleBuyMultiplier,
} from "./redux/actions";
import { Item } from "./types";

interface AppProps {
  avatar: string;
  buyMultiplier: number;
  date: string;
  earnings: number;
  handleBuyMultiplierClick: () => void;
  handleDateInterval: () => void;
  handleEarningsInterval: () => void;
  handleInitializeGameState: () => void;
  handleResetGame: () => void;
  handleSaveGame: () => void;
  items: Item[];
  money: number;
  name: string;
  startTime: string;
  story: string;
}

/**
 * Application
 */
const App: React.SFC<AppProps> = (props: AppProps) => {
  const {
    avatar,
    buyMultiplier,
    date,
    earnings,
    handleBuyMultiplierClick,
    handleDateInterval,
    handleEarningsInterval,
    handleInitializeGameState,
    handleResetGame,
    handleSaveGame,
    items,
    money,
    name,
    startTime,
    story,
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
   * Initialize Game State
   */
  React.useEffect(() => {
    handleInitializeGameState();
  }, []);

  return (
    <div id="app">
      <h1>splague</h1>
      <img alt="Player Avatar" id="avatar" src={avatar} />
      <span id="name">{name}</span>
      <span id="date">{format(new Date(date), "MMMM, yyy G")}</span>
      <p id="story">{story}</p>

      <button id="reset" onClick={() => handleResetGame()} type="button">
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
      <span id="earnings">Earnings - ${earnings.toLocaleString()}/second</span>
      <button onClick={() => handleBuyMultiplierClick()} type="button">
        Buy Multiplier - {buyMultiplier}
      </button>

      {items.map((itemProps) => (
        <ItemComponent key={itemProps.name} {...itemProps} />
      ))}

      <LoadingIndicator />
    </div>
  );
};

const mapStateToProps = ({ game, player, story }) => ({
  avatar: player.avatar,
  buyMultiplier: game.buyMultiplier,
  date: game.date,
  earnings: game.earnings,
  items: game.items,
  money: game.money,
  name: player.name,
  startTime: game.startTime,
  story: story.text,
});

const mapDispatchToProps = (dispatch) => ({
  handleBuyMultiplierClick: () => dispatch(toggleBuyMultiplier()),
  handleDateInterval: () => dispatch(progressDate()),
  handleEarningsInterval: () => dispatch(setNewEarnings()),
  handleInitializeGameState: () => dispatch(initializeGameState()),
  handleResetGame: () => dispatch(resetGame()),
  handleSaveGame: () => dispatch(saveGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
