import * as React from "react";
import StateContext from "../context/state";

export interface ItemProps {
  baseIncome: number;
  cost: number;
  count: number;
  income: number;
  name: string;
  setCount: any;
}

const Item: React.SFC<ItemProps> = ({
  baseIncome,
  cost,
  count,
  income,
  name,
  setCount,
}) => {
  return (
    <StateContext.Consumer>
      {(context) => {
        const { buyMultiplier, money, setMoney } = context;
        return (
          <div
            id={`${name.toLowerCase().replace(/ /gm, "-")}-container`}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span>
              {name} - {count.toLocaleString()}x - ${income.toLocaleString()}
              /second
            </span>
            <span>Base Income - ${baseIncome.toLocaleString()}/second</span>
            <button
              disabled={money < cost}
              onClick={() => {
                const newMoney = money - cost;
                setMoney(Math.round(newMoney * 100) / 100);
                setCount(count + 1);
              }}
            >
              BUY {buyMultiplier}x - ${cost.toLocaleString()}
            </button>
          </div>
        );
      }}
    </StateContext.Consumer>
  );
};

export default Item;
