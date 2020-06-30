import * as React from "react";
import { connect } from "react-redux";
import { setInventoryIsOpen } from "../redux/actions/inventory";
import { InventoryItem, RootState, Theme } from "../types";
import InventoryItemComponent from "./InventoryItem";

export interface InventoryProps {
  handleCloseInventory: () => void;
  isOpen: boolean;
  items: InventoryItem[];
  theme: Theme;
}

const Inventory: React.SFC<InventoryProps> = (props: InventoryProps) => {
  const { handleCloseInventory, isOpen, items, theme } = props;

  return (
    <div className={`dialog-container ${isOpen ? "" : "hidden"}`}>
      <dialog
        className={`dialog-inner nes-dialog ${
          theme === "dark" ? "is-dark" : ""
        }`}
        id="inventory"
      >
        <form method="dialog">
          <p className="title">Inventory</p>

          <div className="nes-table-responsive">
            <table
              className={`nes-table is-bordered is-centered ${
                theme === "dark" ? "is-dark" : ""
              }`}
            >
              <tbody>
                <tr>
                  <InventoryItemComponent item={items[0]} />
                  <InventoryItemComponent item={items[1]} />
                  <InventoryItemComponent item={items[2]} />
                  <InventoryItemComponent item={items[3]} />
                  <InventoryItemComponent item={items[4]} />
                </tr>
                <tr>
                  <InventoryItemComponent item={items[5]} />
                  <InventoryItemComponent item={items[6]} />
                  <InventoryItemComponent item={items[7]} />
                  <InventoryItemComponent item={items[8]} />
                  <InventoryItemComponent item={items[9]} />
                </tr>
                <tr>
                  <InventoryItemComponent item={items[10]} />
                  <InventoryItemComponent item={items[11]} />
                  <InventoryItemComponent item={items[12]} />
                  <InventoryItemComponent item={items[13]} />
                  <InventoryItemComponent item={items[14]} />
                </tr>
                <tr>
                  <InventoryItemComponent item={items[15]} />
                  <InventoryItemComponent item={items[16]} />
                  <InventoryItemComponent item={items[17]} />
                  <InventoryItemComponent item={items[18]} />
                  <InventoryItemComponent item={items[19]} />
                </tr>
                <tr>
                  <InventoryItemComponent item={items[20]} />
                  <InventoryItemComponent item={items[21]} />
                  <InventoryItemComponent item={items[22]} />
                  <InventoryItemComponent item={items[23]} />
                  <InventoryItemComponent item={items[24]} />
                </tr>
              </tbody>
            </table>
          </div>

          <menu className="dialog-menu">
            <button
              className="nes-btn is-primary"
              id="close-inventory"
              onClick={() => handleCloseInventory()}
            >
              Close
            </button>
          </menu>
        </form>
      </dialog>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isOpen: state.inventory.isOpen,
  items: state.inventory.items,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseInventory: () => dispatch(setInventoryIsOpen(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
