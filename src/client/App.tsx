import * as React from "react";
import LoadingIndicator from "./components/LoadingIndicator";

/**
 * Application.
 */
const App: React.SFC<{}> = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const [money, setMoney] = React.useState(10.0);
  const [item1Count, setItem1Count] = React.useState(0);
  const [item1Cost, setItem1Cost] = React.useState(1.0);
  const [itemMultiplier, setItemMultiplier] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    const earningsInterval = setInterval(() => {
      const earnings = item1Count * 0.1;
      const newMoney = money + earnings;
      console.log({ money, earnings, newMoney });

      setMoney(() => Math.round(newMoney * 100) / 100);
    }, 1000);

    return () => clearInterval(earningsInterval);
  }, [money]);

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
