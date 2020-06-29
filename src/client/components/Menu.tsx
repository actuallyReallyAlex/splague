import * as React from "react";
import { connect } from "react-redux";
import Stats from "./Stats";
import { setIsVisible } from "../redux/actions/menu";
import { MenuPage, RootState, Theme } from "../types";

export interface MenuProps {
  currentpage: MenuPage;
  handleCloseMenu: () => void;
  isVisible: boolean;
  theme: Theme;
}

const Menu: React.SFC<MenuProps> = (props: MenuProps) => {
  const { currentpage, handleCloseMenu, isVisible, theme } = props;
  return (
    <div className={`dialog-container ${isVisible ? "" : "hidden"}`}>
      <dialog
        className={`dialog-inner nes-dialog ${
          theme === "dark" ? "is-dark" : ""
        }`}
        id="menu"
      >
        <form method="dialog">
          <p className="title">Main Menu</p>
          <h3>{currentpage.toLocaleUpperCase()}</h3>
          {currentpage === "stats" && <Stats />}
          <menu className="dialog-menu">
            <button
              className="nes-btn is-primary"
              id="close-menu"
              onClick={() => handleCloseMenu()}
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
  currentpage: state.menu.currentPage,
  isVisible: state.menu.isVisible,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseMenu: () => dispatch(setIsVisible(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
