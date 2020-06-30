import * as React from "react";
import { connect } from "react-redux";
import { setInventoryIsOpen } from "../redux/actions/inventory";
import { RootState, Theme, InventoryItem } from "../types";

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
                  <td className="inventory-slot">
                    {items[0] && (
                      <img alt={items[0].name} src={items[0].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[1] && (
                      <img alt={items[1].name} src={items[1].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[2] && (
                      <img alt={items[2].name} src={items[2].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[3] && (
                      <img alt={items[3].name} src={items[3].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[4] && (
                      <img alt={items[4].name} src={items[4].image} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="inventory-slot">
                    {items[5] && (
                      <img alt={items[5].name} src={items[5].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[6] && (
                      <img alt={items[6].name} src={items[6].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[7] && (
                      <img alt={items[7].name} src={items[7].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[8] && (
                      <img alt={items[8].name} src={items[8].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[9] && (
                      <img alt={items[9].name} src={items[9].image} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="inventory-slot">
                    {items[10] && (
                      <img alt={items[10].name} src={items[10].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[11] && (
                      <img alt={items[11].name} src={items[11].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[12] && (
                      <img alt={items[12].name} src={items[12].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[13] && (
                      <img alt={items[13].name} src={items[13].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[14] && (
                      <img alt={items[14].name} src={items[14].image} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="inventory-slot">
                    {items[15] && (
                      <img alt={items[15].name} src={items[15].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[16] && (
                      <img alt={items[16].name} src={items[16].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[17] && (
                      <img alt={items[17].name} src={items[17].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[18] && (
                      <img alt={items[18].name} src={items[18].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[19] && (
                      <img alt={items[19].name} src={items[19].image} />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="inventory-slot">
                    {items[20] && (
                      <img alt={items[20].name} src={items[20].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[21] && (
                      <img alt={items[21].name} src={items[21].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[22] && (
                      <img alt={items[22].name} src={items[22].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[23] && (
                      <img alt={items[23].name} src={items[23].image} />
                    )}
                  </td>
                  <td className="inventory-slot">
                    {items[24] && (
                      <img alt={items[24].name} src={items[24].image} />
                    )}
                  </td>
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
