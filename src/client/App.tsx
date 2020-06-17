import * as React from "react";
import formatDistance from "date-fns/formatDistance";
import differenceInSeconds from "date-fns/differenceInSeconds";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import StateContext from "./context/state";
import Item from "./components/Item";
import { createGameItems, round } from "./util";
import { basePrice, startingValues } from "./constants";

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
    const newEarnings =
      items[0].count * items[0].baseIncome * items[0].bonusMultiplier +
      items[1].count * items[1].baseIncome * items[1].bonusMultiplier +
      items[2].count * items[2].baseIncome * items[2].bonusMultiplier +
      items[3].count * items[3].baseIncome * items[3].bonusMultiplier +
      items[4].count * items[4].baseIncome * items[4].bonusMultiplier +
      items[5].count * items[5].baseIncome * items[5].bonusMultiplier +
      items[6].count * items[6].baseIncome * items[6].bonusMultiplier +
      items[7].count * items[7].baseIncome * items[7].bonusMultiplier +
      items[8].count * items[8].baseIncome * items[8].bonusMultiplier +
      items[9].count * items[9].baseIncome * items[9].bonusMultiplier;
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
        items,
        money,
        saveTime: new Date(),
      })
    );
  }, 5000);

  /**
   * Initialize Game State
   */
  React.useEffect(() => {
    if (localStorage.getItem("state")) {
      const {
        buyMultiplier,
        gameStartTime,
        items,
        money,
        saveTime,
      } = JSON.parse(localStorage.getItem("state"));
      setBuyMultiplier(buyMultiplier);
      setGameStartTime(gameStartTime);
      itemCostSetters.forEach((setItemCost, i: number) =>
        setItemCost(items[i].cost)
      );
      itemCountSetters.forEach((setItemCount, i: number) =>
        setItemCount(items[i].count)
      );

      const saveTimeDate = new Date(saveTime);
      const nowDate = new Date();
      const earningsPerSecond =
        items[0].count * items[0].baseIncome * items[0].bonusMultiplier +
        items[1].count * items[1].baseIncome * items[1].bonusMultiplier +
        items[2].count * items[2].baseIncome * items[2].bonusMultiplier +
        items[3].count * items[3].baseIncome * items[3].bonusMultiplier +
        items[4].count * items[4].baseIncome * items[4].bonusMultiplier +
        items[5].count * items[5].baseIncome * items[5].bonusMultiplier +
        items[6].count * items[6].baseIncome * items[6].bonusMultiplier +
        items[7].count * items[7].baseIncome * items[7].bonusMultiplier +
        items[8].count * items[8].baseIncome * items[8].bonusMultiplier +
        items[9].count * items[9].baseIncome * items[9].bonusMultiplier;

      const awayTime = formatDistance(saveTimeDate, nowDate);
      const awayEarnings = round(
        -differenceInSeconds(saveTimeDate, nowDate) * earningsPerSecond,
        2
      );

      const newMoney = money + awayEarnings;
      setMoney(() => round(newMoney, 2));

      setIsLoading(false);

      alert(
        `You were away for ${awayTime}. You earned $${awayEarnings.toLocaleString()}`
      );
    } else {
      setGameStartTime(new Date());
      setIsLoading(false);
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
          onClick={() => {
            const newGameStartTime = new Date();
            setIsLoading(true);
            setMoney(startingValues.money);
            itemCostSetters.forEach((setItemCost, i: number) =>
              setItemCost(startingValues.items[i].cost)
            );
            itemCountSetters.forEach((setItemCount, i: number) =>
              setItemCount(startingValues.items[i].count)
            );
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
