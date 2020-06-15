import * as React from "react";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";

/**
 * Application.
 */
const App: React.SFC<{}> = () => {
  const [money, setMoney] = React.useState(10.0);
  const [item1Count, setItem1Count] = React.useState(0);
  const [item1Cost, setItem1Cost] = React.useState(1.0);
  const [itemMultiplier, setItemMultiplier] = React.useState(1);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  /**
   * Earnings Interval
   */
  useInterval(() => {
    const earnings = item1Count * 0.1;
    const newMoney = money + earnings;
    setMoney(() => Math.round(newMoney * 100) / 100);
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    localStorage.setItem(
      "state",
      JSON.stringify({ money, item1Count, item1Cost, itemMultiplier })
    );
  }, 5000);

  // /**
  //  * Initialize Game State
  //  */
  React.useEffect(() => {
    if (localStorage.getItem("state")) {
      console.log("RETRIEVED STATE");
      const loadedState = JSON.parse(localStorage.getItem("state"));
      console.log(loadedState);
      setMoney(loadedState.money);
      setItem1Count(loadedState.item1Count);
      setItem1Cost(loadedState.item1Cost);
      setItemMultiplier(loadedState.itemMultiplier);
    }
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
      <LoadingIndicator isLoading={isLoading} />
    </div>
  );
};

export default App;
