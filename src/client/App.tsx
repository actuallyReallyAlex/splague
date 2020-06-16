import * as React from "react";
import formatDistance from "date-fns/formatDistance";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import StateContext from "./context/state";
import Item from "./components/Item";
import { createGameItems, round } from "./util";
import { baseIncome, basePrice, startingValues } from "./constants";

/**
 * Application.
 */
const App: React.SFC<{}> = () => {
  const [gameStartTime, setGameStartTime] = React.useState(null);
  const [buyMultiplier, setBuyMultiplier] = React.useState(1);
  const [earnings, setEarnings] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [money, setMoney] = React.useState(50.0);

  const [item1Count, setItem1Count] = React.useState(0);
  const [item1Cost, setItem1Cost] = React.useState(basePrice.item1);

  const [item2Count, setItem2Count] = React.useState(0);
  const [item2Cost, setItem2Cost] = React.useState(basePrice.item2);

  const [item3Count, setItem3Count] = React.useState(0);
  const [item3Cost, setItem3Cost] = React.useState(basePrice.item3);

  const [item4Count, setItem4Count] = React.useState(0);
  const [item4Cost, setItem4Cost] = React.useState(basePrice.item4);

  const [item5Count, setItem5Count] = React.useState(0);
  const [item5Cost, setItem5Cost] = React.useState(basePrice.item5);

  const [item6Count, setItem6Count] = React.useState(0);
  const [item6Cost, setItem6Cost] = React.useState(basePrice.item6);

  const [item7Count, setItem7Count] = React.useState(0);
  const [item7Cost, setItem7Cost] = React.useState(basePrice.item7);

  const [item8Count, setItem8Count] = React.useState(0);
  const [item8Cost, setItem8Cost] = React.useState(basePrice.item8);

  const [item9Count, setItem9Count] = React.useState(0);
  const [item9Cost, setItem9Cost] = React.useState(basePrice.item9);

  const [item10Count, setItem10Count] = React.useState(0);
  const [item10Cost, setItem10Cost] = React.useState(basePrice.item10);

  const itemCosts = [
    item1Cost,
    item2Cost,
    item3Cost,
    item4Cost,
    item5Cost,
    item6Cost,
    item7Cost,
    item8Cost,
    item9Cost,
    item10Cost,
  ];

  const itemCostSetters = [
    setItem1Cost,
    setItem2Cost,
    setItem3Cost,
    setItem4Cost,
    setItem5Cost,
    setItem6Cost,
    setItem7Cost,
    setItem8Cost,
    setItem9Cost,
    setItem10Cost,
  ];

  const itemCounts = [
    item1Count,
    item2Count,
    item3Count,
    item4Count,
    item5Count,
    item6Count,
    item7Count,
    item8Count,
    item9Count,
    item10Count,
  ];

  const itemCountSetters = [
    setItem1Count,
    setItem2Count,
    setItem3Count,
    setItem4Count,
    setItem5Count,
    setItem6Count,
    setItem7Count,
    setItem8Count,
    setItem9Count,
    setItem10Count,
  ];

  /**
   * Earnings Interval
   */
  useInterval(() => {
    const newEarnings =
      item1Count * baseIncome.item1 +
      item2Count * baseIncome.item2 +
      item3Count * baseIncome.item3 +
      item4Count * baseIncome.item4 +
      item5Count * baseIncome.item5 +
      item6Count * baseIncome.item6 +
      item7Count * baseIncome.item7 +
      item8Count * baseIncome.item8 +
      item9Count * baseIncome.item9 +
      item10Count * baseIncome.item10;
    const newMoney = money + newEarnings;
    setMoney(() => round(newMoney, 2));
    setEarnings(round(newEarnings, 2));
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    localStorage.setItem(
      "state",
      JSON.stringify({
        buyMultiplier,
        gameStartTime,
        money,
        item1Count,
        item1Cost,
        item2Count,
        item2Cost,
        item3Count,
        item3Cost,
        item4Count,
        item4Cost,
        item5Count,
        item5Cost,
        item6Count,
        item6Cost,
        item7Count,
        item7Cost,
        item8Count,
        item8Cost,
        item9Count,
        item9Cost,
        item10Count,
        item10Cost,
      })
    );
  }, 5000);

  /**
   * Initialize Game State
   */
  React.useEffect(() => {
    if (localStorage.getItem("state")) {
      const loadedState = JSON.parse(localStorage.getItem("state"));
      setBuyMultiplier(loadedState.buyMultiplier);
      setMoney(loadedState.money);
      setItem1Count(loadedState.item1Count);
      setItem1Cost(loadedState.item1Cost);
      setItem2Count(loadedState.item2Count);
      setItem2Cost(loadedState.item2Cost);
      setItem3Count(loadedState.item3Count);
      setItem3Cost(loadedState.item3Cost);
      setItem4Count(loadedState.item4Count);
      setItem4Cost(loadedState.item4Cost);
      setItem5Count(loadedState.item5Count);
      setItem5Cost(loadedState.item5Cost);
      setItem6Count(loadedState.item6Count);
      setItem6Cost(loadedState.item6Cost);
      setItem7Count(loadedState.item7Count);
      setItem7Cost(loadedState.item7Cost);
      setItem8Count(loadedState.item8Count);
      setItem8Cost(loadedState.item8Cost);
      setItem9Count(loadedState.item9Count);
      setItem9Cost(loadedState.item9Cost);
      setItem10Count(loadedState.item10Count);
      setItem10Cost(loadedState.item10Cost);
      setGameStartTime(loadedState.gameStartTime);
    } else {
      setGameStartTime(new Date());
    }

    setIsLoading(false);
  }, []);

  const items = createGameItems(
    itemCosts,
    itemCostSetters,
    itemCounts,
    itemCountSetters,
    buyMultiplier
  );

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
          onClick={() => {
            const newGameStartTime = new Date();
            setIsLoading(true);
            setMoney(startingValues.money);
            setItem1Count(startingValues.item1Count);
            setItem1Cost(startingValues.item1Cost);
            setItem2Count(startingValues.item2Count);
            setItem2Cost(startingValues.item2Cost);
            setItem3Count(startingValues.item3Count);
            setItem3Cost(startingValues.item3Cost);
            setItem4Count(startingValues.item4Count);
            setItem4Cost(startingValues.item4Cost);
            setItem5Count(startingValues.item5Count);
            setItem5Cost(startingValues.item5Cost);
            setItem6Count(startingValues.item6Count);
            setItem6Cost(startingValues.item6Cost);
            setItem7Count(startingValues.item7Count);
            setItem7Cost(startingValues.item7Cost);
            setItem8Count(startingValues.item8Count);
            setItem8Cost(startingValues.item8Cost);
            setItem9Count(startingValues.item9Count);
            setItem9Cost(startingValues.item9Cost);
            setItem10Count(startingValues.item10Count);
            setItem10Cost(startingValues.item10Cost);
            setGameStartTime(newGameStartTime);
            localStorage.setItem(
              "state",
              JSON.stringify({
                ...startingValues,
                gameStartTime: newGameStartTime,
              })
            );
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
