import * as React from "react";
import { connect } from "react-redux";
import { setInventoryIsOpen } from "../redux/actions/inventory";
import { RootState, Theme } from "../types";

export interface InventoryProps {
  handleCloseInventory: () => void;
  isOpen: boolean;
  theme: Theme;
}

const Inventory: React.SFC<InventoryProps> = (props: InventoryProps) => {
  const { handleCloseInventory, isOpen, theme } = props;
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
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                </tr>
                <tr>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                </tr>
                <tr>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                </tr>
                <tr>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                </tr>
                <tr>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
                  <td className="inventory-slot"></td>
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
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseInventory: () => dispatch(setInventoryIsOpen(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
