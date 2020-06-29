import * as React from "react";
import { connect } from "react-redux";
import { closeMenu } from "../redux/thunks";
import { MenuPage, RootState, Theme } from "../types";

export interface MenuProps {
  currentpage: MenuPage;
  handleCloseMenu: () => void;
  theme: Theme;
}

const Menu: React.SFC<MenuProps> = (props: MenuProps) => {
  const { currentpage, handleCloseMenu, theme } = props;
  return (
    <dialog
      className={`nes-dialog ${theme === "dark" ? "is-dark" : ""}`}
      id="menu"
    >
      <form method="dialog">
        <p className="title">Main Menu</p>
        <h3>{currentpage.toLocaleUpperCase()}</h3>
        {/* <p>{content}</p> */}
        <menu className="dialog-menu">
          <button
            className="nes-btn is-primary"
            id="close-menu"
            onClick={() => handleCloseMenu()}
          >
            Close
          </button>
          {/* {secondaryActionText && (
            <button
              className="nes-btn"
              id="menu-secondary"
              onClick={() => secondaryAction()}
            >
              {secondaryActionText}
            </button>
          )} */}
        </menu>
      </form>
    </dialog>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentpage: state.menu.currentPage,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseMenu: () => dispatch(closeMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
