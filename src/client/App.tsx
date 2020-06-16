import * as React from "react";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import StateContext from "./context/state";
import Item from "./components/Item";

/**
 * Application.
 */
const App: React.SFC<{}> = () => {
  const [buyMultiplier, setBuyMultiplier] = React.useState(1);
  const [earnings, setEarnings] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [money, setMoney] = React.useState(10.0);

  const [item1Count, setItem1Count] = React.useState(0);
  const [item1Cost, setItem1Cost] = React.useState(1.0);

  const [item2Count, setItem2Count] = React.useState(0);
  const [item2Cost, setItem2Cost] = React.useState(25.0);

  const [item3Count, setItem3Count] = React.useState(0);
  const [item3Cost, setItem3Cost] = React.useState(100.0);

  const [item4Count, setItem4Count] = React.useState(0);
  const [item4Cost, setItem4Cost] = React.useState(1000.0);

  const [item5Count, setItem5Count] = React.useState(0);
  const [item5Cost, setItem5Cost] = React.useState(5000.0);

  /**
   * Earnings Interval
   */
  useInterval(() => {
    const newEarnings =
      item1Count * 0.1 +
      item2Count * 0.25 +
      item3Count * 0.33 +
      item4Count * 0.5 +
      item5Count * 0.7;
    const newMoney = money + newEarnings;
    setMoney(() => Math.round(newMoney * 100) / 100);
    setEarnings(newEarnings);
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    localStorage.setItem(
      "state",
      JSON.stringify({
        buyMultiplier,
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
    }

    setIsLoading(false);
  }, []);

  const items = [
    {
      cost: item1Cost * buyMultiplier,
      count: item1Count,
      name: "Item 1",
      setCost: setItem1Cost,
      setCount: setItem1Count,
    },
    {
      cost: item2Cost * buyMultiplier,
      count: item2Count,
      name: "Item 2",
      setCost: setItem2Cost,
      setCount: setItem2Count,
    },
    {
      cost: item3Cost * buyMultiplier,
      count: item3Count,
      name: "Item 3",
      setCost: setItem3Cost,
      setCount: setItem3Count,
    },
    {
      cost: item4Cost * buyMultiplier,
      count: item4Count,
      name: "Item 4",
      setCost: setItem4Cost,
      setCount: setItem4Count,
    },
    {
      cost: item5Cost * buyMultiplier,
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
