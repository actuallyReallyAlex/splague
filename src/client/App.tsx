import * as React from "react";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";

/**
 * Application.
 */
const App: React.SFC<{}> = () => {
  const [money, setMoney] = React.useState(10.0);
  const [itemMultiplier, setItemMultiplier] = React.useState(1);

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

  const [isLoading, setIsLoading] = React.useState(true);

  /**
   * Earnings Interval
   */
  useInterval(() => {
    const earnings = item1Count * 0.1 + item2Count * 0.25;
    +item3Count * 0.33 + item4Count * 0.5 + item5Count * 0.7;
    const newMoney = money + earnings;
    setMoney(() => Math.round(newMoney * 100) / 100);
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    localStorage.setItem(
      "state",
      JSON.stringify({
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
        itemMultiplier,
      })
    );
  }, 5000);

  /**
   * Initialize Game State
   */
  React.useEffect(() => {
    if (localStorage.getItem("state")) {
      console.log("RETRIEVED STATE");
      const loadedState = JSON.parse(localStorage.getItem("state"));
      console.log(loadedState);
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
      setItemMultiplier(loadedState.itemMultiplier);
    }

    setIsLoading(false);
  }, []);

  return (
    <div id="app">
      <h1>splague</h1>
      <span>Money - ${money}</span>
      <span>Item 1 - {item1Count}</span>
      <button
        disabled={money < item1Cost}
        onClick={() => {
          const newMoney = money - item1Cost;
          setMoney(Math.round(newMoney * 100) / 100);
          setItem1Count(item1Count + 1);
        }}
      >
        BUY {itemMultiplier}x - ${item1Cost}
      </button>

      <span>Item 2 - {item2Count}</span>
      <button
        disabled={money < item2Cost}
        onClick={() => {
          const newMoney = money - item2Cost;
          setMoney(Math.round(newMoney * 100) / 100);
          setItem2Count(item2Count + 1);
        }}
      >
        BUY {itemMultiplier}x - ${item2Cost}
      </button>

      <span>Item 3 - {item3Count}</span>
      <button
        disabled={money < item3Cost}
        onClick={() => {
          const newMoney = money - item3Cost;
          setMoney(Math.round(newMoney * 100) / 100);
          setItem3Count(item3Count + 1);
        }}
      >
        BUY {itemMultiplier}x - ${item3Cost}
      </button>

      <span>Item 4 - {item4Count}</span>
      <button
        disabled={money < item4Cost}
        onClick={() => {
          const newMoney = money - item4Cost;
          setMoney(Math.round(newMoney * 100) / 100);
          setItem4Count(item4Count + 1);
        }}
      >
        BUY {itemMultiplier}x - ${item4Cost}
      </button>

      <span>Item 5 - {item5Count}</span>
      <button
        disabled={money < item5Cost}
        onClick={() => {
          const newMoney = money - item5Cost;
          setMoney(Math.round(newMoney * 100) / 100);
          setItem5Count(item5Count + 1);
        }}
      >
        BUY {itemMultiplier}x - ${item5Cost}
      </button>
      <LoadingIndicator isLoading={isLoading} />
    </div>
  );
};

export default App;
