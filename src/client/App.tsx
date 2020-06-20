import * as React from "react";
import formatDistance from "date-fns/formatDistance";
import Item from "./components/Item";
import LoadingIndicator from "./components/LoadingIndicator";
import StateContext from "./context/state";
import useInterval from "./hooks/useInterval";
import {
  deleteGame,
  editGame,
  getGameData,
  setGame,
  setGameData,
} from "./api/game";
import { basePrice, startingValues } from "./constants";
import { createGameItems, round } from "./util";

/**
 * Application
 */
const App: React.SFC<{}> = () => {
  const [id, setId] = React.useState(null);
  const [gameStartTime, setGameStartTime] = React.useState(null);
  const [buyMultiplier, setBuyMultiplier] = React.useState(1);
  const [earnings, setEarnings] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [money, setMoney] = React.useState(50.0);

  const itemCounts = [];
  const itemCountSetters = [];
  const itemCosts = [];
  const itemCostSetters = [];

  Object.values(basePrice).forEach((price: number) => {
    const [itemCount, setItemCount] = React.useState(0);
    const [itemCost, setItemCost] = React.useState(price);
    itemCounts.push(itemCount);
    itemCountSetters.push(setItemCount);
    itemCosts.push(itemCost);
    itemCostSetters.push(setItemCost);
  });

  const items = createGameItems(
    itemCosts,
    itemCounts,
    itemCountSetters,
    buyMultiplier
  );

  /**
   * Earnings Interval
   */
  useInterval(() => {
    let newEarnings = 0;

    items.forEach(({ baseIncome, bonusMultiplier, count }) => {
      newEarnings = newEarnings + count * baseIncome * bonusMultiplier;
    });

    const newMoney = money + newEarnings;
    setMoney(() => round(newMoney, 2));
    setEarnings(round(newEarnings, 2));
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    const saveGame = async () => {
      try {
        await editGame(id, { buyMultiplier, items, money });
      } catch (error) {
        console.error(error);
      }
    };
    saveGame();
  }, 5000);

  /**
   * Initialize Game State
   */
  React.useEffect(() => {
    // * Ask DB for Game Data
    const storedId = localStorage.getItem("id");

    if (storedId) {
      getGameData(
        storedId,
        setBuyMultiplier,
        setId,
        setIsLoading,
        setGameStartTime,
        setMoney,
        itemCostSetters,
        itemCountSetters
      );
    } else {
      setGameData(
        buyMultiplier,
        items,
        money,
        setGameStartTime,
        setId,
        setIsLoading
      );
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        buyMultiplier,
        isLoading,
        money,
        setIsLoading,
        setMoney,
      }}
    >
      <div id="app">
        <h1>splague</h1>
        <button
          id="reset"
          onClick={async () => {
            setIsLoading(true);

            try {
              // * Delete Game from DB
              await deleteGame(id);
              // * Set New Game in DB
              const { _id, createdAt, data } = await setGame({
                ...startingValues,
              });
              const parsedData = JSON.parse(data);
              // * Store values in App state
              setId(_id);
              localStorage.setItem("id", _id);
              setGameStartTime(createdAt);
              setMoney(parsedData.money);
              itemCostSetters.forEach((setItemCost, i: number) =>
                setItemCost(parsedData.items[i].cost)
              );
              itemCountSetters.forEach((setItemCount, i: number) =>
                setItemCount(parsedData.items[i].count)
              );
            } catch (error) {
              console.error(error);
            }
            setIsLoading(false);
          }}
          type="button"
        >
          RESET
        </button>

        {gameStartTime && (
          <span>
            Time Played -{" "}
            {formatDistance(new Date(gameStartTime), new Date(), {
              includeSeconds: true,
            })}
          </span>
        )}
        <span id="money">Money - ${money.toLocaleString()}</span>
        <span>Earnings - ${earnings.toLocaleString()}/second</span>
        <button
          onClick={() => {
            switch (buyMultiplier) {
              case 1:
                setBuyMultiplier(5);
                break;
              case 5:
                setBuyMultiplier(10);
                break;
              case 10:
                setBuyMultiplier(1);
                break;
              default:
                break;
            }
          }}
          type="button"
        >
          Buy Multiplier - {buyMultiplier}
        </button>

        {items.map((itemProps) => (
          <Item key={itemProps.name} {...itemProps} />
        ))}

        <LoadingIndicator />
      </div>
    </StateContext.Provider>
  );
};

export default App;
