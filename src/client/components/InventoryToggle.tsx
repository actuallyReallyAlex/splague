import * as React from "react";
import { connect } from "react-redux";
import { setInventoryIsOpen } from "../redux/actions/inventory";

export interface InventoryToggleProps {
  handleInventoryToggle: () => void;
}

const InventoryToggle: React.SFC<InventoryToggleProps> = (
  props: InventoryToggleProps
) => {
  const { handleInventoryToggle } = props;
  return (
    <button
      className="nes-btn is-primary"
      id="open-inventory"
      onClick={() => handleInventoryToggle()}
    >
      Inventory
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleInventoryToggle: () => dispatch(setInventoryIsOpen(true)),
});

export default connect(null, mapDispatchToProps)(InventoryToggle);
