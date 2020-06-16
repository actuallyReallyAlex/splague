import * as React from "react";
import formatDistance from "date-fns/formatDistance";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import StateContext from "./context/state";
import Item from "./components/Item";
import { round } from "./util";
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

  /**
   * Earnings Interval
   */
  useInterval(() => {
    const newEarnings =
      item1Count * baseIncome.item1 +
      item2Count * baseIncome.item2 +
      item3Count * baseIncome.item3 +
      item4Count * baseIncome.item4 +
      item5Count * baseIncome.item5;
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
      setGameStartTime(loadedState.gameStartTime);
    } else {
      setGameStartTime(new Date());
    }

    setIsLoading(false);
  }, []);

  const items = [
    {
      cost: round(item1Cost * Math.pow(1.07, item1Count) * buyMultiplier, 2),
      // Price=BaseCost×Multiplier(#Owned)
      count: item1Count,
      name: "Item 1",
      setCost: setItem1Cost,
      setCount: setItem1Count,
    },
    {
      cost: round(item2Cost * Math.pow(1.07, item2Count) * buyMultiplier, 2),
      count: item2Count,
      name: "Item 2",
      setCost: setItem2Cost,
      setCount: setItem2Count,
    },
    {
      cost: round(item3Cost * Math.pow(1.07, item3Count) * buyMultiplier, 2),
      count: item3Count,
      name: "Item 3",
      setCost: setItem3Cost,
      setCount: setItem3Count,
    },
    {
      cost: round(item4Cost * Math.pow(1.07, item4Count) * buyMultiplier, 2),
      count: item4Count,
      name: "Item 4",
      setCost: setItem4Cost,
      setCount: setItem4Count,
    },
    {
      cost: round(item5Cost * Math.pow(1.07, item5Count) * buyMultiplier, 2),
      count: item5Count,
      name: "Item 5",
      setCost: setItem5Cost,
      setCount: setItem5Count,
    },
  ];

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
        <span>Money - ${money}</span>
        <span>Earnings - ${earnings}/second</span>
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
