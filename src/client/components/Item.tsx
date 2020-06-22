import * as React from "react";
import { connect } from "react-redux";
import { buyItem } from "../redux/actions";

export interface ItemProps {
  baseIncome: number;
  bonusMultiplier: number;
  buyMultiplier: number;
  cost: number;
  count: number;
  handleBuy: (name: string) => void;
  income: number;
  money: number;
  name: string;
}

const Item: React.SFC<ItemProps> = (props: ItemProps) => {
  const {
    baseIncome,
    bonusMultiplier,
    buyMultiplier,
    cost,
    count,
    handleBuy,
    income,
    money,
    name,
  } = props;
  const finalCost = cost * buyMultiplier;
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
      <span>Bonus Multiplier - {bonusMultiplier}</span>
      <span id="progress">Progress - {count % 10} / 10</span>
      <button disabled={money < finalCost} onClick={() => handleBuy(name)}>
        BUY {buyMultiplier}x - ${finalCost.toLocaleString()}
      </button>
    </div>
  );
};

const mapStateToProps = ({ game }) => ({
  buyMultiplier: game.buyMultiplier,
  money: game.money,
});

const mapDispatchToProps = (dispatch) => ({
  handleBuy: (name) => dispatch(buyItem(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
