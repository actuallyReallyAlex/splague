import * as React from "react";
import StateContext from "../context/state";

export interface ItemProps {
  cost: number;
  count: number;
  name: string;
  setCost: any;
  setCount: any;
}

const Item: React.SFC<ItemProps> = ({
  cost,
  count,
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
              Item {name} - {count}
            </span>
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
