import * as React from "react";
import { connect } from "react-redux";
import { buyItem } from "../redux/actions";
import { Theme, RootState } from "../types";

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
  theme: Theme;
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
    theme,
  } = props;
  const finalCost = cost * buyMultiplier;
  return (
    <div
      className={`nes-container with-title is-centered ${
        theme === "dark" ? "is-dark" : ""
      }`}
      id={`${name.toLowerCase().replace(/ /gm, "-")}-container`}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <p className="title">{name}</p>
      <span>
        {count.toLocaleString()}x - ${income.toLocaleString()}
        /second
      </span>
      <span>Base Income - ${baseIncome.toLocaleString()}/second</span>
      <span>Bonus Multiplier - {bonusMultiplier}</span>
      <span id="progress">Progress - {count % 10} / 10</span>
      <button
        className={`nes-btn is-primary ${
          money < finalCost ? "is-disabled" : ""
        }`}
        disabled={money < finalCost}
        onClick={() => handleBuy(name)}
      >
        BUY {buyMultiplier}x - ${finalCost.toLocaleString()}
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  buyMultiplier: state.game.buyMultiplier,
  money: state.game.money,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleBuy: (name) => dispatch(buyItem(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
