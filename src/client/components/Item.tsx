import * as React from "react";
import StateContext from "../context/state";

export interface ItemProps {
  baseIncome: number;
  cost: number;
  count: number;
  income: number;
  name: string;
  setCost: any;
  setCount: any;
}

const Item: React.SFC<ItemProps> = ({
  baseIncome,
  cost,
  count,
  income,
  name,
  setCost,
  setCount,
}) => {
  return (
    <StateContext.Consumer>
      {(context) => {
        const { buyMultiplier, money, setMoney } = context;
        return (
          <>
            <span>
              Item {name} - {count}x - ${income}/second
            </span>
            <span>Base Income - ${baseIncome}/second</span>
            <button
              disabled={money < cost}
              onClick={() => {
                const newMoney = money - cost;
                setMoney(Math.round(newMoney * 100) / 100);
                setCount(count + 1);
              }}
            >
              BUY {buyMultiplier}x - ${cost}
            </button>
          </>
        );
      }}
    </StateContext.Consumer>
  );
};

export default Item;
